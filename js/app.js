"use srict";
var hours=["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"];

function tableHeaderSetup() {
  var thead=document.getElementById("table_head");
  var td=document.createElement("td");
  thead.appendChild(td);
  for(var i=0;i<hours.length;i++){
    td=document.createElement("td");
    td.textContent=hours[i];
    thead.appendChild(td);
  }
  td=document.createElement("td");
  td.textContent="Stores daily total";
  thead.appendChild(td);
}

function StoreLocation(storeName,minCustomers,maxCustomers,averageSales,id){
  this.storeName=storeName;
  this.minCustomers=minCustomers;
  this.maxCustomers=maxCustomers;
  this.averageSales=averageSales;
  this.hourlyArray=[];
  this.id=id;
}
StoreLocation.prototype.numberOfCustomers=function(){
  return Math.ceil(Math.random()*(this.maxCustomers-this.minCustomers)+this.minCustomers);
};
StoreLocation.prototype.cookiesPurchased=function(){
  for(var i=0; i<hours.length; i++){
    this.hourlyArray[i]=Math.floor(this.numberOfCustomers()*this.averageSales);
  }
};
StoreLocation.prototype.render=function(){
  this.cookiesPurchased();

  //adds storeName to table
  var locationTable=document.getElementById(this.id);
  var td=document.createElement("td");
  td.textContent=this.storeName;
  locationTable.appendChild(td);

  //setup for total calculation
  var salesTotal=0;
  for(var i=0;i<this.hourlyArray.length; i++){
    //adds table data to table
    td=document.createElement("td");
    td.textContent=this.hourlyArray[i];
    locationTable.appendChild(td);
    //adjust salesTotal
    salesTotal=salesTotal+this.hourlyArray[i];
  }
  //adds total data to table
  td=document.createElement("td");
  td.textContent=salesTotal;
  locationTable.appendChild(td);
};
function tableFooterSetup(L1,L2,L3,L4,L5){
  var dailyTotal=0;
  var locationTotal=document.getElementById("total_table");
  var td=document.createElement("td");
  td.textContent="Cross-store hourly total";
  locationTotal.appendChild(td);
  for(var i=0; i<hours.length; i++){
    var total=L1.hourlyArray[i]+L2.hourlyArray[i]+L3.hourlyArray[i]+L4.hourlyArray[i]+L5.hourlyArray[i];
    td=document.createElement("td");
    td.textContent=total;
    locationTotal.appendChild(td);
    dailyTotal=dailyTotal+total;
  }
  td=document.createElement("td");
  td.textContent=dailyTotal;
  locationTotal.appendChild(td);
}

//Setting up table header
tableHeaderSetup();

//makes store instances
var iowaCity1= new StoreLocation("Iowa City #1",23,65,6.3,"IC1_table");
//renders table data
iowaCity1.render();
var iowaCity2= new StoreLocation("Iowa City #2",3,24,1.2,"IC2_table");
iowaCity2.render();
var iowaCity3= new StoreLocation("Iowa City #3",11,38,3.7,"IC3_table");
iowaCity3.render();
var coralville1= new StoreLocation("Coralville #1",20,38,2.3,"CV1_table");
coralville1.render();
var northLiberty1= new StoreLocation("North Liberty #1",2,16,4.6,"NL1_table");
northLiberty1.render();
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
