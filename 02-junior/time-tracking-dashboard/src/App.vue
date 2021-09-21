<template>
  <profile-card username="jeremy robson"/>
  <main>
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
