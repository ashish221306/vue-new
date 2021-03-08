const parent = {
    data() {
        return {
            cd: '',
        }
    },
    methods: {
        senddata(e) {
            this.cd = e;
            console.log(e);
        }
    },

    template: `
        
       <div class="parent">
       <div class="child">
       <child  v-on:senddata="senddata($event)"/>
       </div>

       <h3>parent</h3>
       <input type="text" readonly placeholder="receive child data" :value="cd"/>


       </div>
    
        
        `
}