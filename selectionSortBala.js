function selectionSortTest(array) {
    var length = array.length;
    var indexMin;
    var swap = function (array, index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };

    for (var i = 0; i < length - 1; i++) { //{2}
        indexMin = i; //{3}
        for (var j = i+1; j < length; j++) { //{4}
            if (array[indexMin] > array[j]) { //{5}
                indexMin = j; //{6}
            }
        }

        console.log(indexMin);
        if (i !== indexMin){
            var temp = array[i];
            array[i] = array[indexMin];
            array[indexMin] = temp;
            console.log(array);
        }
        
    }
    return array;
}


console.log(selectionSortTest([5, 3, 2, 4, 1]));

//[5,3,2,4,1]
[1,3,2,4,5]
[1,2,3,4,5]
//5 lowest 


var selectionSort = function(array){
    for(var i = 0; i < array.length; i++){
      //set min to the current iteration of i
      var min = i;
      for(var j = i+1; j < array.length; j++){
        if(array[j] < array[min]){
         min = j;
        }
      }
      var temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
    return array;
  };
  var array = [5, 3, 2, 4, 1];
  console.log('selectionSort should return [1,2,3,4,5]->',selectionSort(array));