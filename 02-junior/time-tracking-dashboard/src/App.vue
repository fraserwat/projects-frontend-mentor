<template>
  <profile-card username="jeremy robson" @timeframe-change="updateTimeframe"/>
  <main>
    <card 
      v-for="(user, index) in userProfile" 
      v-bind:title="user.title" 
      :key="user.title" 
      v-bind:userdata="userProfile[index].timeframes[this.currentTimeframe]"
    />
  </main>
</template>

<script>
import Card from './components/Card.vue'
import ProfileCard from './components/ProfileCard.vue'
import UserData from './data/jeremy-robson.json'

export default {
  name: 'App',
  data () {
    return  {
      currentTimeframe: "weekly",
      userProfile: UserData
    }
  },
  components: {
    ProfileCard, Card 
  },
  methods: {
    updateTimeframe (newTime) {
      this.currentTimeframe = newTime;
    }
  }
}
</script>

<style>
  @import "assets/css/style.css";
</style>
