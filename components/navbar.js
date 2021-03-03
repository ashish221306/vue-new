const navigation={
    template:`
    <nav>
    <ul>
     <li v-for="route of routes">
       <router-link :to="routeLink">{{route.routeName}}</router-link>
      </li>
    </ul>
  </nav>
    
    `
}