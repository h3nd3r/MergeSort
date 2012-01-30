/*
** Return an sorted array
*/

function merge( array1, array2 ) {

  var sorted_array = new Array();
  var l = 0; var r = 0; var s = 0;

  while( l < array1.length && r < array2.length ) {

    if(array1[l] <= array2[r] && l != array1.length){
      sorted_array.push(array1[l])
      l++;
    }
    else{
      sorted_array.push(array2[r]);
      r++;
    }
  }

  while(l < array1.length){
      sorted_array.push(array1[l]);
      l++;
  }
  while(r < array2.length){
      sorted_array.push(array2[r]);
      r++;
  }

  return sorted_array;
}

exports.sort = function ( array ) {

  var b=0; var e=array.length;

  if(e == 1 || e == 0)
    return array

  if(array.length == 2)
  {
    var temp = new Array(1);
    temp[0] = array[0];
    var temp2 = new Array(1);
    temp2[0] = array[1];
    return merge(temp, temp2);
  }
  else
  {
    var midpoint = Math.floor(array.length/2);
    return merge(this.sort(array.slice(0,midpoint)), this.sort(array.slice(midpoint,array.length)));
  }
}


