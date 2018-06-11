"use srict";

var iowaCity1={
  minCustomers: 23,
  maxCustomers: 65,
  averageSales: 6.3,
  hourlyArray:[],
  numOfCust: function(){
    return Math.ceil(Math.random()*(iowaCity1.maxCustomers-iowaCity1.minCustomers)+iowaCity1.minCustomers);
  },
  cookiesPurchased: function(){
    for(var i=0; i<15; i++){
      iowaCity1.hourlyArray[i]= Math.floor(this.numOfCust()*iowaCity1.averageSales);
    }
  },
};

var iowaCity2={
  minCustomers: 3,
  maxCustomers: 24,
  averageSales: 1.2,
  hourlyArray:[],
  numOfCust: function(){
    return Math.ceil(Math.random()*(iowaCity2.maxCustomers-iowaCity2.minCustomers)+iowaCity2.minCustomers);
  },
  cookiesPurchased: function(){
    for(var i=0; i<15; i++){
      iowaCity2.hourlyArray[i]= Math.floor(this.numOfCust()*iowaCity2.averageSales);
    }
  },
};

var iowaCity3={
  minCustomers: 11,
  maxCustomers: 38,
  averageSales: 3.7,
  hourlyArray:[],
  numOfCust: function(){
    return Math.ceil(Math.random()*(iowaCity3.maxCustomers-iowaCity3.minCustomers)+iowaCity3.minCustomers);
  },
  cookiesPurchased: function(){
    for(var i=0; i<15; i++){
      iowaCity3.hourlyArray[i]= Math.floor(this.numOfCust()*iowaCity3.averageSales);
    }
  },
};

var coralville={
  minCustomers: 20,
  maxCustomers: 38,
  averageSales: 2.3,
  hourlyArray:[],
  numOfCust: function(){
    return Math.ceil(Math.random()*(coralville.maxCustomers-coralville.minCustomers)+coralville.minCustomers);
  },
  cookiesPurchased: function(){
    for(var i=0; i<15; i++){
      coralville.hourlyArray[i]= Math.floor(this.numOfCust()*coralville.averageSales);
    }
  },
};

var northLiberty={
  minCustomers: 2,
  maxCustomers: 16,
  averageSales: 4.6,
  hourlyArray:[],
  numOfCust: function(){
    return Math.ceil(Math.random()*(northLiberty.maxCustomers-northLiberty.minCustomers)+northLiberty.minCustomers);
  },
  cookiesPurchased: function(){
    for(var i=0; i<15; i++){
      northLiberty.hourlyArray[i]= Math.floor(this.numOfCust()*northLiberty.averageSales);
    }
  },
};

function simlulate() {
  iowaCity1.numOfCust();
  iowaCity1.cookiesPurchased();
  iowaCity2.numOfCust();
  iowaCity2.cookiesPurchased();
  iowaCity3.numOfCust();
  iowaCity3.cookiesPurchased();
  coralville.numOfCust();
  coralville.cookiesPurchased();
  northLiberty.numOfCust();
  northLiberty.cookiesPurchased();
}

simlulate();
console.log(iowaCity1);
