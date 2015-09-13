
  var HeapSort = (function() {

      var Heap = [], 
          sizeHeap = 0, 
          out = [], 
          _len;

           
      function init( arr ) {

          var n = arr.length; 

          _len = n;

          for(i = 0; i < n; i++) insertHeap( arr[ i ] )
      }

      function insertHeap( val ) {

               Heap[ ++sizeHeap ] = val
               
               up( sizeHeap );
      }

      function _swap(a, b) {

              var x;

              x = Heap[ a ] ^ Heap[ b ]

                  Heap[ a ] = x ^ Heap[ a ]

                  Heap[ b ] = x ^ Heap[ b ]
      }

      function up( child ) {

               var parrent = parseInt( child / 2 )

               while( parrent ) {

                      if(Heap[ parrent ] > Heap[ child ]) {

                         _swap( parrent, child )

                         child = parrent

                         parrent = parseInt( child / 2 )

                      } else break
               }
      }     

      function down( parrent ) {

               while( 2 * parrent <= sizeHeap ) {

                      var child = 2 * parrent

                      if(2 * parrent + 1 <= sizeHeap && Heap[ 2 * parrent + 1 ] < Heap[ 2 * parrent ]) child++

                      if(Heap[ parrent ] <= Heap[ child ]) break;

                      _swap( parrent, child );

                       parrent = child                        
               }
      } 
 
      function removeHeap() {

           var val = Heap[ 1 ]

               Heap[ 1 ] = Heap[ sizeHeap-- ]

               down( 1 )

               out.push( val )
      }

      function get() {

           return out;
      }

      function sort() {
          
           for(i = 1; i <= _len; ++i) removeHeap();
      }

      return {init: init, get: get, sort: sort} 

  })();
