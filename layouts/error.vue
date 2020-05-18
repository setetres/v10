<template>
    <section class="section section--error">
        <div class="gutter _d-flex _flex-column">
            <div class="ooo-container-fluid _p-0 _w-100">
                <div class="ooo-row">
                    <div class="ooo-col-xl-6">
                        <p v-if="error.statusCode === 404" class="section__title _mb-0">Page not found</p>
                        <p v-else class="section__title _mb-0">An error occurred</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        <div class="gutter _d-flex _justify-content-between _align-items-center _mb-0">
            <p>
                <span class="section__signature">Find Yourself</span>
            </p>
            <p>
                <nuxt-link to="/" class="link link--internal">Back</nuxt-link>
            </p>
        </div>
    </section>
</template>
<script>
    import LocomotiveScroll from '~/mixins/locomotive-scroll.js'
    import Footer from '~/components/footer.vue'

    export default {

        components: {
            Footer
        },

        mixins: [
            LocomotiveScroll
        ],

        props: {
            error: {
                type: Object,
                default: () => {}
            }
        },

        mounted() {
            this.$nextTick(() => {
                document.querySelector('.footer').classList.remove('footer--loading')
            })
        },

        beforeRouteLeave(to, from, next) {
            document.querySelector('.logo').classList.remove('logo--active')
            document.querySelector('.footer').classList.add('footer--loading')
            next()
        },

        head() {
            return {
                title: 'Sete Três — v10'
            }
        }
    }
</script>
