
const routes = [


  { path: '', component: home },
  { path: '/newpost', component: newpost },
  { path: '/allpost', component: allpost },
  { path: '**', component: notfound },

]

const router = new VueRouter({
  routes: routes
})
var app = {
  router,
  data() {
    return {
      AppName: "Vue js Practise Project",
      posts: [],
      myname: 'ashish',
      postdata: ' done',
      currentRoute: window.location.pathname,

      /* dynamic css class for vue :class */
      cssClass: {
        'black': false,
        'red': true
      }
    }

  },
  methods: {
    toggleClass() {
      if (this.cssClass.black === false) {
        this.cssClass.black = true;
      } else {
        this.cssClass.black = false;

      }
    

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


