<template>
    <header>
        <div class="profile-card__title">
            <img :src="getImgUrl(username)" alt="">
            <h1><span>Report for</span>{{username}}</h1>
        </div>
        <nav>
            <!-- This should be radio buttons and labels like on the tip calculator app? -->
            <input type="radio" name="timeframe" id="timeframe-daily" value="daily">
            <label for="timeframe-daily">Daily</label>
            <input type="radio" name="timeframe" id="timeframe-weekly" value="weekly" checked>
            <label for="timeframe-weekly">Weekly</label>
            <input type="radio" name="timeframe" id="timeframe-monthly" value="monthly">
            <label for="timeframe-monthly">Monthly</label>
        </nav>
    </header>
</template>

<script>
export default {
    name: "ProfileCard",
    props: ['username'],
    methods: {
        getImgUrl (t) {
            return `/img/image-${t.toLowerCase().replace(' ', '-')}.png`
        }
    }
}

</script>
