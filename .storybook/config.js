import { configure, addDecorator } from '@storybook/vue'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function loadStories() {
  const req = require.context('../stories/', true, /\.js$/)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
