const newpost = {
  props: [],
  data() {
    return {
      title: '',
      description: '',
      tags: '',
      image: '',
      posts:[]

    }
  },
  methods: {
    postArticle() {
      this.posts = [
        { title: this.title, description: this.description, tags: this.tags, image: this.image ,...this.posts}
      ]
    }
  },
  template: `
    <div class="form" name="post">
    <form @submit.prevent="postArticle">
      <input type="text" name="title" placeholder="title" v-model="title" />
      <textarea name="description" placeholder="description" v-model="description" rows="3"></textarea>
      <input type="text" name="tags" placeholder="tags" v-model="tags" />
      <input type="text" name="image" placeholder="image" v-model="image" />
      <input type="submit" value="post" />
    </form>
  </div>
    
    
    `
};