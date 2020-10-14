<template>
    <div>
        <label>{{ label }}</label>
        <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="date"
                    label="Picker in menu"
                    append-icon="mdi-calendar-multiselect"
                    readonly
                    solo
                    v-bind="attrs"
                    v-on="on"
                    class="mt-3"
                ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
        </v-menu>
    </div>
</template>

<script>
    export default {
        name: 'BaseDatePicker',
        inheritAttrs: false,
        props: {
            value: {},
            label: String
        },
        data: () => ({
            date: new Date().toISOString().substr(0, 10),
            menu: false,
            modal: false,
            menu2: false,
        }),
        watch: {
            date() {
                this.$emit('change', this.date)
            }
        }
    }
</script>
<style lang="scss">
</style>