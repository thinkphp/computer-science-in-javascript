var BinaryTreeSearch = {

       _root: null,

       adds: function( val ) {

             var Node = {left: null,
                         value: val,
                         right: null
             }

             if(this._root == null) {

                this._root = Node    

             } else {

                var current = this._root 
            

                for(;;) {

                  if(current.value > val) {

                           if(current.left == null) {
                                current.left = Node
                                break
                           } else {
                                current = current.left
                           }
 
                  } else {

                           if(current.right == null) {
                                current.right = Node
                                break
                           } else {
                                current = current.right
                           }


                  }   
                }
             }             
       },

       toArray: function() {

                var out = []

                this.travers(function( node ){

                     out.push(node.value)
                }) 

            return out
       },

       toString: function() {

                return this.toArray().toString()
       },

       inorder2: function(root) {
        
                if(root.left) this.inorder2(root.left)
                console.log(root.value) 
                if(root.right) this.inorder2(root.right)
       },  

       inorder: function() {


                function _inorder(node) {

                     if(node) {

                        if(node.left) _inorder(node.left)

                        console.log(node.value)

                        if(node.right) _inorder(node.right)
                     }
                } 

                _inorder(this._root)                        
          
       },  


       travers: function( fn ) {

                function _inorder(node) {

                     if(node) {

                        if(node.left) _inorder(node.left)

                        fn.call(this, node) 

                        if(node.right) _inorder(node.right)
                     }
                } 

                _inorder(this._root)                  
       },

       search: function( value ) {

                 var curr = this._root, found = false;

                 while(!found && curr) {

                        if(value == curr.value) {

                          found = true 

                        } else if(search < curr.value) {

                                  curr = curr.left
                        } else {

                                  curr = curr.right
                        }
                 }

              return found
       },

       size: function() {

             var counter = 0

             this.travers(function(node) {

                  counter++
             })   

          return counter
       },

       size2: function() {

            return (this.toArray()).length 
       },

       remove: function( val ) {

               var current = this._root,
                   parent,  
                   replacement,
                   parentReplacement,
                   childCount = 0,
                   found = false;

                   //we determine whether the value exists or not in our tree
                   while(!found && current) {

                        if(val < current.value) {

                           parent = current
                           current = current.left
   
                        } else if(val > current.value) {

                           parent = current
                           current = current.right 

                        } else if(current.value == val){

                               found = true   
                        }                        
                   }
                  
                   //if this element exists then
                   if(found) {
 
                             //we compute the number of the children
                             childCount += (current.left!=null ? 1 : 0) + (current.right!=null ? 1 : 0)

                             //if the current is even the root
                             if(current == this._root) {

                                switch(childCount) {

                                       case 0:

                                       break 
                                       case 1:

                                       break
                                       case 2: 

                                       replacement = this._root.left

                                       while(replacement.right != null) {

                                             parentReplacement = replacement
                                             replacement = replacement.right
                                       }


                                       if(parentReplacement != null) {

                                             parentReplacement.right = replacement.left

                                             replacement.left = this._root.left
                                             replacement.right = this._root.right

                                             this._root = replacement 
                                       }  
                                } 

                             } else {




                             }
                   }

       }
}

