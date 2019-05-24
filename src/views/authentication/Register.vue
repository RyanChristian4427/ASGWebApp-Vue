<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout justify-center wrap>
            <v-flex xs12 md8>
                <material-card color="blue" title="ASG User Registration">
                    <v-form @submit.prevent="handleSubmit">
                        <v-container py-0>
                            <v-layout wrap>
                                <v-flex xs6 md6>
                                    <v-text-field label="First Name" class="blue-input" v-model="firstName" required autofocus></v-text-field>
                                </v-flex>
                                <v-flex xs6 md6>
                                    <v-text-field label="Last Name" class="blue-input" v-model="lastName" required autofocus></v-text-field>
                                </v-flex>
                                <v-flex xs12 md12>
                                    <v-text-field label="Email Address" class="blue-input" v-model="email" required autofocus></v-text-field>
                                </v-flex>
                                <v-flex xs6 md6>
                                    <v-text-field label="Password" class="blue-input" v-model="password"
                                                  :type="showPassword ? 'text' : 'password'"
                                                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                                  @click:append="showPassword = !showPassword"
                                                  required></v-text-field>
                                </v-flex>
                                <v-flex xs6 md6>
                                    <v-text-field label="Confirm Password" class="blue-input" v-model="confirmPassword"
                                                  required></v-text-field>
                                </v-flex>
                                <v-flex xs12 text-xs-right>
                                    <v-btn class="mx-0 font-weight-light" color="blue" type="submit">Register</v-btn>
                                    <img v-show="Registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loading gif"/>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-form>
                </material-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="js">
    export default {
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                submitted: false,
                showPassword: false,
            };
        },
        computed: {
            Registering() {
                return this.$store.state.authentication.status.loggingIn;
            },
        },
        created() {
            // reset login status
            return this.$store.dispatch('authentication/logout');
        },
        methods: {
            async handleSubmit(e) {
                // this.submitted = true;
                // const { email, password } = this;
                // if (email && password) {
                //     await this.$store.dispatch('authentication/login', { email, password });
                //     this.$router.push({ name: 'Dashboard' });
                // }
            },
        },
    };
</script>

