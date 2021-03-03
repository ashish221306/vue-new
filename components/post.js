const allpost={
  props:[],
  data(){
    return{
      posts:[]
    }
  },
    template:`
    <div class="posts" v-for="post of posts">
          <div class="content">
            <h1>{{post.title}}</h1>
            <p>{{post.description}}</p>
          </div>
          <div class="image">
            <img :src="post.image" :alt="post.title" />
          </div>
        </div>
    `
}