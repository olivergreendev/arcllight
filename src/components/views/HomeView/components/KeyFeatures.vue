<template>
    <div class="key-features-wrapper">
        <!-- Menu -->
        <div class="key-features-menu-wrapper">
            <div class="key-features-menu">
                <div class="key-feature active"
                     ref="feature1"
                     @click="clickFeature('feature1', 1)">
                    Find business partners
                </div>
                <div class="key-feature"
                     ref="feature2"
                     @click="clickFeature('feature2', 2)">
                    Network with similar minds
                </div>
                <div class="key-feature"
                     ref="feature3"
                     @click="clickFeature('feature3', 3)">
                    Share your brilliant ideas
                </div>
                <div class="key-feature"
                     ref="feature4"
                     @click="clickFeature('feature4', 4)">
                    Connect with investors
                </div>
            </div>
        </div>
        <!-- Content -->
        <div class="key-feature-content">
            <div class="container">
                <div v-if="featureOneActive">find business partners content goes here</div>
                <div v-if="featureTwoActive">network with similar minds content goes here</div>
                <div v-if="featureThreeActive">share your brilliant ideas content goes here</div>
                <div v-if="featureFourActive">connect with investors content goes here</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        featureOneActive: true, featureTwoActive: false, featureThreeActive: false, featureFourActive: false
    }),
    methods: {
        clickFeature(ref, index) {
            this.$refs[ref].classList.add('active');
            // Remove the 'active' css class from all refs except the one clicked
            for (let i = 1; i < 5; i++) {
                if (i === index) { continue; }
                this.$refs[`feature${i}`].classList.remove('active');
            }
            // Reset feature active states
            this.featureOneActive = false;
            this.featureTwoActive = false;
            this.featureThreeActive = false;
            this.featureFourActive = false;
            // Set the selected feature active state to true
            switch(ref) {
                case 'feature1':
                    this.featureOneActive = true;
                    break;
                case 'feature2':
                    this.featureTwoActive = true;
                    break;
                case 'feature3':
                    this.featureThreeActive = true;
                    break;
                case 'feature4':
                    this.featureFourActive = true;
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style scoped>
.key-features-wrapper .key-features-menu-wrapper {
    border-bottom: 1px solid #181529;
}
.key-features-wrapper .key-features-menu-wrapper .key-features-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 40px;
}
.key-features-wrapper .key-features-menu-wrapper .key-features-menu .key-feature {
    position: relative;
    padding: 20px 0;
    cursor: pointer;
    user-select: none;
}
.key-features-wrapper .key-features-menu-wrapper .key-features-menu .key-feature.active {
    color: var(--accent-01);
}
.key-features-wrapper .key-features-menu-wrapper .key-features-menu .key-feature::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0%;
    background-color: var(--accent-01);
    transition: width 0.2s ease;
}
.key-features-wrapper .key-features-menu-wrapper .key-features-menu .key-feature.active::after {
    width: 100%;
}
</style>