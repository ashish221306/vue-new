const navigation = {
  data() {
    return {
      routes:[
        {link:'',routename:'home'},
        {link:'/newpost',routename:'new post'},
        {link:'/allpost',routename:'post'},
      ]

    }
  },

  methods() {
     "path"
  },
 
  
  template: `
    <nav role="navigation">
    <ul>
     <li v-for="route of routes">
       <router-link :to="route.link">{{route.routename}}</router-link>
      </li>
    </ul>
  </nav>
    
    `
}