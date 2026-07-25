let csvData = 'rahul sharma , priya verma,AMIT KUMAR , sara khan , john doe';         
        //  function removeWhiteSpaces (arr){
        //   let spaceFreeArr = arr.map((item) => {
        //    return item.trim()            
        //   });;
        //   return spaceFreeArr
        //  };
        //  console.log(removeWhiteSpaces(arr));
        function removeWhiteSpaces (array){
          let arr = csvData.split(',').map((item) => {
            let words = item.split(' ').filter(words => words !== '');
            return words
           }); // to remove whitespaces
           let spaceFreeArr = arr.map(item => item.join(' ')); // to join separated words
           let capitalArr = spaceFreeArr.map(item => {
            let firstWord = item.slice(0, 1);
            item = firstWord.toUpperCase() + item.slice(1).toLowerCase();
            return item
          }); // to capitalize first letter
          let joinedStr = capitalArr.join(' / '); // to join back to str
          return joinedStr;
        };
        console.log(removeWhiteSpaces(csvData));
        let transactions = [
          { id: 1, amount: 3000, status: 'success'},
          { id: 2, amount: 8000, status: 'failed'},
          { id: 3, amount: 500, status: 'success'},
          { id: 4, amount: 12000, status: 'success'},
          { id: 5, amount: 200, status: 'failed'},
          { id: 6, amount: 7500, status: 'success'},
        ];
        function formatTransactions (array){
          let total = transactions.reduce((prevVal, currentVal) => prevVal + currentVal.amount, 0);
          let totalSuccessTransac = transactions.reduce((prevVal, currentVal) => prevVal + (currentVal.status === 'success' ? 1 : 0), 0);
          let totalFailedTransac = transactions.reduce((prevVal, currentVal) => prevVal + (currentVal.status === 'failed' ? 1 : 0), 0);
          let highestSingleTrans = transactions.reduce((prevVal, currentVal) => {if (prevVal < currentVal.amount){
          prevVal = currentVal.amount;
        }; return prevVal} , 0);
        return {
          totalAmount: total, successCount: totalSuccessTransac, failedCount: totalFailedTransac, highestAmount: highestSingleTrans
        }
       };
       console.log(formatTransactions(transactions));