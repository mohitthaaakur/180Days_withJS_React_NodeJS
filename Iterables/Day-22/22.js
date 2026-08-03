      let str = 'str are iterables';
      // for (const iterator of str) {
      //   console.log(iterator);
      // }
      let iterator = str[Symbol.iterator]();
      while (true) {
        let result = iterator.next();
        if (result.done) break;
        console.log(result.value);
      };
      let arrLike = {
        0: 'h',
        1: 'g',
        length: 2
      };
      let arr = Array.from(arrLike);
      arr.push('h');
      console.log(arr);
      let num = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        length: 4,
      };
      let arr2 = Array.from(num, num => num * num);
      console.log(arr2);
      let arr3 = Array.from(str);
      console.log(arr3);
      // surrogate-aware slice
      let str2 = '𝒳😂𩷶';
      console.log(str2.slice(0, 2)) // only 𝒳 as 2 unit code
      function slice( str, start, end){
        return Array.from(str).slice(start, end).join('');
      }
      console.log(slice(str2, 0, 2)); // now both 𝒳😂 as Arr store in single character for each
