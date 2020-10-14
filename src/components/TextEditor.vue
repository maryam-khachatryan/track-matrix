<template>
  <rich-text-editor @update="onUpdate"/>
</template>
 
<script>
export default {
  name: 'RichTextEditPanel',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    onUpdate (text) {
      this.text = text
    }
  }
}
</script>