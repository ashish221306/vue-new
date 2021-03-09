const child = {
    data() {
        return {
            selected:'',
            cdata: '',
            checked: '',
            bg_color: '',
            options:['red','green','yellow','brown','#000'],
        }
    },
    methods: {
        oncheckchild(){
         if(this.checked){
            this.bg_color="green";
         }else{
        
                this.bg_color="transparent"
            
         }
        
      }
    },
    onselected(){
        this.cdata=this.selected
        alert(this.selected);
    }
    ,created(){
       this.$watch('bg_color',(n,o)=>{
          alert(`bg_color changed ......,  old value : ${o} ,   new value :${n}`);
         this.cdata=n;
        
       }) 

       this.$watch('selected',()=>{
        this.cdata=this.selected
         })
    }
    ,

    template: `
   <div style="display:flex;flex-direction:column">
   <h2>Child</h2>
  
   <select v-model="selected">
  <option :selected="true">select color</option>
  <option :value="option" v-for="option in options">{{option}}</option>
</select>
   <input type="text" v-model="cdata" placeholder="sent to parent"><button class="btn" style="width:auto"  @click="$emit('senddata',cdata);$emit('welcome')">pass data</button>
   <br><div class="chk">
   <input type="checkbox" v-model="checked" @change="oncheckchild();$emit('oncheck',bg_color)" id="background" name="vehicle1" >
   <label for="vehicle1"> Night Mode</label>
   </div><br>
   </div>
    `
}