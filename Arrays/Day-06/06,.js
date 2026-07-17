        let names = 'gizel, bezal, ruzel';
        let arr = names.split(',');
        console.log(arr);
        arr = names.split(',', 2);
        console.log(arr);
        let str = 'text';
        let arr2 = str.split('');
        console.log(arr2); // 't', 'e', 'x', 't'
        let str2 = arr.join(',');
        console.log(str2);
        let arr3 = [1, 2, 3, 4, 5,];
        let sum = arr3.reduce((sum, current) => sum + current, 0) ;
        console.log(sum);
        let mul = arr3.reduceRight((previous, current) => previous * current); // Works right to left 
        console.log(mul);
        console.log(Array.isArray(mul));
        let arr4 = [1, 2, 3,];
        let arr5 = [1, 2, 4,];
        function arraysEqual (arr1, arr2){
          return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]) ;
        }
        console.log(arraysEqual(arr4, arr5));
        let arr6 = [1,];      
        arr6.length = 5;  
        console.log(arr6.fill(2, 1, 5));