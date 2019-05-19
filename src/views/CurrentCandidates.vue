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
                            <td>{{ item.location }}</td>
                            <td>{{ item.stage }}</td>
                        </template>
                    </v-data-table>
                </material-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
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
                    text: 'Location',
                    value: 'location',
                },
                {
                    sortable: true,
                    text: 'Stage',
                    value: 'stage',
                },
            ],
            items: [
                {
                    name: 'Dakota Rice',
                    location: 'Cardiff',
                    stage: 'Ground School Exam',
                },
                {
                    name: 'Minerva Hooper',
                    location: 'Somerset',
                    stage: 'Flight Assessment',
                },
                {
                    name: 'Sage Rodriguez',
                    location: 'Aberdeenshire',
                    stage: 'Operator\'s Manual',
                },
                {
                    name: 'Philip Chanley',
                    location: 'Cardiff',
                    stage: 'Ground School',
                },
                {
                    name: 'Doris Greene',
                    location: 'Somerset',
                    stage: 'Assign Course',
                },
                {
                    name: 'Mason Porter',
                    location: 'Aberdeenshire',
                    stage: 'Make Recommendation',
                },
            ],
        }),
    };
</script>

<style scoped>

</style>
