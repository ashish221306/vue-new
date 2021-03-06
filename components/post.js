const allpost = {
  props: ['temp'],
  data() {
    return {
      posts: [],
    
    }
  },
 
 
  mounted() {
    console.log(this.isDone)
  },

  template: `
    <hr>


   <h2 v-if="this.$root.posts.length" style="text-align:center">allpost</h2>
   <br>
 
    <div class="post-container">
    <div class="posts" v-for="post of this.$root.posts">
    <b>{{post.id}}</b>
          <div class="content">
          {{index}}
            <h1>{{post.title}}</h1>
            <p>{{post.description}}</p>
            <p> - By : {{post.writer}}</p>
          </div>
          <div class="image">
            <img :src="post.image" :alt="post.title" />
          </div>
    </div>
    </div>
   
    `
}