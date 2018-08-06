function my() {
    var quotes = [
       "Stay badass! ",
      
     
       "Could be worse..." ,
      
    
       "Don't know, don't care.." ,
      
   
        "Ask me again later" ,
     
       "Not sure...",
   "Brah! C'mon!" ,
      
   "DUH!" ,
      
   
         "Go for it!",
      
      "Honestly, You're doing great!",
      "You Cray!" ,
    
       "Who da man!?" ,
      
  
        "Take a chill pill...",
      
        "You know what you gotta do",
       "Well, can you?",
      
       "Do you have a choice?",
      
  "Sure! Why not?!",
      
      
 "Hell Nah!",
      
    ];
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("demo").innerHTML = quote; 
     
  };
  function tweet() {
    document.getElementById("tweet").href="https://twitter.com/intent/tweet/?text=" + document.getElementById("demo").innerHTML;
  }