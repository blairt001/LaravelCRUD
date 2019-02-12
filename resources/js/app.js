

require('./bootstrap');

window.Vue = require('vue');

window.VueRouter = require('vue-router').default;

window.VueAxios = require('vue-axios').default;

Window.Axios = require('axios').default;

let AppLayout = require('./components/App.vue');


const listBlogs = vue.component('listBlogs', require('./components/listBlogs'));
const viewBlog = vue.component('vueBlog', require('./components/viewBlog.vue'));
const deleteBlog = vue.component('deleteBlog', require('./components/deleteBlog.vue'));
const eeditBlog = vue.component('editBlog', require('./components/editBlog.vue'));
const addBlog = vue.component('addBlog', require('./components/addBlog.vue'));

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/*
const app = new Vue({
    el: '#app'
});
*/

Vue.use(VueRouter,VueAxios,axios);



const routes = [
        {
                name:'listBlogs',
                path:'/',
                component: listBlogs

        },
        {
                name:'viewBlog',
                path:'/view/:id',
                component: viewBlog

        },
        {
                name:'deleteBlog',
                path:'/delete-blog',
                component: deleteBlog

        },
        {
                name:'editBlog',
                path:'/edit:/id',
                component: editBlog

        },
        {
                name:'addBlog',
                path:'/add-blog',
                component: addBlog

        }

];



const router = new VueRouter({mode: 'history', routes: routes});

new Vue(
    Vue.util.extend({
        router },
        AppLayout)
).$mount('#app')

