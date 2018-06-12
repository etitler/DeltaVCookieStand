"use srict";

function Location(minCustomers,maxCustomers,averageSales){
  this.minCustomers=minCustomers;
  this.maxCustomers=maxCustomers;
  this.averageSales=averageSales;
  this.hourlyArray=[];
}
Location.prototype.numberOfCustomers=function(){
  return Math.ceil(Math.random()*(this.maxCustomers-this.minCustomers)+this.minCustomers);
};
Location.prototype.cookiesPurchased=function(){
  for(var i=0; i<hours.length; i++){
    this.hourlyArray[i]=Math.floor(this.numberOfCustomers()*this.averageSales);
  }
};

var iowaCity1= new Location(23,65,6.3);
var iowaCity2= new Location(3,24,1.2);
var iowaCity3= new Location(11,38,3.7);
var coralville1= new Location(20,38,2.3);
var northLiberty1= new Location(2,16,4.6);

function simlulate() {
  iowaCity1.cookiesPurchased();
  iowaCity2.cookiesPurchased();
  iowaCity3.cookiesPurchased();
  coralville1.cookiesPurchased();
  northLiberty1.cookiesPurchased();
}
console.log(northLiberty1);

var hours=["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"];
//replace list with table
function storeData(location,id){
  var locationlist=document.getElementById(id);
  for(var liIndex=0; liIndex<location.hourlyArray.length; liIndex++){
    var li=document.createElement("li");
    var listString=hours[liIndex]+": "+location.hourlyArray[liIndex]+" cookies.";
    li.textContent=listString;
    locationlist.appendChild(li);
  }
}

simlulate();
storeData(iowaCity1,"IC1");
storeData(iowaCity2,"IC2");
storeData(iowaCity3,"IC3");
storeData(coralville1,"CV1");
storeData(northLiberty1,"NL1");