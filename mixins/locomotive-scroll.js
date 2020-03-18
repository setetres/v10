import _ from "lodash"

export default {
    data() {
        return {
            scrollPosition: 0
        }
    },

    watch: {
        $route() {
            this.lmS.update()
        }
    },

    mounted() {
        this.$nextTick(function() {
            this.lmS = new this.locomotiveScroll({
                el: document.querySelector(".section"),
                scrollbarClass:"scrollbar",
                smooth: true
            })

            window.addEventListener(
                "resize",
                _.debounce(this.onLmsResize.bind(this), 100)
                )
            }.bind(this)
        )
    },

    destroyed() {
        this.lmS.destroy();
        window.removeEventListener("resize", this.onLmsResize)
    },

    methods: {
        onLmsResize() {
            this.lmS.update()
        }
    }
}
