<template>
  <section class="fade-in">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "FadeIn",
}
</script>

<style scoped>
  .fade-in {
    opacity: 0;
    transition: 0.4s all ease-out;
    transform: scale(0.8);
    justify-content: center;
  }
</style>