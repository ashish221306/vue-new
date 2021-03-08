
     const component1 = {
        template: "  <h1>Learning Vue JS</h1>",
      };
    
      const footercmp={
        template:`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit modi neque in natus aspernatur quaerat quos voluptatem dolores officia sed perferendis, animi corporis reprehenderit dicta obcaecati sint vitae maiores? 
        <p>copyright&copy;2021</p>

        <slot>
          <h3>It will be replaced by <myfooter></myfooter></h3>
        </slot>

       <div class="btnslot" title="button slot" style="border:1px solid red;padding:10px">
       <slot name="buttoncontent">
       </slot>
       </div>
      
        
        `
      }


