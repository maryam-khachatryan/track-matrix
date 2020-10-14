<template>
    <div class="base-select">
        <label>{{ label }}</label>
        <v-select
                :value="value"
                solo
                append-icon="mdi-chevron-down"
                v-on="$listeners"
                v-bind="$$attrs"
                class="mt-3"
        >
            <template v-slot:selection="{ item, index }">
                <v-chip v-if="index < 2"
                    color="primary"
                    class="v-chip-span">
                    <span>{{ item }}</span>
                    <v-icon>mdi-close-circle-outline</v-icon>
                </v-chip>
                <span
                        v-if="index === 2"
                        class="grey--text caption"
                >(+{{ value.length - 2 }})</span>
            </template>
        </v-select>
    </div>
</template>

<script>
    export default {
        name: 'BaseSelect',
        inheritAttrs: false,
        model: {
            event: 'input'
        },
        props: {
            value: [Array, String],
            label: String
        },
        computed: {
            $$attrs () {
                delete this.$attrs.lable;
                return this.$attrs;
            }
        }
    }
</script>

<style lang="scss">
.base-select {
    .v-select {
        .v-chip-span {
            background-color: #000B2C !important;
            border-radius: 3px !important;
            color: white !important;
            font-size: 14px !important;
            margin-right: 4px;
            .v-icon{
                color: white !important;
                font-weight: 400 !important;
                margin-left: 15px;
            }
        }

        &.v-input--is-disabled {
            .v-chip-span{
                background-color: #dadfea  !important;
                font-weight: 500;
                .v-icon{
                    color:#3E3F42 !important;
                }
            }
        }
    }
}
</style>
