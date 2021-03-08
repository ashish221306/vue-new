const allpost = {
  props: ['writtenby', 'name1', 'fontnow'],
  data() {
    return {
      posts: [],
      postFontSize: this.fontnow,

    }
  },
  methods: {
    // increaseFont() {
    //   this.postFontSize = this.fontnow
    // },

    async getUser() {
      let url = "https://randomuser.me/api";
      const res = await fetch(url);
      const { results } = await res.json();
      console.log(JSON.stringify(results));
    }
  },


  mounted() {
   
  },

  template: `
    <hr>
 
    <slot></slot>

    <button class="btn btn-font"  @click="$emit('increasefont',postFontSize);">
    <span>+</span>
    </button>



<!-- <h1 :style="{fontSize:postFontSize+'px'}"> {{writtenby}} - {{name1}}</h1>-->
   <h2 :style="{fontSize:postFontSize+'px'}" v-if="this.$root.posts.length" style="text-align:center">allpost</h2>
   <br>
 
    <div class="post-container">
    <div class="posts"  v-for="post of this.$root.posts">
    <b>{{post.id}}</b>
          <div :style="{fontSize:postFontSize+'px'}" class="content">
          {{index}}
            <h1 :style="{fontSize:postFontSize+'px'}">{{post.title}}</h1>
            <p :style="{fontSize:postFontSize+'px'}">{{post.description}}</p>
            <p :style="{fontSize:postFontSize+'px'}"> - By : {{post.writer}}</p>
          </div>
          <div class="image">
            <img :src="post.image" :alt="post.title" />
          </div>
    </div>
    </div>
   
    
    `
}

