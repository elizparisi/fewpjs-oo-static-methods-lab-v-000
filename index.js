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
    result = [];
    
    sentence.split(" ").forEach(function(w) {
        result.push(_titleizeWord(w));
    });
    return result.join(" ");
  }
}