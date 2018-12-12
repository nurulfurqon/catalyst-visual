import 'vue-svgicon/dist/polyfill'
import Vue from 'vue'
import SvgIcon from 'vue-svgicon'
import Icons from './Icons/Icons.vue'
import Illustrations from './Illustrations/Illustrations.vue'

// Default tag name is 'svgicon'
Vue.use(SvgIcon, {
  tagName: 'svgicon'
})

const Components = {
  Icons,
  Illustrations
}

Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name])
})

export default Components
