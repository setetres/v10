<template>
    <section class="section section--lifestream">
        <div class="gutter _d-flex _flex-column">
            <div class="ooo-container-fluid _p-0">
                <div class="ooo-row">
                    <div class="ooo-col-xl-6">
                        <p class="section__title">
                            We will all join the lifestream... you are no exception.
                        </p>
                    </div>
                    <div class="ooo-col-xl-6">
                        <p class="_mb-0">
                            Look always to the eternal flow of time which is far greater than the span of human life. It will teach you more, than staying here in the valley... What you will see will eventually become part of the life's dream.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="gutter _d-flex _flex-column">
            <div class="ooo-container-fluid _p-0 _w-100">
                <div class="ooo-row">
                    <div class="ooo-col-xl-8">
                        <div class="embed _mb-0">
                            <iframe width="560" height="388" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTpkSjevg5bS6qEG7pIH8W1P9pl6MmBNN08kVSX91xHRTM0HtcsQD2amvO6VjxyPna4UUDLQx0N-ADR/pubhtml?widget=true&amp;headers=false" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="gutter _d-flex _flex-column">
            <div class="ooo-container-fluid _p-0 _w-100">
                <div class="ooo-row">
                    <div class="ooo-col-xl-6">
                        <p class="section__title">
                            Under construction
                        </p>
                        <p class="_mb-0">
                            More coming soon.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="gutter _d-flex _justify-content-between _align-items-center _mb-0">
            <p>
                <span class="section__signature">Always Forward</span>
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
                title: 'Sete Três — Lifestream'
            }
        }
    }
</script>
