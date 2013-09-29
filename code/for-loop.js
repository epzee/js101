
var anchors = document.getElementsByTagName("a");  
  
for (var i = 0; i < anchors.length; i += 1) {  
    // do some stuff here  
}  

/*
Don’t Calculate the Length on Each Iteration

As the code is now, the length of anchors is calculated on each loop iteration. In a large application, and with large values and multiple loops, this can contribute to performance issues. So although in many small instances this might not matter, it is best practice to try to cache values before using them. So we can alter the code to look like this instead:

*/

var anchors = document.getElementsByTagName("a");  
  
for (var i = 0, j = anchors.length; i < j; i += 1) {  
    // do some stuff here  
}  

/*
Now the value gets calculated only once, and is stored in the variable j. I certainly have to thank the commenters in some of my previous JavaScript articles for pointing out this improvement in my loops.


http://www.impressivewebs.com/javascript-for-loop/

*/