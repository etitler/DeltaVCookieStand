"use srict";

var hours=["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"];

function tableHeaderSetup() {
  var theadRow=document.getElementById("table_head");
  var td=document.createElement("th");
  theadRow.appendChild(td);
  for(var i=0;i<hours.length;i++){
    td=document.createElement("th");
    td.textContent=hours[i];
    theadRow.appendChild(td);
  }
  td=document.createElement("th");
  td.textContent="Stores daily total";
  theadRow.appendChild(td);
}

function StoreLocation(storeName,minCustomers,maxCustomers,averageSales){
  this.storeName=storeName;
  this.minCustomers=minCustomers;
  this.maxCustomers=maxCustomers;
  this.averageSales=averageSales;
  this.hourlyArray=[];
}
StoreLocation.prototype.numberOfCustomers=function(){
  return Math.ceil(Math.random()*(this.maxCustomers-this.minCustomers)+this.minCustomers);
};
StoreLocation.prototype.cookiesPurchased=function(){
  for(var i=0; i<hours.length; i++){
    this.hourlyArray[i]=Math.floor(this.numberOfCustomers()*this.averageSales);
  }
};
StoreLocation.prototype.renderTable=function(){
  this.cookiesPurchased();

  //adds storeName to table
  var tableLocation=document.getElementById("tableLocation");
  var tr=document.createElement("tr");
  var td=document.createElement("td");
  td.textContent=this.storeName;
  tr.appendChild(td);

  //setup for total calculation
  var salesTotal=0;
  for(var i=0;i<this.hourlyArray.length; i++){
    //adds table data to table
    td=document.createElement("td");
    td.textContent=this.hourlyArray[i];
    tr.appendChild(td);
    //adjust salesTotal
    salesTotal=salesTotal+this.hourlyArray[i];
  }
  //adds total data to table
  td=document.createElement("td");
  td.textContent=salesTotal;
  tr.appendChild(td);
  console.log(tr);
  tableLocation.appendChild(tr);
};
function tableFooterSetup(L1,L2,L3,L4,L5){
  var dailyTotal=0;
  var tableLocation=document.getElementById("tableLocation");
  var tr=document.createElement("tr");
  var td=document.createElement("td");
  td.textContent="Cross-store hourly total";
  tr.appendChild(td);
  for(var i=0; i<hours.length; i++){
    var total=L1.hourlyArray[i]+L2.hourlyArray[i]+L3.hourlyArray[i]+L4.hourlyArray[i]+L5.hourlyArray[i];
    td=document.createElement("td");
    td.textContent=total;
    tr.appendChild(td);
    dailyTotal=dailyTotal+total;
  }
  td=document.createElement("td");
  td.textContent=dailyTotal;
  tr.appendChild(td);
  tableLocation.appendChild(tr);
}
function handleSubmit(){
  event.preventDefault();
  var storeName=event.target.storeName.value;
  var minCustomers=event.target.minCustomers.value;
  var maxCustomers=event.target.maxCustomers.value;
  var averageSales=event.target.averageSales.value;
  var newStoreLocation=new StoreLocation(storeName,minCustomers,maxCustomers,averageSales,"test");
  console.log(newStoreLocation);
}
//Setting up table header
tableHeaderSetup();

//makes store instances
var iowaCity1= new StoreLocation("Iowa City #1",23,65,6.3);
//renders table data
iowaCity1.renderTable();
var iowaCity2= new StoreLocation("Iowa City #2",3,24,1.2);
iowaCity2.renderTable();
var iowaCity3= new StoreLocation("Iowa City #3",11,38,3.7);
iowaCity3.renderTable();
var coralville1= new StoreLocation("Coralville #1",20,38,2.3);
coralville1.renderTable();
var northLiberty1= new StoreLocation("North Liberty #1",2,16,4.6);
northLiberty1.renderTable();
//sales total
tableFooterSetup(iowaCity1,iowaCity2,iowaCity3,coralville1,northLiberty1);

//replace list with table
function storeData(location,id){
  location.cookiesPurchased();
  var locationlist=document.getElementById(id);
  for(var liIndex=0; liIndex<location.hourlyArray.length; liIndex++){
    var li=document.createElement("li");
    var listString=hours[liIndex]+": "+location.hourlyArray[liIndex]+" cookies.";
    li.textContent=listString;
    locationlist.appendChild(li);
  }
}


storeData(iowaCity1,"IC1");
storeData(iowaCity2,"IC2");
storeData(iowaCity3,"IC3");
storeData(coralville1,"CV1");
storeData(northLiberty1,"NL1");

var form=document.querySelector("form");
form.addEventListener("submit",handleSubmit);