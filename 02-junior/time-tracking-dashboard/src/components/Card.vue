<template>
    <section class="card__container" :style="cardBackground">
        <div class="card__data">
            <h2>{{title}}</h2>
            <button></button>
            <p>{{hours}}hrs</p>
            <p>Last Week - {{lastWeek}}hrs</p>
        </div>
        <!-- <img :src="getImgUrl(title)" alt=""> -->
    </section>
</template>

<script>
export default {
    name: "Card",
    props: ["title", "hours", "lastWeek", "timeframe"],
    computed: {
        cardBackground() {
            const vars = {
                'work': 'hsl(15, 100%, 70%)',
                'play': 'hsl(195, 74%, 62%)',
                'study': 'hsl(348, 100%, 68%)',
                'exercise': 'hsl(145, 58%, 55%)',
                'social': 'hsl(264, 64%, 52%)',
                'self-care': 'hsl(43, 84%, 65%)'
            }
            return {
                '--cardbg': vars[this.title.toLowerCase().replace(' ', '-')],
                '--cardbg-img': `url(${this.getImgUrl(this.title)}`
                }
        }
    },
    methods: {
        getImgUrl (t) {
            console.log(t)
            return `img/icon-${t.toLowerCase().replace(' ', '-')}.svg`
        },
    }
}
</script>

<style scoped>
    .card__container {
        background-color: var(--cardbg);
        background-image: var(--cardbg-img);
    }
</style>