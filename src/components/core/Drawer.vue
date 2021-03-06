<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-navigation-drawer id="app-drawer" v-model="inputValue" app dark floating persistent mobile-break-point="991" width="260">
        <v-img :src="image" height="100%">
            <v-layout class="fill-height" tag="v-list" column>
                <v-list-tile avatar>
                    <v-list-tile-avatar color="white">
                        <v-img :src="logo" height="34" contain/>
                    </v-list-tile-avatar>
                    <v-list-tile-title class="title">
                        ASG
                    </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile v-if="responsive">
                    <v-text-field class="purple-input search-input" label="Search..." color="purple"></v-text-field>
                </v-list-tile>

                <div v-for="(link, i) in links" :key="i">
                    <v-list-tile v-if="!link.subLinks" :to="link.to" :active-class="color" avatar class="v-list-item">
                        <v-list-tile-action>
                            <v-icon>{{ link.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title v-text="link.text"/>
                    </v-list-tile>
                    <v-list-group v-else class="v-list-item">
                        <template v-slot:activator>
                            <v-list-tile >
                                <v-list-tile-action>
                                    <v-icon>{{ link.icon }}</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-title v-text="link.text" class="v-list__expandable"/>
                            </v-list-tile>
                        </template>
                        <v-list-tile v-for="(subLink, j) in link.subLinks" :key="j" :to="subLink.to" :active-class="color" avatar class="v-list-item">
                            <v-list-tile-title v-text="subLink.text"/>
                        </v-list-tile>
                    </v-list-group>
                </div>

            </v-layout>
        </v-img>
    </v-navigation-drawer>
</template>

<script>
    // Utilities
    import {
        mapMutations,
        mapState,
        mapGetters,
    } from 'vuex';

    export default {
        data: () => ({
            logo: './img/vuetifylogo.png',
            links: [
            ],
            adminLinks: [
                {
                    to: '/',
                    icon: 'mdi-view-dashboard',
                    text: 'Dashboard',
                },
                {
                    to: '/current-candidates',
                    icon: 'mdi-clipboard-outline',
                    text: 'Current Candidates',
                },
                {
                    to: '/process-candidates',
                    icon: 'mdi-file-account',
                    text: 'Process Candidates',
                },
                {
                    to: '/manage-user-accounts',
                    icon: 'mdi-account',
                    text: 'Manage User Accounts',
                },
            ],
            candidateLinks: [
                {
                    to: '/',
                    icon: 'mdi-view-dashboard',
                    text: 'Dashboard',
                },
                {
                    icon: 'mdi-account',
                    text: 'User Profile',
                    subLinks: [
                        {
                            to: '/user-profile',
                            icon: 'mdi-account',
                            text: 'User Profile',
                        },
                        {
                            to: '/update-contact',
                            icon: 'mdi-account',
                            text: 'Update Contact Details',
                        },
                    ],
                },
            ],
            responsive: false,
        }),
        computed: {
            ...mapState('app', ['image', 'color']),
            ...mapGetters('authentication', [
                'currentUser',
            ]),
            user() {
                return this.currentUser;
            },
            inputValue: {
                get() {
                    return this.$store.state.app.drawer;
                },
                set(val) {
                    this.setDrawer(val);
                },
            },
            items() {
                return this.$t('Layout.View.items');
            },
        },
        beforeMount() {
            // TODO this should work, but might need to be re-looked at when the drawer nonsense is fixed.
            // console.log(this.user.role);
            if (this.user.role === 'Admin') {
                this.links = this.adminLinks;
            } else {
                this.links = this.candidateLinks;
            }
        },
        mounted() {
            this.onResponsiveInverted();
            window.addEventListener('resize', this.onResponsiveInverted);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.onResponsiveInverted);
        },
        methods: {
            ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
            onResponsiveInverted() {
                this.responsive = window.innerWidth < 991;
            },
        },
    };
</script>

<style lang="scss">
    #app-drawer {
        .v-list__tile {
            border-radius: 4px;

            &--buy {
                margin-top: auto;
                margin-bottom: 17px;
            }
        }

        .v-image__image--contain {
            top: 9px;
            height: 60%;
        }

        .search-input {
            margin-bottom: 30px !important;
            padding-left: 15px;
            padding-right: 15px;
        }

        .v-list__expandable {
            font-size: 14px !important;
            font-weight: 300;
            padding: 0;
        }
    }
</style>
