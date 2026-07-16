        let lengths = ['ghiszol', 'grieverd', 'fazuklkas'].map(item => item.length);
        console.log(lengths) ; // 7, 8, 9
        let nums = [1, 2, 4, 6, 3432, 546, 45345, 34523, 523, 52];
        // nums.sort(function (a, b){
        //   if ( a > b){
        //     return 1;
        //   } else if ( a < b){
        //     return -1;
        //   } else if ( a === b){
        //     return 0;
        //   }
        // })
        nums.sort((a , b) => a - b);
        console.log(nums);
        let countries = ['Österreich', 'Andorra', 'Vietnam', 'India', 'United Kingdom'];
        console.log(countries.sort((a, b) => a.localeCompare(b)));
        let nums2 = [1, 2, 3, 4, 5];
        nums2.reverse();
        console.log(nums2); 
        // Sort by property
        let students = [
          {name: 'rahul', marks: 72},
          {name: 'priya', marks: 91},
          {name: 'amit', marks: 65},
          {name: 'sara', marks: 88},
        ];
        students.reverse(students.sort((a, b) => a.marks - b.marks)); 
        console.log(students);
        // Map and Transform
        let priceUSD = [10.99, 5.49, 22.00, 3.75, 15.50];
        let priceIND = priceUSD.map(item => Math.round(item * 85));
        console.log(priceIND);
        // Chain map and sort
        let names = ['alexander', 'ali', 'john', 'priyanka', 'zoe'];
        let namesLength = names.map(item => item.length);
        namesLength.sort((a, b) => a - b);
        console.log(namesLength); 