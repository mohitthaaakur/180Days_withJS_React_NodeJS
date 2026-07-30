      // Sort in decreasing order 
      let arr = [5,2,1,-10,8];
      arr.sort((a, b) => b - a);
      console.log(arr);
      // Copy and sort array
      let arr2 = ['HTML', 'JavaScript', 'CSS'];
      function copySorted(arr){
        // let sortedArr = [];
        // arr.forEach(element => {
        //   sortedArr.push(element)
        // });
        // return sortedArr.sort((a,b) => a.localeCompare(b)); 
        return arr.slice().sort((a,b) => a.localeCompare(b));
      };
      let sorted = copySorted(arr2);
      console.log(sorted);
      console.log(arr2);
