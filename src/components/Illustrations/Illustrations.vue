<template>
  <svgicon
    :name="name"
    :width="sizes[size]"
    :height="sizes[size]"
    :original="true"
  />
</template>
<script>
import illustrations from './json/names.json'
import sizes from './json/sizes.json'

export default {
  name: 'Illustrations',
  props: {
    name: {
      type: String,
      required: true,
      validator (value) {
        return illustrations.indexOf(value) >= 0
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator (value) {
        return Object.keys(sizes).indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      sizes
    }
  },
  created () {
    require(`./data/${this.name}.js`)
  }
}
</script>
