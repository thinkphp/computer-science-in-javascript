var BinarySearchTree = function() {

    var Node = function(key, value, left, right, parent) {

        return {

           key: (typeof key == "undefined" ? null : key),
           value: (typeof value == "undefined" ? null : value),
           left: (typeof left == "undefined" ? null : left),
           right: (typeof right == "undefined" ? null : right),
           parent: (typeof right == "undefined" ? null : parent),
        };
    },

    //private member root of the binary tree
    _root = new Node(),

    insertNode = function(node, key, value, parent) {

               if(node.key == null) {

                 node.key = key
                 node.value = value
                 node.left = new Node()
                 node.right = new Node()
                 node.parent = parent;

               } else {

                 if(node.key > key) {

                    insertNode(node.left, key, value, node)
 
                 } else {

                    insertNode(node.right, key, value, node)
                 }
               }
    },

    searchNode = function(node, key) {

               if(node.key != null) {
                  
                  if(node.key == key) {

                     return node.value
                  }
 
                  else if (node.key > key) {

                     return searchNode(node.left, key) 
                  }

                  else {

                     return searchNode(node.right, key)
                  }

               } else {

                  return null
               }
               
    },

    deleteNode = function(node, key) {

               if(node.key != null) {

                       if(node.key == key) {

                          if(node.left.key == null && node.right.key == null) {

                             if(node.parent.key < node.key) node.parent.right = new Node() 
                                                  else      node.parent.left = new Node()   
                          } else 


                          if(node.left.key != null && node.right.key == null) {

                             if(node.parent.key < node.key) node.parent.right = node.left 
                                                  else      node.parent.left = node.left   
                          } else

                          if(node.left.key == null && node.right.key != null) {

                             if(node.parent.key > node.key) node.parent.left = node.right
                                                     else   node.parent.right = node.right       

                          } else if(node.left.key != null && node.right.key != null) {

                                 mostlyright(node, node.left)
                          }

                             

                       } else if(node.key > key) {

                              deleteNode(node.left, key)

                       } else {

                              deleteNode(node.right, key)
                       }
               } else {

                      console.log("Not found! Nothing to remove!")
               }
    }, 

    mostlyright = function(p, q) {

            while(q.right.key!=null) {

                  q = q.right
            }
             
            //to do            
    },    

    traversNodeInorder = function(node, callback) {

           if(node.key != null) {

                if(node.left != null) {
                   traversNodeInorder(node.left, callback) 
                }

                callback(node.key, node.value)

                if(node.right != null) {
                   traversNodeInorder(node.right, callback) 
                } 
           }
    },

    traversNodePreorder = function(node, callback) {

           if(node.key != null) {

                callback(node.key, node.value)

                if(node.left != null) {
                   traversNodePreorder(node.left, callback) 
                }

                if(node.right != null) {
                   traversNodePreorder(node.right, callback) 
                } 
           }
    },

    traversNodePostorder = function(node, callback) {

           if(node.key != null) {

                if(node.left != null) {
                   traversNodePostorder(node.left, callback) 
                }

                if(node.right != null) {
                   traversNodePostorder(node.right, callback) 
                } 

                callback(node.key, node.value)
           }
    };

    return {

       insert: function(key, value) {

               key = parseInt(key) 

               insertNode(_root, key, value)
       },

       search: function( key ) {

               return searchNode(_root, key) 
       },


       delete: function( key ) {

               return deleteNode(_root, key) 
       },

       inorder: function( callback ) {

              traversNodeInorder(_root, callback)
       },

       preorder: function( callback ) {

              traversNodePreorder(_root, callback)
       },

       postorder: function( callback ) {

              traversNodePostorder(_root, callback)
       }          

    }
}
