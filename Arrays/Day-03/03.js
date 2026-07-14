let num = [1, 2, 3, 4, 5,];
        num.splice(1 , 2, 6, 7); // start is index and deletecount is length 
        console.log(num);
        let removedElem = num.splice(1, 2); // remove 6 ,7 and save it into removedElem
        console.log(removedElem);
        let arr = [' he', 'sleep', 'daily'];
        arr.splice(1, 0, `doesn't`);
        console.log(arr);
        let arr1 = [1, 2, 5,];
        arr1.splice(-1, 0, 3, 4);
        console.log(arr1);
        let arr2 = [1, 2, 3, 4, 5,];
        console.log(arr2);
        console.log(arr2.slice( 2, 4)); // start and are both index values 
        console.log(arr2.slice( -5, -3));
        let arr3 = ['array', 'concat',];
        console.log(arr3.concat('create', 'new', 'array')); // concat array + arguments in new array
        let arraylike = {
          0: 'arraylike',
          1: 'indexreq',
          length: 2,
          [Symbol.isConcatSpreadable]: true,
        };
        console.log(arr3.concat('create', 'new', arraylike));
        let arr4 = ['gas', 'station', 'of', 'town'];
        arr4.forEach((item, index, array) => {
          console.log(`${item} is not at ${index} and is not from ${array}`)
        });
        let arr5 = ['apple', 'pineapple', 'cucumber', 'apple', NaN];
        console.log( arr5.indexOf('apple'));
        console.log(arr5.lastIndexOf('apple'));
        console.log(arr5.includes('cucumber'));
        console.log(arr5.indexOf(NaN));
        console.log(arr5.includes(NaN));