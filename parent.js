const parent = {
    data() {
        return {
            cd: '',
            bgc: '#000',
            colors:['red','blue','green']
        }
    },
    methods: {
        senddata(e) {
            this.cd = e;
            console.log(e);
        },
        change_bg_color(e) {
            console.log(e);
            this.bgc = e
               if(this.cd){
                 this.bgc=this.cd
               }

              
               

        },
        sayhi() {
            //alert('hi')
        }
    },

    template: `
        
       <div class="parent" :style="{background:cd}" >
       <div class="child">
       <child  v-on:senddata="senddata($event)" v-on:oncheck="change_bg_color($event)"  v-on:welcome="sayhi"/>
       </div>
       <h3 >parent</h3>
       <input type="text" readonly placeholder="receive child data" :value="cd"/>
       </div>
    
        
        `
}