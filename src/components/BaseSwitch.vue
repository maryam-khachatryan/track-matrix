<template>
    <v-switch
            :value="value"
            inset
            v-on="$listeners"
            v-bind="$attrs"
    >
    </v-switch>
</template>

<script>
    export default {
        name: 'BaseSwitch',
        inheritAttrs: false,
        model: {
            event: 'input'
        },
        props: [ 'value' ]
    }
</script>

<style lang="scss">
</style>
