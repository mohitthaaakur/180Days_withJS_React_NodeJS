        let fruits = ['orange', 'apple', 'banana',];
        alert(fruits[0]);
        alert(fruits[1]);
        alert(fruits[2]); // banana
        fruits[2] = 'pear';
        fruits[3] = 'grapes';
        alert(fruits[2]); // pears
        alert(fruits[3]);
        alert(fruits.length);
        console.log(fruits);
        let arr = ['apple', { name: 'array'}, true, function(){ alert('hello')} ];
        console.log(arr[1].name);
        arr[3]();
        console.log(fruits.at(-1)); // grapes