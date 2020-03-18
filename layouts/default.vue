<template>
    <div>
        <input id="dark-mode" type="checkbox" class="dark-mode">
        <div class="application">
            <nuxt />
        </div>
    </div>
</template>
<script>
    export default {
        components: {
        },

        mounted() {
            const checkbox = document.querySelector('.dark-mode');

            checkbox.checked = localStorage.getItem('darkMode') === 'true';

            checkbox.addEventListener('change', function (event) {
                localStorage.setItem('darkMode', event.currentTarget.checked);
            });
        },

        head() {
            return {
                title: 'Sete Três'
            }
        }
    }
</script>
