let deepNestedArr = [1, [true, 2, [3, 4, ['hello', [{sum: 1+1}, 5]]]]];
      function deepFlattArr (array){
        let flatArr = [];
        if ( !(Array.isArray(array))) return array;
        for (let items of array) {          
           if ( !(Array.isArray(items))) {
            flatArr.push(items)
           } else if (Array.isArray(items)){
            let val = deepFlattArr(items);
            for ( let items of val){
              flatArr.push(items)
            }            
           }
        } return flatArr;
      }
      console.log(deepFlattArr(deepNestedArr));
      // Translate border-left-width to borderLeftWidth
      let str = "background-color";
      function camelize (str){
        let dashFreeStr = str.split('');
        let finalArr = [];
        for (let word of dashFreeStr) {
          
        }
        return dashFreeStr;
      }
      console.log(camelize(str));