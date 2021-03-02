var date = new Date();
var h = date.getHours();
var welcome;
if (h < 12) { 
 welcome = "Good Morning"; 
} else if (h < 17) { 
 welcome = "Good Afternoon"; 
} else if (h < 21) { 
 welcome = "Good Evening"; 
} else {
 welcome = "Good Night";
}
document.getElementById("msg").innerHTML = welcome;
 
var times = document.getElementById('clock');
function time() {
   var terms = "AM";
   var d = new Date();
   var second = d.getSeconds();
   var minute = d.getMinutes();
   var hour = d.getHours();
  
   if (minute < 10) { 
     minute = "0" + minute; 
   } 
   if (second < 10) { 
     second = "0" + second; 
   } 
   terms = (hour >= 12) ? "PM" : "AM";
   times.textContent = ("0" + hour).substr(-2) + ":" +
     ("0" + minute).substr(-2) + ":" + ("0" + second).substr(-2) + " " + terms;
  
 }
  setInterval(time, 1000);
 
 const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 
 var todaydate = String(date.getDate()).padStart(2, '0') + " "
                 + monthName[date.getMonth()] + " " +date.getFullYear();
 document.getElementById("date").innerHTML = todaydate;
 
