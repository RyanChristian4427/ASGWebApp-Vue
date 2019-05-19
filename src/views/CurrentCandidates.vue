<template>
    <v-container fill-height fluid grid-list-xl>
        <v-layout justify-center wrap>
            <v-flex md12>
                <material-card color="primary" title="Current Candidates" text="All candidates that are currently
                                                        enrolled and haven't been given a final recommendation">
                    <v-data-table :headers="headers" :items="items" hide-actions>
                        <template slot="headerCell" slot-scope="{ header }">
                            <span class="subheading font-weight-light text-success text--darken-3" v-text="header.text"></span>
                        </template>
                        <template slot="items" slot-scope="{ item }">
                            <td>{{ item.name }}</td>
                            <td>{{ item.referenceNumber }}</td>
                            <td>{{ item.preferredCourseLocation }}</td>
                            <td>{{ item.lastCompletedStage }}</td>
                        </template>
                    </v-data-table>
                </material-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        // name: 'CurrentCandidates',
        data: () => ({
            headers: [
                {
                    sortable: true,
                    text: 'Name',
                    value: 'name',
                },
                {
                  sortable: true,
                  text: 'Reference Number',
                  value: 'referenceNumber',
                },
                {
                    sortable: true,
                    text: 'Location',
                    value: 'preferredCourseLocation',
                },
                {
                    sortable: true,
                    text: 'Stage',
                    value: 'lastCompletedStage',
                },
            ],
            items: [
                {
                    name: 'Error Loading User Data',
                    referenceNumber: '',
                    preferredCourseLocation: '',
                    lastCompletedStage: '',
                },

            ],
        }),
        computed: {
            ...mapGetters('candidates', ['currentCandidates']),
            populateCandidatesTable() {
                return this.currentCandidates;
            }
        },
        created() {
           this.items = this.populateCandidatesTable.items;
        },
    };
</script>

<style scoped>

</style>
