class Formatter {
  //add static methods here
  
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- '-]+/g, '');
  }
  
  static titleize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    let result = [];
    
    let words = string.split(" ").forEach(function(w) {
        result.push(_titleizeWord(w));
    });
    return result.join(" ");
  }
}

    let result =[];
    let arrayOfWords = sentence.split(" ");
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}