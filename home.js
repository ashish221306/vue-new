const home = {
    props: [],
    data() {
      return {
      postname:''
  
      }
    },
    methods: {
     getPostname(){
        postname:this.$route.params.postname
     },
     goback(){
       window.history.length>1?this.$router.go(-1):this.$router.push('/')
     }
    },
    template: `
  

  
  
  
   
      
      
      `
  };
  
  
  