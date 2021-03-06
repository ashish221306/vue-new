const newpost = {
  props: ['ashish'],
  data() {
    return {
      title: 'nw post',
      description: 'descriptiomn',
      tags: 'ngshjc,sjkhrfj,kjswrf,kjsrhui',
      writer:'Ashish Kumar',
      image: 'https://images.unsplash.com/photo-1527151977613-a89904713c47?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxNjMwODg1fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60',
      posts:[],
      isDone:'component communication',
      id:1

    }
    
  },
  
  methods: {
    postArticle() {
      this.$root.posts.push( { title: this.title, description: this.description, tags: this.tags, image: this.image,writer:this.writer,id:this.id++}) 
     // localStorage.setItem('postsdata',this.$root.posts)
      
      
    }
  },
  template: `

    <div class="form"  name="post">
    {{ashish}}
    <form @submit.prevent="postArticle">
   
      <input type="text" name="title" placeholder="title" v-model="title" />
      <textarea name="description" placeholder="description" v-model="description" rows="3"></textarea>
      <input type="text" name="tags" placeholder="tags" v-model="tags" />
      <input type="text" name="image" placeholder="image" v-model="image" />
      <img v-if="image" :src="image" height="200" width="60"/>
      <input type="text" placeholder="post writer" v-model="writer"/>
      <input type="submit" value="post" />
    </form>
   
  </div>




 
    
    
    `
};


