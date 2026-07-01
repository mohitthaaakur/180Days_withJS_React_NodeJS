let id = Symbol("id");
      alert(id.description);
      alert(id.toString());
      let uid = Symbol.for('uid.no');
      let uid2 = Symbol.for('uid.no');
      alert(uid === uid2 );
      alert(Symbol.keyFor(uid));
      // Hidden property
      let secretCode = Symbol('code');
      let product = {
        Name: 'bell',
        price: 989,
        [secretCode]: `w435151v`,        
      }
      for(let key in product){
        alert(product[key]);
      };
      alert(product[secretCode]);
      // No clash proof
      let config = {
        id: 'original'
      }
      let symId = Symbol('id');
      config[symId] = 'symbolVersion';
      alert(config.id);
      alert(config[symId]);
      config.id = 'newId';
      alert(config.id);
      // Global Symbol
      let key = Symbol.for('appkey');
      let key2 = Symbol.for('appkey');
      alert(key === key2); 
      // true, because Symbol used in both variables is Global Symbol
      let key3 = Symbol('appkey');
      let key4 = Symbol('appkey');
      alert(key3 === key4 ); 
      // false, because even if both Symbol's are with same name yet they have unique identity      