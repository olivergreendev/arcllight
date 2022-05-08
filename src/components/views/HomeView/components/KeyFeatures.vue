<template>
    <div class="key-features-wrapper">
        <div class="key-features-menu">
            <div class="key-feature"
                 :class="{'active': featureOneActive}"
                 ref="feature1"
                 @click="featureOneActive = true">
                Find business partners
            </div>
            <div class="key-feature"
                 :class="{'active': featureTwoActive}"
                 ref="feature2"
                 @click="featureTwoActive = true">
                Network with similar minds
            </div>
            <div class="key-feature"
                 :class="{'active': featureThreeActive}"
                 ref="feature3"
                 @click="featureThreeActive = true">
                Share your brilliant ideas
            </div>
            <div class="key-feature"
                 :class="{'active': featureFourActive}"
                 ref="feature4"
                 @click="featureFourActive = true">
                Connect with investors
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        featureOneActive: false, featureTwoActive: false, featureThreeActive: false, featureFourActive: false
    }),
    methods: {
        
    }
}
</script>

<style scoped>
.key-features-wrapper {
    border-bottom: 1px solid #181529;
}
.key-features-wrapper .key-features-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1080px;
    margin: 0 auto;
}
.key-features-wrapper .key-features-menu .key-feature {
    position: relative;
    padding: 20px 0;
    cursor: pointer;
}
.key-features-wrapper .key-features-menu .key-feature.active {
    color: var(--accent-01);
}
.key-features-wrapper .key-features-menu .key-feature::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0%;
    background-color: var(--accent-01);
    transition: width 0.2s ease;
}
.key-features-wrapper .key-features-menu .key-feature.active::after {
    width: 100%;
}
</style>