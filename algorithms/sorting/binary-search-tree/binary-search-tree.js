function BinarySearchTree() {

         this._root = null
}

BinarySearchTree.prototype.add = function( value ) {

         var Node = {value: value,
                     left: null,
                     right: null}

         if (this._root == null) {

             this._root = Node

         } else {

             var current = this._root;

             for(;;){

                 if(value < current.value) {

                    if(current.left != null) {

                       current = current.left 

                    } else {

                       current.left = Node

                       break;   
                    }  

                 } else {

                    if(current.right != null) {

                       current = current.right

                    } else {

                       current.right = Node

                       break;   
                    }  
                 }
             }
         }      
}

BinarySearchTree.prototype.travers = function( fn ) {

      var _inorder = function( node ) {
                     
                   if(node.left) {
                      _inorder(node.left)
                   } 

                   fn.call(this, node)

                   if(node.right) {
                      _inorder(node.right)
                   } 
                 
          }
      
      _inorder(this._root)
}

BinarySearchTree.prototype.getSortedArray = function() {

      var output = []
      this.travers(function( node ) {
           output.push(node.value)
      })
      return output
}
