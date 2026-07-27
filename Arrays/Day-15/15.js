       let breadCrumbs = ['home', 'products', 'electronics', 'laptops', 'gaming'];
       let pathStr = breadCrumbs.reduceRight((preVal, curVal) => {
        return preVal += ' > ' + curVal
       });
       console.log(pathStr);
       let nestedArr = [1, [2, [3, [4, [5]]]]];
       let nestedObj = { id: 1, id2: { a: 'sadasd'}, s: 'dfds',}
       function singleNestArr (arr){
        let values = [];
        for (let key in arr) {
          for (let items of arr[key]) {
            values.push(items);
          }
        }
        return values;
       };
       function deepNest (arr){
        let flatArr = [];
        if ( !(Array.isArray(arr))) return arr;
        for (let items of arr) {
          if (!(Array.isArray(items))){
            flatArr.push(items);
          } else if(Array.isArray(items)){
            let val = deepNest(items);
            for (let item of val) {
              flatArr.push(item);
            }            
         }        
       }
       return flatArr;
      };
      let str = 'heikcisc'
      let nstArr = [1, 'two', [3, [4]], true];
      console.log(deepNest(nestedArr));
      console.log(deepNest(str));
      console.log(deepNest(nstArr));
