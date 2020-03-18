<template>
    <section class="section section--archive">
        <div class="gutter _d-flex _flex-column">
            <div class="ooo-container-fluid _p-0">
                <div class="ooo-row">
                    <div class="ooo-col-xl-7">
                        <a href="https://v1.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v1.jpg" width="1920" height="1200"></a>
                    </div>
                    <div class="ooo-col-xl-5">
                        <a href="https://1997.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v1997.jpg" width="1920" height="1200"></a>
                    </div>
                    <div class="ooo-col-xl-5">
                        <a href="https://v2.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v2.jpg" width="1920" height="1200"></a>
                    </div>
                    <div class="ooo-col-xl-7">
                        <a href="https://v3.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v3.jpg" width="1920" height="1200"></a>
                    </div>
                    <div class="ooo-col-xl-6">
                        <a href="https://v4.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v4.jpg" width="1920" height="1200"></a>
                    </div>
                    <div class="ooo-col-xl-6">
                        <a href="https://v5.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v5.jpg" width="1920" height="1200"></a>
                    </div>
                    <div class="ooo-col-xl-8">
                        <a href="https://v6.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v6.jpg" width="1920" height="1200"></a>
                    </div>
                    <div class="ooo-col-xl-4">
                        <a href="https://v7.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v7.jpg" width="1920" height="1200"></a>
                    </div>
                    <div class="ooo-col-xl-4">
                        <a href="https://v8.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v8.jpg" width="1920" height="1200"></a>
                    </div>
                    <div class="ooo-col-xl-8">
                        <a href="https://v9.setetres.st" class="link link--external" target="_blank" rel="noopener"><img src="/images/archive-v9.jpg" width="1920" height="1200"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="gutter _d-flex _justify-content-between _align-items-center _mb-0">
            <p>
                <span class="section__signature">Hurt goes on</span>
            </p>
            <p>
                <nuxt-link to="/" class="link link--internal">Back</nuxt-link>
            </p>
        </div>
    </section>
</template>
<script>
    import LocomotiveScroll from '~/mixins/locomotive-scroll.js'

    export default {
        components: {
        },

        mixins: [
            LocomotiveScroll
        ],

        mounted() {
            this.$nextTick(() => {
            })
        },

        beforeRouteLeave(to, from, next) {
            setTimeout(function() {
                next()
            }, 500)
        },

        head() {
            return {
                title: 'Sete Três — Archive'
            }
        }
    }
</script>
