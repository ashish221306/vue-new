const getuser = {
    
    data() {
      return {
        firstname:'kljkl',
        lastname:'hdkjhjk',
        email:'john@gmail.com',
        gender:'male',
        alt:`${this.firstname} ${this.lastname}`,
        picture:'https://randomuser.me/api/portraits/men/49.jpg',
        users:[
            
        ]
      }
    },
    methods: {
     
     
      async getUser(){
        let url="https://randomuser.me/api";
        const res=await fetch(url);
        const {results}=await res.json();
        console.log(this.users)

      this.users.push(
           {firstname:results[0].name.first},
           {lastname:results[0].name.last},
           {email:results[0].email},
           {picture:results[0].picture.large},
           {gender:results[0].gender}
           )
      }
    },
  
    template: `
    <button @click="getUser" v-if="!users.length" class="btn" style="margin:auto;width:auto">getuser</button>
    <div class="user" v-for="user of users">
    <img :class="user.gender" :src="user.picture" :alt="user.firstname"/>
    <h2>{{user.firstname}} {{user.lastname}}</h2>
    <p>{{user.email}}</p>
    <button :class="user.gender" class="btn" style="width: auto;" @click="getUser">getUser</button>
    </div>
      `
  }
  
  