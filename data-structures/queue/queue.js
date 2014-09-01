function Queue() {
}

Queue.prototype.push = function( data ) {
}

Queue.prototype.pop = function() {

}


Queue.prototype.isEmpty = function() {

      if(this.len == 0) return 1
              else  
                        return 0
}

Queue.prototype.peek = function() {

      if(this.top == null) {

         return null;   

      } else {

         return this.top.data;
      }
}

Queue.prototype.all = function() {

}

