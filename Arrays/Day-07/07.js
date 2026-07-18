        let arr = [1, 2, 3, 4, 5, 6];
        arr.copyWithin( 0, 2, 4);
        console.log(arr);
        let arr2 = [
          [1, 3, 4,],
          [2, 6, 5,],
        ];
        let arr3 = arr2.flat(1);
        console.log(arr3);
        // Sum with reduce
        let arr4 = [10, 20, 30, 40];
        let sum = arr4.reduce((sum, current) => sum += current, 0);
        console.log(sum);
        // // Join and split roundtrip
        // let fruits = ['apple', 'banana', 'mango'];
        // let fruits2 = fruits.join(',');
        // console.log(fruits2);
        // let fruits3 = fruits2;
        // ;
        // console.log(fruits3.split(`'`));
        // Every check
        let scores = [80, 90, 75, 60];