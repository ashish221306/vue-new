const child = {
    data() {
        return {
          
            cdata:''
        }
    },
    methods: {
       
    }
    ,
    
    template:`
   <div class="">
   <h2>Child</h2>
   <input type="text" v-model="cdata" placeholder="sent to parent"><button class="btn" @click="$emit('senddata',cdata)">pass data</button>
   </div>
    `
}