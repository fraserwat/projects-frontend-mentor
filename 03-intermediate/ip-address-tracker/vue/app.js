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
      const apiKey = process.env.IPAPI;
      await fetch(
        `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`
      )
        .then((rsp) => rsp.json())
        .then((rsp) => {
          this.location = `${rsp.location.city}, ${rsp.location.country}`;
          this.timezone = `UTC ${rsp.location.timezone}`;
          this.ISP = rsp.isp;

          if (this.longitude == null) {
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
      const mapApi = process.env.MAPAPI;
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken: mapApi,
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
      let inputIP = document.querySelector("input").value;
      if (inputIP == "") {
        inputIP = await fetch("https://api.ipify.org/?format=json")
          .then((rsp) => rsp.json())
          .then((rsp) => rsp.ip);
      }
      this.ipAddress = inputIP;
      this.updateLocationData(this.ipAddress);
    },
  },
}).mount("#app");
