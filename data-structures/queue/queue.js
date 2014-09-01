/**
 * A queue is a first-in-first-out (FIFO) data structure
 * The data are added to the end of the queue and removed from the front.
 */
function Queue() {

    this.queue = []

    this.offset = 0 
}

Queue.prototype.push = function( data ) {

      this.queue.push( data )

      if(console.log) console.log("added to queue " + data)
}

Queue.prototype.pop = function() {

      var data

      if(this.isEmpty()) {
              //for debug
              if(console.log) console.log("Queue is empty!")
              return null
      }

      data = this.queue[ this.offset ]

      if(console.log) console.log("pop from queue " + data)
  
      this.queue = this.queue.slice( ++this.offset )

      this.offset = 0 
    
    return data    
}


Queue.prototype.isEmpty = function() {

      if( this.queue.length == 0 ) return 1

                    else  
                                   return 0
}  

Queue.prototype.peek = function() {

      return this.isEmpty() ? null : this.queue[ this.offset ]
}

Queue.prototype.all = function() {

      if(this.queue.length > 0)

         return this.queue

    return null
}

