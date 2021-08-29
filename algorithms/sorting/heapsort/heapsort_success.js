var Heap = []
var sizeH = 0
 
function up( child ) {
 
      var parent = parseInt(child / 2)
 
      while( parent ) {
 
            if(Heap[parent] > Heap[child]) {
 
               var aux = Heap[parent]
                   Heap[parent] = Heap[child]
                   Heap[child] = aux
 
                   child = parent
                   parent = parseInt(child / 2)
            } else {
              break
            }
      }
}
 
function down( parent ) {
 
         while( 2 * parent <= sizeH ) {
 
                var child = 2 * parent
 
                if( (2 * parent + 1) <= sizeH && Heap[ 2 * parent + 1 ] < Heap[ 2 * parent ]) {
 
                    child += 1
                }
 
                if(Heap[parent] <= Heap[child]) {
                  break
                }
 
                var aux = Heap[parent]
                    Heap[parent] = Heap[child]
                    Heap[child] = aux
 
                 parent = child
         }
}
 
function insertHeap( value ) {
 
      Heap[ ++sizeH ] = value
 
      up( sizeH )
}
 
function removeHeap( ) {
 
       ret = Heap[ 1 ]
 
       Heap[ 1 ] = Heap[ sizeH ]
 
       sizeH -= 1
 
       down( 1 )
 
       return ret
 
}
 
function heapify( arr ) {
 
        n = arr.length
 
        for (var i = 0; i < n; i++) {
 
             insertHeap( arr[i] )
        }
}
 
arr = [9, 8, 7, 6, -5, -1, -3, 5]
 
n = arr.length
 
out = []
 
heapify( arr )
 
for (var i = 0; i < n; i++) {
 
    out.push( removeHeap() )
}
 
print("Input:")
for(var i in arr) {
	print(arr[i])
}
 
 
print("Output:")
for(var i in out) {
	print(out[i])
}
 
