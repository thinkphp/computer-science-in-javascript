    function bsearch( arr, li, ls, searchValue) {

         var m; 

             if(li>ls) {return;}
            
             m = parseInt((li+ls)/2);             

             if(Number(arr[m]) < searchValue) {return bsearch(arr,m+1,ls,searchValue);}   

                                else if(arr[m] > searchValue) {return bsearch(arr,li,m-1,searchValue);}   

                                       else {return m+1;} 
    }


    function bsearch2( arr, target ) {

            if(arr.length < 0) return -1

            var middle = ~~(arr.length / 2) 

            var middle_value = arr[ middle ]

            if(target < middle_value) return bsearch2(arr.slice(0, middle), target)
   
            else if(target > middle_value) {

                 var v = bsearch2(arr.slice(middle+1), target)  

                 if(v < 0) { return v }

                    else {

                         return middle + 1 + v

                   }
            } 

            return middle
    }

