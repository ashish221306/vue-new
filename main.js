

var app = {
    data() {
      return {
        AppName: "Vue js Practise Project",
        title: "",
        description: "",
        tags: "",
        image:
          "https://images.unsplash.com/photo-1527151977613-a89904713c47?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxNjMwODg1fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
        posts: [
        {title:this.title,description:this.description,tags:this.tags,image:''}
        ],
      };
    },
    methods: {
      postArticle() {
        this.posts = [
          {
            title: this.title,
            image: this.image,
            description: this.description,
          },
          ...this.posts,
        ];
      },
    },
  };

  

  const app1 = Vue.createApp(app);
  app1.component("myheader",component1);
  app1.component('allpost',allpost);
  app1.component('newpost',newpost);
  app1.component('myfooter',footercmp)
  app1.mount("#myapp");


  console.log('post :'+this.posts )