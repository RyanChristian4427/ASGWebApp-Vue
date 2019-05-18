<template>
    <div>
        <app-filter></app-filter>

        <toolbar></toolbar>

        <drawer></drawer>

        <v-content>
            <div id="core-view">
                <v-fade-transition mode="out-in">
                    <router-view></router-view>
                </v-fade-transition>
            </div>
            <footer></footer>
        </v-content>
    </div>
</template>

<script>
    import AppFilter from '@/components/core/Filter.vue';
    import Toolbar from '@/components/core/Toolbar.vue';
    import Drawer from '@/components/core/Drawer.vue';
    import Footer from '@/components/core/Footer.vue';

    export default {
        name: 'Dashboard',
        components: {
            AppFilter,
            Toolbar,
            Drawer,
            Footer,
        },
    };
</script>

<style scoped>

</style>
