


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
  props: ['notes'],
  data() {
    return {
      AppName: "Vue js Practise Project",
      posts: [],
      notes: 'my notes ......',
      value: '',
      myname: 'ashish',
      show: true,
      postdata: ' done',
      postslist:'',
      incfont: 20,
      currentRoute: window.location.pathname,
      /* dynamic css class for vue :class */
      cssClass: {
        'black': false,
        'red': true
      }
    }


  },
  emits: [],
  methods: {
    toggleClass() {
      if (this.cssClass.black === false) {
        this.cssClass.black = true;
      } else {
        this.cssClass.black = false
      }


    },
    descreasefont() {
      this.incfont -= 30;
      if (this.incfont < 30) {
        this.incfont = 20
      }
    }
    ,
    async getpostlist(){
      const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(res);
      this.postslist=res
    }



  },
  mounted() {


  },
  
  computed: {

    currentcomponent() {
      return routes[this.currentRoute] || this.notfound
    }
  },
  // render(){
  //   return h(this.currentcomponent)
  // },

};




const app1 = Vue.createApp(app);
app1.component("myheader", component1);
app1.component('allpost', allpost);
app1.component('newpost', newpost);
app1.component('myfooter', footercmp);
app1.component('navbar', navigation);
app1.component('home', home)
app1.component('notfound', notfound)
app1.component('getuser', getuser);
app1.component('child', child);
app1.component('parent', parent);
const vm = app1.mount("#myapp");

console.log("myfontsize :" + window.myfontsize)




