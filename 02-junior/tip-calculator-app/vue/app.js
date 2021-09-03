Vue.createApp({
  data() {
    return {
      bill: undefined,
      people: undefined,
      tipPercent: 10,
      tipPercentDisplay: undefined,
    };
  },
  computed: {
    tipAmount() {
      if (this.bill <= 0 || this.people <= 0) {
        return Number(0).toFixed(2);
      }
      const amount = (this.bill || 0) * (this.tipPercent / 100),
        people = this.people || 1;
      return (amount / people).toFixed(2);
    },
    total() {
      if (this.bill <= 0 || this.people <= 0) {
        return Number(0).toFixed(2);
      }
      const amount = (this.bill || 0) + Number(this.tipAmount),
        people = this.people || 1;
      return Number(amount / people).toFixed(2);
    },
  },
  methods: {
    reset() {
      (this.bill = undefined),
        (this.people = undefined),
        (this.tipPercentDisplay = undefined),
        (this.tipPercent = 10);
    },
    resetTipField() {
      this.tipPercentDisplay = undefined;
    },
  },
  watch: {
    tipPercentDisplay(newVal, oldVal) {
      this.tipPercent = newVal || 10;
    },
  },
}).mount("#app");
