<template>
    <div class="container">
      <div class="hero">
        <img src="./assets/images/mobile/logo.svg" alt="Meet">
        <img src="./assets/images/mobile/image-hero.png" alt="Collage of profile pictures">
        <h1><span>Group Chat</span> for Everyone</h1>
        <p>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
        <div class="button-div">
          <button class="cyan">Download <span>v1.3</span></button>
          <button class="purple">What is it?</button>
        </div>
      </div>
      <fade-in class="one">
        <p class="number">01</p>
        <div class="image__container">
          <img src="./assets/images/desktop/image-woman-in-videocall.jpg" alt="Woman in video call">
          <img src="./assets/images/desktop/image-women-videochatting.jpg" alt="Women videochatting">
          <img src="./assets/images/desktop/image-men-in-meeting.jpg" alt="Man in meeting">
          <img src="./assets/images/desktop/image-man-texting.jpg" alt="Man texting">
        </div>
        <span>Built for modern use</span>
        <h2>Smarter meetings, all in one place</h2>
        <p>
          Send messages, share files, show your screen, and record your meetings — all in one
          workspace. Control who can join with invite-only team access, data encryption, and data export.
        </p>
      </fade-in>
      <fade-in class="two">
        <p class="number">02</p>
        <h2>Experience more together</h2>
        <p>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
        <button class="purple">Download <span>v1.3</span></button>
      </fade-in>
    </div>
</template>

<script>
import FadeIn from './components/FadeIn.vue';
import { onMounted } from 'vue'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    FadeIn,
  },
  setup () {
    onMounted(() => {
      const fadeInElements = Array.from(document.querySelectorAll('section.fade-in'))

      function isElementVisible (elem) {
        let div = elem.getBoundingClientRect(),
            // right hand number as buffer
            elemTop = div.top + 100, 
            elemBottom = div.bottom;
        return elemTop < window.innerHeight && elemBottom >= 0
      }
      function handleScroll () {
        fadeInElements.forEach(e => {
          if (isElementVisible(e)) {
            e.style.opacity = 1;
            e.style.transform = 'scale(1)';
            fadeInElements.shift();
          }
        })
      }
      document.addEventListener('scroll', handleScroll)
    })
  }
}
</script>

<style>
  @import "assets/css/style.css";
</style>
