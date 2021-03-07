
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
  props:['notes'],
  data() {
    return {
      AppName: "Vue js Practise Project",
      posts: [],
      notes:'my notes ......',
      value:'',
      myname: 'ashish',
      show: true,
      postdata: ' done',
      incfont: 20,
      currentRoute: window.location.pathname,

      /* dynamic css class for vue :class */
      cssClass: {
        'black': false,
        'red': true
      }
    }


  },
  emits:[],
  methods: {
    toggleClass() {
      if (this.cssClass.black === false) {
        this.cssClass.black = true;
      } else {
        this.cssClass.black = false
      }


    },
    descreasefont(){
    this.incfont-=30;
    if(this.incfont<30){
      this.incfont=20
    }
    }



  },
  mounted() {


  },
  computed() {
    window.myfontsize = this.incfont;
  }
  ,
  created() {
    // this.$on('increaseFont',data=>{console.log("data :"+data)})
  }

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
app1.component('getuser',getuser)
const vm = app1.mount("#myapp");




console.log("myfontsize :" + window.myfontsize)