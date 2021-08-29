var http = require("http");
var Heap = []
var sizeH = 0

function up( child ) {

      var parent = parseInt( child / 2 )

      while( parent != 0 ) {

            if(Heap[parent] > Heap[child]) {
               var aux = Heap[parent]
                   Heap[parent] = Heap[child]
                   Heap[child] = aux

                   child = parent
                   parent = parseInt( child / 2 )
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

      sizeH += 1

      Heap[ sizeH ] = value

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

http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});

    arr = [ 9, 8, -7, 6, -5, 4, 3, 2, 1 ]

    out = []

    heapify( arr )

    for (var i = 0; i < n; i++) {

        v = removeHeap()

        out.push( v )
    }

   // Send the response body as "Hello World"
   response.end( '<style>h1{color: green; font-size: 100px;} h2{color: lightgreen; font-size: 50px;}</style><h1>Heap Sort Algorithm</h1><h2>Input: ' + arr.toString() + '</h2><h2> Output: ' + out.toString() + '</h2>');

}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
