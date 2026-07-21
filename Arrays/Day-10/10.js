let messages = [
          'hello', 'how are you ?', 'i am fine', 'what are you doing', 'learning javascript', `that's great!`, 'keep it up!'
        ];
        function removeChatHistory (array){
          array.splice(4, 3);
          array.splice(2, 0, 'chat cleared');
          return array
        }
        console.log(removeChatHistory(messages));
        let products = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        function paginate (array, page, itemsPerPage){
          // let newArr;
          // if ( page === 1){
          //   newArr = array.slice(0);
          //   return newArr.slice( 0 , itemsPerPage) 
          // } else if (page === 2){
          //   newArr = array.slice(3);
          //   return newArr.slice( 0 , itemsPerPage)
          // } else if ( page === 3){
          //   newArr = array.slice(6);
          //   return newArr.slice( 0 , itemsPerPage)
          // }
          let start = (page - 1) * itemsPerPage;
          return array.slice(start, start + itemsPerPage)
        }
        console.log(paginate(products, 2, 3));
        let class1 = ['rahul', 'priya', 'amit'];
        let class2 = ['priya', 'zara', 'john'];
        let class3 = ['amit', 'sara', 'rahul'];
        function mergeClass (c1, c2, c3){
          let mergedClass = c1.concat(c2, c3);
          mergedClass.sort((a, b) => a.localeCompare(b));
          let duplicateFree = [];
          mergedClass.sort((a, b) => {
            if ( a.localeCompare(b) !== 0){
              duplicateFree.push(a)
            }
          })
          return duplicateFree;
        }
        console.log(mergeClass(class1, class2, class3));         
