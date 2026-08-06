let set = new Set();
      set.add(1);
      set.add(1);
      set.add(2);
      set.add(1);
      console.log(set.size); // 2
      console.log(set.delete(1)) // returns true if val existed and delete it
      console.log(set.size); // 1
      let users = [
        { name:'john'},
        { name: 'pete'},
        { name: 'mate'},
      ];
      let set2 = new Set(users);
      for ( let values of set2) console.log(values);
      set2.forEach((value, value2, set) => console.log(value, value2));
      let john = { name: 'john'};
      let pete = { name: 'pete'};
      let mary = { name: 'mary'};
      let set3 = new Set();
      set3.add(john);
      set3.add(pete);
      set3.add(mary);
      set3.add(john);
      set3.add(john);
      set3.add(john);
      set3.add(john);
      set3.add(pete);
      set3.add(pete);
      console.log(set3.size); // 3
      for ( let user of set3) console.log(user.name);
      let set4 = new Set(["oranges", "apples", "bananas"]);
      for ( let key of set4.keys()) console.log(key);
      for ( let entries of set4.entries()) console.log(entries);
      // Filter unique array members
      function unique(arr){
        // let uniqueMem =  new Set(arr);
        // let uniqueArr = [];
        // for (let val of uniqueMem) {
        //   uniqueArr.push(val)
        // };
        // return uniqueArr;
        return Array.from(new Set(arr)); 
      };
      let values = [ 'john', 'pete', 'mary', 'john', 'john', 'john', 'pete', 'mary', 'john',];
      console.log(unique(values));
      // Filter anagrams
      let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
      function aclean(arr){
        return Array.from(new Set(arr))
      };
      console.log(aclean(arr))
      let set5 = new Set([
        "nap", "teachers", "cheaters"
      ])
      for (let iterator of set5.keys()) {
        console.log(iterator)  
      }
      // iterable keys
      let map = new Map();
      map.set('name', 'john');
      let keys = Array.from(map.keys());
      keys.push('more');
      console.log(keys);