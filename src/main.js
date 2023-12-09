// BOOTSTRAP Imports:
// https://getbootstrap.com/docs/5.3/getting-started/vite/
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
// import Alert from 'bootstrap/js/dist/alert';
// import { Tooltip, Toast, Popover } from 'bootstrap';

// Vue Imports
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
