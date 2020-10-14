<template>
    <div class="base-input">
        <label>{{ label }}</label>
        <v-text-field
                :value="value"
                solo
                v-on="$listeners"
                v-bind="$attrs"
                class="mt-3"
        ></v-text-field>
    </div>
</template>

<script>
    export default {
        name: 'BaseInput',
        inheritAttrs: false,
        model: {
            event: 'input'
        },
        props: {
            value: [String, Number],
            label: String
        }
    }
</script>

<style lang="scss">

</style>
