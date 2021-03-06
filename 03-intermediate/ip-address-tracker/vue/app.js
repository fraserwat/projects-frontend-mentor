import TOKEN from "/vue/config.js";

Vue.createApp({
  data() {
    return {
      ipAddress: null,
      location: null,
      timezone: null,
      ISP: null,
      latitude: null,
      longitude: null,
      mapObject: null,
      markerObject: null,
    };
  },
  async created() {
    this.ipAddress = await fetch("https://api.ipify.org/?format=json")
      .then((rsp) => rsp.json())
      .then((rsp) => {
        var newIP = rsp.ip;
        this.updateLocationData(newIP);
        return newIP;
      });
  },
  methods: {
    async updateLocationData(ip) {
      const apiKey = TOKEN.IPAPI;
      await fetch(
        `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`
      )
        .then((rsp) => rsp.json())
        .then((rsp) => {
          this.location = `${rsp.location.city}, ${rsp.location.country}`;
          this.timezone = `UTC ${rsp.location.timezone}`;
          this.ISP = rsp.isp;

          if (this.longitude == null) {
            // If we haven't declared a previous lat/lng, it will be the first load
            this.createMap(rsp.location.lat, rsp.location.lng);
          }
          this.longitude = rsp.location.lng;
          this.latitude = rsp.location.lat;
        })
        .then(() => this.updateMapData(this.longitude, this.latitude));
    },

    createMap(lat, long) {
      this.mapObject = L.map("mapid", {
        zoomControl: false,
        scrollWheelZoom: false,
      }).setView([lat, long], 12);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken: TOKEN.MAPAPI,
        }
      ).addTo(this.mapObject);
      document.getElementById("mapid").style.zIndex = 1;

      var myIcon = L.icon({
        iconUrl: "images/icon-location.svg",
      });
      this.markerObject = L.marker([lat, long], { icon: myIcon }).addTo(
        this.mapObject
      );
    },

    updateMapData(long, lat) {
      const coords = new L.LatLng(lat, long);
      this.mapObject.setView(coords, 12);
      this.markerObject.setLatLng(coords);
    },

    async inputHandler(e) {
      e.preventDefault();
      const ipRegEx = new RegExp(
          "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
        ),
        input = document.querySelector("input");
      let inputIP = input.value;

      // REGEX Check
      if (!ipRegEx.test(inputIP) && inputIP.length >= 1) {
        input.classList.add("fail");
        return false;
      }
      input.classList.remove("fail");

      // Allow for empty string
      if (inputIP == "") {
        inputIP = await fetch("https://api.ipify.org/?format=json")
          .then((rsp) => rsp.json())
          .then((rsp) => rsp.ip);
      }

      // Update data()
      this.ipAddress = inputIP;
      this.updateLocationData(this.ipAddress);
    },
  },
}).mount("#app");
