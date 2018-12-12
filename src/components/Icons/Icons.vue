<template>
  <svgicon
    :name="name"
    :color="color ? colors[color] : null"
    :width="sizes[size]"
    :height="sizes[size]"
  />
</template>
<script>
import icons from './json/names.json'
import sizes from './json/sizes.json'
import colors from './json/colors.json'

export default {
  name: 'Icons',
  props: {
    name: {
      type: String,
      required: true,
      validator (value) {
        return icons.indexOf(value) >= 0
      }
    },
    color: {
      type: String,
      default: null,
      validator (value) {
        return Object.keys(colors).indexOf(value) >= 0 || value === null
      }
    },
    size: {
      type: String,
      default: 'default',
      validator (value) {
        return Object.keys(sizes).indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      colors,
      sizes
    }
  },
  created () {
    require(`./data/${this.name}.js`)
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  color: inherit;
  vertical-align: middle;
  fill: none;
  stroke: currentColor;
}
.svg-fill {
  fill: currentColor;
  stroke: none;
}
</style>
