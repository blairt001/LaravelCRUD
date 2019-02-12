

require('./bootstrap');

window.Vue = require('vue');

window.VueRouter = require('vue-router').default;

window.VueAxios = require('vue-axios').default;

Window.Axios = require('axios').default;


// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/*
const app = new Vue({
    el: '#app'
});
*/

Vue.use(VueRouter,VueAxios,axios);


const router = new VueRouter({mode: 'history', routes: routes});

new Vue(
    Vue.util.extend({
        router },
        AppLayout)
).$mount(#app)

