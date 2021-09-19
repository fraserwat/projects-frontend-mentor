<template>
  <header>
    <profile-card user-name="jeremy robson"/>
  </header>
  <main>
    <card activity="work" this-week="" last-week=""/>
    <card activity="play" this-week="" last-week=""/>
    <card activity="study" this-week="" last-week=""/>
    <card activity="exercise" this-week="" last-week=""/>
    <card activity="social" this-week="" last-week=""/>
    <card activity="self care" this-week="" last-week=""/>
  </main>
</template>

<script>
import Card from './components/Card.vue'
import ProfileCard from './components/ProfileCard.vue'

export default {
  name: 'App',
  components: {
    ProfileCard, Card 
  }
}
</script>
