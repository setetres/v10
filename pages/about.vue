<template>
    <section class="section section--about">
        <div class="cover">
            <span class="cover__signature">resize gang</span>
            <div class="setetres setetres--loading">
                <div class="setetres__letter setetres__letter--s">
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
                <div class="setetres__letter setetres__letter--e">
                    <div />
                    <div />
                </div>
                <div class="setetres__letter setetres__letter--t">
                    <div />
                </div>
                <div class="setetres__letter setetres__letter--e">
                    <div />
                    <div />
                </div>
                <div class="setetres__letter setetres__letter--t">
                    <div />
                </div>
                <div class="setetres__letter setetres__letter--r">
                    <div />
                    <div />
                    <div />
                </div>
                <div class="setetres__letter setetres__letter--e">
                    <div />
                    <div />
                </div>
                <div class="setetres__letter setetres__letter--s">
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </div>
        <div class="gutter _d-flex _flex-column">
            <div class="ooo-container-fluid _p-0">
                <div class="ooo-row">
                    <div class="ooo-col-xl-6">
                        <p class="section__title">
                            Hello, my name is Guilherme Pangnotta.
                        </p>
                        <p class="section__title">
                            Born and raised in São Paulo now living in Belo Horizonte, Brazil.
                        </p>
                    </div>
                    <div class="ooo-col-xl-6">
                        <p class="section__title">
                            Currently working as a Product Designer at <a class="link link--external" href="https://hotmart.com" target="_blank" rel="noopener">Hotmart</a>, Tattoo Artist at <a class="link link--external" href="https://inkstarter.xxxxxxx.ooo" target="_blank" rel="noopener">InkStarter</a> and also a member of the <a class="link link--external" href="https://awwwards.com" target="_blank" rel="noopener">Awwwards</a> Jury.
                        </p>
                    </div>
                    <div class="ooo-col-xl-5">
                        <p class="_mb-0">
                            I'm also changing profile pictures on <a class="link link--external" href="https://facebook.com/setetres" target="_blank" rel="noopener">Facebook</a>,
                            travelling and taking photos on <a class="link link--external" href="https://instagram.com/setetres" target="_blank" rel="noopener">Instagram</a>,
                            writing code on <a class="link link--external" href="https://github.com/setetres" target="_blank" rel="noopener">GitHub</a>,
                            behaving professionally on <a class="link link--external" href="https://linkedin.com/in/setetres" target="_blank" rel="noopener">LinkedIn</a>
                            and doing nothing on <a class="link link--external" href="https://twitter.com/setetres" target="_blank" rel="noopener">Twitter</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="gutter _d-flex _justify-content-between _align-items-center _mb-0">
            <p>
                <span class="section__signature">Pang</span>
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
                var setetres = document.querySelector('.setetres')

                setetres.classList.remove('setetres--loading')
                setTimeout(function() {
                    setetres.classList.add('setetres--loaded')
                }, 3000)

                document.querySelectorAll('.reveal').forEach(function(item) {
                    item.classList.add('reveal--active')
                })
            })
        },

        beforeRouteLeave(to, from, next) {
            setTimeout(function() {
                next()
            }, 500)
        },

        head() {
            return {
                title: 'Sete Três — About'
            }
        }
    }
</script>
