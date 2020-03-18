<template>
    <section class="section section--home">
        <div class="gutter _d-flex _flex-column">
            <div class="_d-flex _justify-content-between">
                <Logo />
            </div>
            <div class="ooo-row">
                <div class="ooo-col-xl-6">
                    <nav class="menu">
                        <ul>
                            <li class="menu__item">
                                <div class="reveal reveal--bottom">
                                    <div>
                                        <nuxt-link to="/about" class="link link--internal link--profile">
                                            <span class="link__icon" />
                                            About
                                        </nuxt-link>
                                    </div>
                                </div>
                            </li>
                            <li class="menu__item">
                                <div class="reveal reveal--bottom">
                                    <div>
                                        <nuxt-link to="/archive" class="link link--internal link--archive">
                                            <span class="link__icon" />
                                            Archive
                                        </nuxt-link>
                                    </div>
                                </div>
                            </li>
                            <li class="menu__item">
                                <div class="reveal reveal--bottom">
                                    <div>
                                        <nuxt-link to="/inkstarter" class="link link--internal link--inkstarter">
                                            <span class="link__icon" />
                                            InkStarter
                                        </nuxt-link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="ooo-col-xl-6">
                    <nav class="menu">
                        <ul>
                            <li class="menu__item">
                                <div class="reveal reveal--bottom">
                                    <div>
                                        <nuxt-link to="/lifestream" class="link link--internal link--lifestream">
                                            <span class="link__icon" />
                                            Lifestream <sup>New</sup>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </li>
                            <li class="menu__item">
                                <div class="reveal reveal--bottom">
                                    <div>
                                        <nuxt-link to="/mncrft" class="link link--internal link--mncrft">
                                            <span class="link__icon" />
                                            MNCRFT <sup>New</sup>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <Footer />
        <div class="gutter _d-flex _justify-content-between _align-items-center _mb-0">
            <p>
                <span class="section__signature">Est 2008</span>
            </p>
        </div>
    </section>
</template>
<script>
    import LocomotiveScroll from '~/mixins/locomotive-scroll.js'
    import Logo from '~/components/logo.vue'
    import Footer from '~/components/footer.vue'

    export default {
        components: {
            Footer,
            Logo
        },

        mixins: [
            LocomotiveScroll
        ],

        mounted() {
            this.$nextTick(() => {
                document.querySelector('.footer').classList.remove('footer--loading')

                document.querySelectorAll('.reveal').forEach(function(item) {
                    item.classList.add('reveal--active')
                })

                setTimeout(function() {
                    document.querySelector('.logo').classList.add('logo--active')
                    document.querySelector('.dark-mode').classList.add('dark-mode--active')
                }, 250)
            })
        },

        beforeRouteLeave(to, from, next) {
            document.querySelector('.logo').classList.remove('logo--active')
            document.querySelector('.footer').classList.add('footer--loading')

            document.querySelectorAll('.reveal').forEach(function(item) {
                item.classList.remove('reveal--active')
            })

            setTimeout(function() {
                next()
            }, 500)
        },

        head() {
            return {
                title: 'Sete Três'
            }
        }
    }
</script>
