/* // let arr = new Array();
        let Fruit = ['Orange', 'Apple', 'Grapes',]
        Fruit[3] = 'Pineapple'
        console.log(Fruit[2]);
        console.log(Fruit.length);
        let universalArr = ['Orange', { name : 'Java'}, false, function (){console.log('array storing different types')},];
        console.log(universalArr[1].name); // Java
        universalArr[3]();
        console.log( universalArr.at(-2));
        let num = [1, 2, 3, 4, 5,];
        alert( num.pop()) // alert 5 and removes it
        console.log( num.length); // length 4
        num.push('five');
        console.log( num[4]); // index 4 = five
        alert( num.shift()); // alert 1 and removes it
        console.log( num[0]); // 2
        num.unshift( 'Apple');
        console.log( num[0]); // Apple
        num.unshift( 'pears', 'six') // add from start
        num.push( 'eight', 'nine') // add from end
        console.log( num.length); // 9
        let veg = num;
        alert( veg === num)
        veg.pop(); // veg & num === same array
        alert( num.length); // 8 now
        for (let fruits of Fruit) {
          alert( fruits);
        }
        Fruit.length = 0; // Simplest way to clear array
        console.log( Fruit);   
        let staff = new Array(3); // create empty array with length 3
        console.log( staff.length) // 3 
        let matrix = [
          [ 1, 2, 3,],
          [ 4, 5, 6,],
          [ 7, 8, 9,],
        ] // Multidimensional array
        console.log( matrix[2][2]) // 3, last value of last inner array 
        let num = [ 1, 2, 3,];
        console.log( num); 
        console.log( String(num) === '1,2,3'); // true
        console.log( [] + 1); // 1
        console.log( [3] + 1); // 31
        console.log( [1,2,3] + 1); // 1,2,31 */
        // Array Operations
        let styles = [ 'jazz', 'blues',];
        styles.push( 'rock-n-roll');
        console.log(styles);
        function middleValue(array){
          // if ( array.length % 2 != 0) {
          //   let n = ((array.length - 1) / 2);
          //   array[n] = 'classics'
          // }
          array[Math.floor(( array.length - 1) / 2)] = 'classics'
          return array;   
        };
        console.log(middleValue(styles));
        styles.shift();
        console.log( styles);
        styles.unshift( 'rap', 'reggae',)
        console.log( styles);
        // Sum input numbers
        function sumInput(){
          let num = [];
          let total = 0;
          let numbers;
          do {
            numbers = prompt('enter a number');
            if ( isNaN(numbers)) { break};
            num.push(+numbers);
          } while ( numbers !== '' && numbers !== null);
          for (let values of num) {
            total += values;
          }
          return total;
        }
        console.log(sumInput());  
        // A Maximal Subarray
        let Series = [ -2, -1, 1, 2,]
        function getMaxSubSum(array){
          let currentSum = 0;
          let maxSum = 0;
          for ( let i = 0; i < array.length; i++ ){
            currentSum += array[i]
            if( currentSum > maxSum){
              maxSum = currentSum;
            } else if ( currentSum < 0 ){
              currentSum = 0;
            }
          }
          return maxSum;
        }     
        console.log(getMaxSubSum(series));
        // Find the largest number in array
        let series = [ 1, 3, 6, 7, 2, 6, 9,];
        function findMax(array){
          let max = 0 ;
          let currentMax = 0;
          for (let i of array) {
            currentMax = i;
            if ( currentMax > max) {
              max = currentMax;              
            }
          } return max;
        }
        console.log(findMax(series));