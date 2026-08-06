let map = new Map();
      map.set(1, 'num1');
      map.set('1', 'str1');
      map.set(true, 'bool1');
      console.log(map.get(1));
      console.log(map.get(true));
      console.log(map.size);
      map.set(NaN, 'nan1') // only in map NaN === NaN : true
      console.log(map.get(NaN));
      map.set(2, 'num2').set(3, 'num3').set(false, 'falseval');
      console.log(map.size); // 7
      // iteration over map
      let vegetables = new Map([
        [ 'tomato', 200],
        [ 'cucumber', 345],
        [ 'onion', 534],
      ])
      for ( let key of vegetables.keys()){
        console.log(key);
      };
      for ( let values of vegetables.values()){
        console.log(values);
      };
      for ( let entries of vegetables){ // same as vegetables.entries()
        console.log(entries);
      };
      vegetables.forEach((values, key, map) => {
        console.log(`${key} is sold at $${values}`)
      });
      // object to map
      let users = {
        1: 'john',
        user2: 'anne',
      };
      let userMap = new Map(Object.entries(users));
      console.log(userMap.get('user2'));
      // object from map
      let map2 = new Map();
      map2.set('green', 4);
      map2.set(3, 'red');
      map2.set(users, 2);
      let obj = Object.fromEntries(map2);
      console.log(obj[users]) // 2
