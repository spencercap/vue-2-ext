import Vue from 'vue'
import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

const name = browser.i18n.getMessage('extName');
browser.devtools.panels.create(name, '', 'devtools.html');
// chrome.devtools.panels.create(name, '', 'devtools.html');
