function _combsort( comparer ) {

            var shrinkFactor = 1.3, 

                gap = size,

                swapped;

            while( gap > 1 || swapped == true) {

                   if(gap > 1) gap = Math.floor( gap / shrinkFactor )

                   swapped = false

                   for(var i = 0; i + gap < size; ++i) 

                   if( comparer(arr[ i ], arr[ i + gap ] ) > 0) { 

                      _swap(i, i+gap)

                      swapped = true
                   }
            }               
}
