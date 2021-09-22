<template>
    <header>
        <div class="profile-card__title">
            <img :src="getImgUrl(username)" alt="">
            <h1><span>Report for</span>{{username}}</h1>
        </div>
        <nav>
            <input type="radio" name="timeframe" id="timeframe-daily" value="daily" @change="onRadioChange">
            <label for="timeframe-daily">Daily</label>
            <input type="radio" name="timeframe" id="timeframe-weekly" value="weekly" @change="onRadioChange" checked>
            <label for="timeframe-weekly">Weekly</label>
            <input type="radio" name="timeframe" id="timeframe-monthly" value="monthly" @change="onRadioChange">
            <label for="timeframe-monthly">Monthly</label>
        </nav>
    </header>
</template>

<script>
export default {
    name: "ProfileCard",
    props: {
        username: {
            type: String
        }
    },
    methods: {
        getImgUrl (t) {
            return `/img/image-${t.toLowerCase().replace(' ', '-')}.png`
        },
        onRadioChange (btn) {
            this.$emit('timeframe-change', btn.target.value)
        }
    }
}
</script>
