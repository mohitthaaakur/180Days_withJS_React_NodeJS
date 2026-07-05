let str = 'hello i am unable to your at the fast';
      alert(str.lastIndexOf('the',)); //29
      let str2 = '';
      for( let i = 65; i <= 220; i++){
        str2 += String.fromCodePoint(i);
      }
      alert(str2);
      // Uppercase the first character
      function ucFirst(input){
        if( !input) { return input};
        let ucString = input[0].toUpperCase() + input.substring(1)        
        return ucString;
      }
      alert(ucFirst());
      // Check for spam
      function checkSpam(str){
        let lowerCase = str.toLowerCase();
        if( lowerCase.includes('hack')
         || lowerCase.includes('access')){ return true};
        return false;
      };
      alert(checkSpam('how do i hACk into her account and get AAccess'));
      alert(checkSpam('how to AcCeSs my account'));
      alert(checkSpam('it is what it is '));