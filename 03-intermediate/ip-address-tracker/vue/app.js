Vue.createApp({
  data() {
    return {
      location: undefined,
      timezone: undefined,
      ISP: undefined,
    };
  },
  computed: {
    ipAddress() {
      return fetch("https://api.ipify.org/?format=json")
        .then((response) => response.json())
        .then((response) => response.ip);
    },
  },
}).mount("#app");

function onLoad() {}
