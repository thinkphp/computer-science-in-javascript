function Stack() {
      this.top = null;
      this.len = 0;      
}

Stack.prototype.push = function( data ) {

      var node = {
               data: data,
               next: null
      }

      //for debug       
      if(console.log) console.log("Added to Stack: " + node.data)

      node.next = this.top

      //assigned to this.top
      this.top = node

      this.len = this.len + 1
           
}

Stack.prototype.pop = function() {

      var ret = null

      if(this.isEmpty()) {
      
         if(console.log) console.log("The Stack is empty")

         return null
      }

      ret = this.top.data

      if(console.log) console.log("pop " + ret)
       
      this.top = this.top.next

      this.len = this.len - 1
     
    return ret
}

Stack.prototype.getTop = function() {

      if(this.isEmpty()) {

         if(console.log) console.log("The Stack is empty")

         return null
      }
         
     return this.top.data
}

Stack.prototype.isEmpty = function() {

      if(this.len == 0) return 1
              else  
                        return 0
}

Stack.prototype.peek = function() {

      if(this.top == null) {

         return null;   

      } else {

         return this.top.data;
      }
}

Stack.prototype.all = function() {

      if(this.isEmpty()) return null

      arr = []
      i = 0
      var curr = this.top
      while(curr) {
            arr[i++] = curr.data
            curr = curr.next 
      } 

   return arr 
}

