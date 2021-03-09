const newpost = {
  props: ["ashish"],
  data() {
    return {

      title: "",
      description: "",
      tags: "",
      writer: "Ashish Kumar",
      image:
        "https://images.unsplash.com/photo-1527151977613-a89904713c47?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxNjMwODg1fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
      posts: [],
      isDone: "component communication",
      id: 1,
    };

  },

  methods: {
    postArticle() {
      this.$root.posts.push({
        title: this.title,
        description: this.description,
        tags: this.tags,
        image: this.image,
        writer: this.writer,
        id: this.id++,
      });




      var getlocalstaoragedata = localStorage.getItem('postsdata')
      if (getlocalstaoragedata) {
        var x = JSON.parse(getlocalstaoragedata)
       
      }

      localStorage.setItem('postsdata', JSON.stringify(this.$root.posts));
      var x = localStorage.getItem('postsdata')
      console.log("local storage data :"+x)
    },
  },
  template: `
  
    <div class="form"  name="post">
    <form @submit.prevent="postArticle" name="createpost" role="form">
    <label for="title">Title</label>
      <input id="title" type="text" name="title" placeholder="title" v-model="title" />
    <label for="desc">Description</label>

      <textarea id="desc" name="description" placeholder="description" v-model="description" rows="3"></textarea>
    <label for="tags">tags</label>

      <input id="tags" type="text" name="tags" placeholder="tags" v-model="tags" />

     <div class="input-group">
    <label for="image">image url</label>

     <input id="image" type="text" name="image" placeholder="image url" v-model="image" />  <img  v-if="image" :src="image" height="200" alt="akjlhdrifu" width="60"/>
     </div>
    <label for="author">author</label>
     
      <input id="author" type="text" placeholder="post writer" v-model="writer"/>
      
      <input id="subtn" type="submit" value="publish post" />
    
    </form>
   
  </div>




 
    
    
    `,
};
