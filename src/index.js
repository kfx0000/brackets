module.exports = function check(str, bracketsConfig) {

  function removeInternal(arr) {
    for(let count = 0; count <= arr.length; count++) {
      for(let confPointer = 0; confPointer < bracketsConfig.length; confPointer++) {
        if((arr[count] === bracketsConfig[confPointer][0])&&(arr[count+1] === bracketsConfig[confPointer][1])) {
          arr.splice(count, 2);
          removeInternal(arr);
        }
      }
    }
    return arr.length === 0;
  }

  return removeInternal(str.split(''));
}