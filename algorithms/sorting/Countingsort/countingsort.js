var http = require("http");

function countingsort( arr ) {

         n = arr.length

         B = []

         for (var i = 0; i < n; i++) B[ i ] = 0

         C = []

         for (var i = 0; i < n; i++) {

              C[ i ] = arr[ i ]
         }

         for (var i = 0; i < n - 1; i++) {

            for (var j = i + 1; j < n; j++) {

                 if(arr[ i ] > arr[ j ]) {

                    B[ i ] += 1

                 } else {

                    B[ j ] += 1
                 }
            }
         }

         for (var i = 0; i < n; i++) arr[ B[ i ] ] = C[ i ]

      return arr
}

http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/html'});

    arr = [ 9, 8, -7, 6, -5, 4, 3, 2, 1 ]

    arr = countingsort( arr )

    arr = arr.toString()

   // Send the response body as "Hello World"
   response.end( '<h1>Counting Sort Algorithm</h1><h2>' + arr + '</h2>');

}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
