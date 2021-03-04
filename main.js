
const routes = [


  { path: '', component: home },
  { path: '/newpost', component: newpost },
  { path: '/allpost', component: allpost },
  { path: '**', component: notfound },

]

const router=new VueRouter({
  routes
})
var app = {
  


   data() {
    return {
      AppName: "Vue js Practise Project",
      posts: [],
      myname: 'ashish',
      postdata: ' done',
      currentRoute: window.location.pathname
    }
  },
};

 


const app1 = Vue.createApp(app);
app1.use(router);
app1.component("myheader", component1);
app1.component('allpost', allpost);
app1.component('newpost', newpost);
app1.component('myfooter', footercmp)
app1.component('navbar', navigation)
app1.component('home', home)
app1.component('notfound', notfound)
const vm = app1.mount("#myapp");


