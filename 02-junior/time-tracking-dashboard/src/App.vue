<template>
  <profile-card username="jeremy robson"/>
  <main>
    <!-- v-bind:timeframe should be equal to a calculated property based on this.currentTimeframe and "user" from userProfile -->
    <card 
      v-for="user in userProfile" 
      :key="user.title" 
      v-bind:title="user.title" 
      v-bind:timeframe="this.currentTimeframe" 
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
      currentTimeframe: "Weekly",
      userProfile: UserData
    }
  },
  components: {
    ProfileCard, Card 
  }
}
</script>

<style>
  @import "assets/css/style.css";
</style>
