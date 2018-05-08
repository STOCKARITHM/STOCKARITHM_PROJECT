
var max = 1000;
var dimplus =0;
var dimcounter = 0;
let singleStock = new Array();
var hash = (string, max) => {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash = hash + (string.charCodeAt(i)*string.charCodeAt(i));
  }
  return hash % max;
};
var getChartURL = (string) => {
  var str1 = "https://api.iextrading.com/1.0/stock/";
  var str2 = "/chart/1y";
  var fullString = str1.concat(string, str2);
  return fullString; 
};
var getEPSURL = (string) => {
  var str1 = "https://api.iextrading.com/1.0/stock/";
  var str2 = "/earnings";
  var fullString = str1.concat(string, str2);
  return fullString; 
};
let HashTable = function() {
  let storage = [];
  let twodim = [];
  const max = 1000;
  var thisHash = this;
function copy(o)
{
  var counter = 0;
  var counting = 0;
  var v,key;
  var output = [];
  output = Array.isArray(o) ? []: {};

      //document.write("check");
      for(var x = 0; x <o.length; x++)
      {
        v="";
        
        for(var y= 0; y< o[x].length; y++)
        {
        v = o[x][y];
        //document.write(v);
        //document.write("<br>");

        output[counter] = (typeof v === "object") ? copy(v) : v;  
        counter ++; 
        
        }

        
      }      
    

  
    
  
  return output;
}


      //this function needs to be changed/have several versions to benefit us
  thisHash.print = function(rank) {






    for(var y= 0; y<storage.length; y++)
    {
            document.getElementById("result").innerHTML =("yyet");

      document.getElementById("result").innerHTML = storage[i];
    }
            document.getElementById("result").innerHTML = "";
if(rank == 20)
{
  for(var x = 0; x<twodim.length; x++)
  {
       document.getElementById("result").innerHTML += twodim[x][rank];
        document.getElementById("result").innerHTML += "|";

        //document.getElementById("result").innerHTML += 500-i;       
        document.getElementById("result").innerHTML += twodim[x][0];
        document.getElementById("result").innerHTML += "<br>";
 //     document.write(twodim[i]);
  }
}else{
         //document.getElementById("result").innerHTML = (twodim.length);
    for(var i =twodim.length-1; i>-1; i--)
     {
        document.getElementById("result").innerHTML += twodim[i][rank];
        document.getElementById("result").innerHTML += "|";

        //document.getElementById("result").innerHTML += 500-i;       
        document.getElementById("result").innerHTML += twodim[i][0];
        document.getElementById("result").innerHTML += "<br>";
 //     document.write(twodim[i]);
 //     document.write("<br>");
       if(storage[i]!=undefined)
        {
        //  document.getElementById("result").innerHTML += "Undefined.";
       //document.write(storage[i]);
       //document.write("<br>");
        }
    }
   }
 }
//adds the stock symbol and value to hash table, will need to be altered for more datapoints per symbol

  thisHash.add = function(key) {  
  var value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13;
  dimcounter = 0;
  //Grab and assign chart prices
  $.ajax({
  url: getChartURL(key),
  async: false,
  dataType: 'json',
  success: function (json) {
    var n = Math.floor(json.length / 11);
    value1 = json[0].close;
    value2 = json[n].close;
    value3 = json[2*n].close;
    value4 = json[3*n].close;
    value5 = json[4*n].close;
    value6 = json[5*n].close;
    value7 = json[6*n].close;
    value8 = json[7*n].close;
    value9 = json[8*n].close;
    value10 = json[9*n].close;
    value11 = json[10*n].close;
    value12 = json[json.length - 1].close;    
  }
});
  //Grab and assign EPS
  $.ajax({
  url: getEPSURL(key),
  async: false,
  dataType: 'json',
  success: function (json) {
  value13 = json.earnings[0].actualEPS;
  if(value13== null)
  {
    value13 = 0;
  }  
  let onedim = new Array();
    onedim[dimcounter] = key;
    dimcounter++;
    onedim[dimcounter] = value1;
    dimcounter ++;
    onedim[dimcounter] = value2;
    dimcounter ++;
    onedim[dimcounter] = value3;
    dimcounter ++;
    onedim[dimcounter] = value4;
    dimcounter ++;
    onedim[dimcounter] = value5;
    dimcounter ++;
    onedim[dimcounter] = value6;
    dimcounter ++;
    onedim[dimcounter] = value7;
    dimcounter ++;
    onedim[dimcounter] = value8;
    dimcounter ++;
    onedim[dimcounter] = value9;
    dimcounter ++;
    onedim[dimcounter] = value10;
    dimcounter ++;
    onedim[dimcounter] = value11;
    dimcounter ++;
    onedim[dimcounter] = value12;
    dimcounter ++;
    onedim[dimcounter] = value13;
    dimcounter ++;
    onedim[dimcounter] = 0;
    dimcounter ++;
    onedim[dimcounter] = 0;
    dimcounter ++;
    onedim[dimcounter] = 0;
    dimcounter ++;
    onedim[dimcounter] = 0;
    dimcounter ++;
    onedim[dimcounter] = 0;
    dimcounter ++;
    onedim[dimcounter] = 0;
    dimcounter ++;
    onedim[dimcounter] = 0;
    dimcounter ++;
    twodim[dimplus] = onedim;
    dimplus ++;

  }
});



    var index = hash(key, max);
    if (storage[index] === undefined) {
      storage[index] = [
        [key, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13]
      ];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value1;
          storage[index][i][2] = value2;
          storage[index][i][3] = value3;
          storage[index][i][4] = value4;
          storage[index][i][5] = value5;
          storage[index][i][6] = value6;
          storage[index][i][7] = value7;
          storage[index][i][8] = value8;
          storage[index][i][9] = value9;
          storage[index][i][10] = value10;
          storage[index][i][11] = value11;
          storage[index][i][12] = value12;
          storage[index][i][13] = value13;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13]);
      }
    }
    var sum = 0;
    var ave = 0;
    var change =0;
    var difference = 0;
    for(var x = 0;x<twodim.length; x++)
    {
      sum = 0;
      ave = 0;
      for(var u= 1; u<13; u++)
      {
        sum += twodim[x][u];
      }
      ave = sum/12;
      sum =0;
      var xi=0;
      for(var o = 1; o<13; o++)
      {
        xi = twodim[x][o];
        sum+=Math.pow(xi-ave,2);
      }
      twodim[x][16]= Math.sqrt((sum/11));


      difference = twodim[x][12]-twodim[x][1];
      twodim[x][14] = (difference/twodim[x][1])*100;
    }
  };

  thisHash.remove = function(key) {
    var index = hash(key, max);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };
//prints the stock symbol and the value
  thisHash.getStock = function(key)
  {
    var index = hash(key,max);
    // if(storage[index][0]!= key.toUppercase())
    // {
    //   window.alert("Stock symbol is invalid");
    //   return 0;
    // }
    // else
    // {
      
      for(var i=0; i<storage[index].length; i++)
      {
        if (storage[index][i][0] === key)
        {
          for (var j = 0; j < storage[index][i].length; j++)
          {
              singleStock[j] = storage[index][i][j];
          }
        }
        
      }
      return 1;
    
  }
  //returns the value of the stock ($)
  thisHash.lookup = function(key) {
    var index = hash(key, max);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
  thisHash.getData = function() {       //this will read file and send information to other function
       var xmlhttp;
       if (window.XMLHttpRequest) {
           xmlhttp = new XMLHttpRequest();               
       }           
       else {               
           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
       }
       xmlhttp.onreadystatechange = function () {               
           if (xmlhttp.readyState == 4) {                   
             var lines = xmlhttp.responseText;    //*here we get all lines from text file*
            var lineArr = lines.split(',');     //here we call function with parameter "lines*"
            for (var i = 0; i < lineArr.length; i++) {
              thisHash.add(lineArr[i]);
              }
           }               
       }
       xmlhttp.open("GET", "./symbols.txt", false);
       xmlhttp.send();    
  };
  var overall = 0;
  thisHash.overallsort = function(bucketsize)
  {
    array = copy(twodim);
    //document.write(array);
    if (array.length === 0) 
    {
    return array;
    }

  // Declaring vars
  var i,
      minValue = array[20],
      maxValue = array[20],
      bucketSize = bucketSize || 5;
  
  // Setting min and max values
  for(var i = 20; i<array.length; i+=21)
  {
    if(array[i] < minValue)
    {
      minValue = array[i];
    }
    else if(array[i] > maxValue)
    {
      maxValue = array[i];
    }
  }

  // Initializing buckets
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount);
  
  for (i = 0; i < allBuckets.length; i++)
  {
    allBuckets[i] = [];
  }
  
  // Pushing values to buckets
  var temper = array.length;
  for(var i = 20; i<temper; i+=21)
  {
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-20]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-19]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-18]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-17]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-16]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-15]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-14]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-13]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-12]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-11]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-10]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-9]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-8]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-7]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-6]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-5]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-4]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-3]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-2]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-1]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i]);


  }
  // Sorting buckets
  array.length = 0;

  for(var k = 0; k<allBuckets.length; k++)
  {
    if(allBuckets[k].length <21)
    {
      continue;
    }
    for(var i = 20; i<= allBuckets[k].length; i+=21) //asdf
    {
      var temp1 = allBuckets[k][i-20]; 
      var temp2 = allBuckets[k][i-19];
      var temp3 = allBuckets[k][i-18];
      var temp4 = allBuckets[k][i-17];
      var temp5 = allBuckets[k][i-16];
      var temp6 = allBuckets[k][i-15];
      var temp7 = allBuckets[k][i-14];
      var temp8 = allBuckets[k][i-13];
      var temp9 = allBuckets[k][i-12];
      var temp10 = allBuckets[k][i-11];
      var temp11 = allBuckets[k][i-10];
      var temp12 = allBuckets[k][i-9];
      var temp13 = allBuckets[k][i-8];
      var temp14 = allBuckets[k][i-7];
      var temp15 = allBuckets[k][i-6];
      var temp16 = allBuckets[k][i-5];
      var temp17 = allBuckets[k][i-4];
      var temp18 = allBuckets[k][i-3];
      var temp19 = allBuckets[k][i-2];
      var temp20 = allBuckets[k][i-1];
      var temp21 = allBuckets[k][i];

      var j = i-21; //asdf
      while(j>= 0 && Number(allBuckets[k][j])>Number(temp21))
      {     
        allBuckets[k][j+1] = allBuckets[k][j-20];   
        allBuckets[k][j+2] = allBuckets[k][j-19];
        allBuckets[k][j+3] = allBuckets[k][j-18];
        allBuckets[k][j+4] = allBuckets[k][j-17];
        allBuckets[k][j+5] = allBuckets[k][j-16];
        allBuckets[k][j+6] = allBuckets[k][j-15];
        allBuckets[k][j+7] = allBuckets[k][j-14];
        allBuckets[k][j+8] = allBuckets[k][j-13];
        allBuckets[k][j+9] = allBuckets[k][j-12];
        allBuckets[k][j+10] = allBuckets[k][j-11];
        allBuckets[k][j+11] = allBuckets[k][j-10];
        allBuckets[k][j+12] = allBuckets[k][j-9];
        allBuckets[k][j+13] = allBuckets[k][j-8];
        allBuckets[k][j+14] = allBuckets[k][j-7];
        allBuckets[k][j+15] = allBuckets[k][j-6];
        allBuckets[k][j+16] = allBuckets[k][j-5];
        allBuckets[k][j+17] = allBuckets[k][j-4];
        allBuckets[k][j+18] = allBuckets[k][j-3];
        allBuckets[k][j+19] = allBuckets[k][j-2];
        allBuckets[k][j+20] = allBuckets[k][j-1];
        allBuckets[k][j+21] = allBuckets[k][j];

        j-=21; //asdf
      }
      allBuckets[k][j+1] = temp1;
      allBuckets[k][j+2] = temp2;
      allBuckets[k][j+3] = temp3;
      allBuckets[k][j+4] = temp4;
      allBuckets[k][j+5] = temp5;
      allBuckets[k][j+6]= temp6;
      allBuckets[k][j+7]= temp7;
      allBuckets[k][j+8]= temp8;
      allBuckets[k][j+9]= temp9;
      allBuckets[k][j+10]= temp10;
      allBuckets[k][j+11]= temp11;
      allBuckets[k][j+12]= temp12;
      allBuckets[k][j+13] = temp13;
      allBuckets[k][j+14]= temp14;
      allBuckets[k][j+15]= temp15;
      allBuckets[k][j+16]= temp16;
      allBuckets[k][j+17]= temp17;
      allBuckets[k][j+18]= temp18;
      allBuckets[k][j+19]= temp19;
      allBuckets[k][j+20]= temp20;
      allBuckets[k][j+21]= temp21;
    }
  }



var panzer = 0;
var punto = 0;
  for(var z = 0; z<allBuckets.length; z++)
  {
    let boop = new Array();
    if(allBuckets[z].length > 12)
    {
      for(var y= 0; y<allBuckets[z].length; y++)
      {
        boop.push(allBuckets[z][y]);
        punto++;
        if(punto == 21)
        {
          punto =0;
          twodim[panzer] = boop;
          panzer++;
          boop = new Array();
        }
      }
    }
  }
  if(overall == 0)
{
   var count=1;
  for(var i=0; i<twodim.length; i++){
    //twodim[i][18]=count;
    twodim[i][20]=count;
    count++;
  } 
  overall = 1;
}


  }







var percsort = 0;
  thisHash.percentsort = function(bucketsize)
  {
    array = copy(twodim);
    //document.write(array);
    if (array.length === 0) 
    {
    return array;
    }

  // Declaring vars
  var i,
      minValue = array[14],
      maxValue = array[14],
      bucketSize = bucketSize || 5;
  
  // Setting min and max values
  for(var i = 14; i<array.length; i+=21)
  {
    if(array[i] < minValue)
    {
      minValue = array[i];
    }
    else if(array[i] > maxValue)
    {
      maxValue = array[i];
    }
  }

  // Initializing buckets
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount);
  
  for (i = 0; i < allBuckets.length; i++)
  {
    allBuckets[i] = [];
  }
  
  // Pushing values to buckets
  var temper = array.length;
  for(var i = 14; i<temper; i+=21)
  {
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-14]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-13]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-12]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-11]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-10]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-9]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-8]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-7]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-6]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-5]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-4]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-3]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-2]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-1]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+1]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+2]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+3]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+4]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+5]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+6]);


  }
  // Sorting buckets
  array.length = 0;

  for(var k = 0; k<allBuckets.length; k++)
  {
    if(allBuckets[k].length <21)
    {
      continue;
    }
    for(var i = 14; i<= allBuckets[k].length; i+=21) //asdf
    {
      var temp1 = allBuckets[k][i-14]; 
      var temp2 = allBuckets[k][i-13];
      var temp3 = allBuckets[k][i-12];
      var temp4 = allBuckets[k][i-11];
      var temp5 = allBuckets[k][i-10];
      var temp6 = allBuckets[k][i-9];
      var temp7 = allBuckets[k][i-8];
      var temp8 = allBuckets[k][i-7];
      var temp9 = allBuckets[k][i-6];
      var temp10 = allBuckets[k][i-5];
      var temp11 = allBuckets[k][i-4];
      var temp12 = allBuckets[k][i-3];
      var temp13 = allBuckets[k][i-2];
      var temp14 = allBuckets[k][i-1];
      var temp15 = allBuckets[k][i];
      var temp16 = allBuckets[k][i+1];
      var temp17 = allBuckets[k][i+2];
      var temp18 = allBuckets[k][i+3];
      var temp19 = allBuckets[k][i+4];
      var temp20 = allBuckets[k][i+5];
      var temp21 = allBuckets[k][i+6];

      var j = i-21; //asdf
      while(j>= 0 && Number(allBuckets[k][j])>Number(temp15))
      {     
        allBuckets[k][j+7] = allBuckets[k][j-14];   
        allBuckets[k][j+8] = allBuckets[k][j-13];
        allBuckets[k][j+9] = allBuckets[k][j-12];
        allBuckets[k][j+10] = allBuckets[k][j-11];
        allBuckets[k][j+11] = allBuckets[k][j-10];
        allBuckets[k][j+12] = allBuckets[k][j-9];
        allBuckets[k][j+13] = allBuckets[k][j-8];
        allBuckets[k][j+14] = allBuckets[k][j-7];
        allBuckets[k][j+15] = allBuckets[k][j-6];
        allBuckets[k][j+16] = allBuckets[k][j-5];
        allBuckets[k][j+17] = allBuckets[k][j-4];
        allBuckets[k][j+18] = allBuckets[k][j-3];
        allBuckets[k][j+19] = allBuckets[k][j-2];
        allBuckets[k][j+20] = allBuckets[k][j-1];
        allBuckets[k][j+21] = allBuckets[k][j];
        allBuckets[k][j+22] = allBuckets[k][j+1];
        allBuckets[k][j+23] = allBuckets[k][j+2];
        allBuckets[k][j+24] = allBuckets[k][j+3];
        allBuckets[k][j+25] = allBuckets[k][j+4];
        allBuckets[k][j+26] = allBuckets[k][j+5];
        allBuckets[k][j+27] = allBuckets[k][j+6];

        j-=21; //asdf
      }
      allBuckets[k][j+7] = temp1;
      allBuckets[k][j+8] = temp2;
      allBuckets[k][j+9] = temp3;
      allBuckets[k][j+10] = temp4;
      allBuckets[k][j+11] = temp5;
      allBuckets[k][j+12]= temp6;
      allBuckets[k][j+13]= temp7;
      allBuckets[k][j+14]= temp8;
      allBuckets[k][j+15]= temp9;
      allBuckets[k][j+16]= temp10;
      allBuckets[k][j+17]= temp11;
      allBuckets[k][j+18]= temp12;
      allBuckets[k][j+19] = temp13;
      allBuckets[k][j+20]= temp14;
      allBuckets[k][j+21]= temp15;
      allBuckets[k][j+22]= temp16;
      allBuckets[k][j+23]= temp17;
      allBuckets[k][j+24]= temp18;
      allBuckets[k][j+25]= temp19;
      allBuckets[k][j+26]= temp20;
      allBuckets[k][j+27]= temp21;
    }
  }


var panzer = 0;
var punto = 0;
  for(var z = 0; z<allBuckets.length; z++)
  {
 
    let boop = new Array();
    if(allBuckets[z].length > 12)
    {
      for(var y= 0; y<allBuckets[z].length; y++)
      {
        boop.push(allBuckets[z][y]);
        punto++;
        if(punto == 21)
        {
          punto =0;
          twodim[panzer] = boop;
          panzer++;
          boop = new Array();
        }
      }
    }
  }

if(percsort == 0)
{
   var count=1;
  for(var i=500; i>-1; i--){
    twodim[i][18]=count;
    twodim[i][20]+=count;
    count++;
  } 
  percsort = 1;
}

  


  }


//sort based on earnings 
var sortearn = 0;
 thisHash.BucketsortEarn = function(bucketsize)
  {

    array = copy(twodim);
    //document.write(array);
    if (array.length === 0) 
    {
    return array;
    }
  // Declaring vars
  var i,
      minValue = array[13],
      maxValue = array[13],
      bucketSize = bucketSize || 5;
  
  // Setting min and max values
  for(var i =13; i<array.length; i+=21)
  {
    if(array[i] < minValue)
    {
      minValue = array[i];
    }
    else if(array[i] > maxValue)
    {
      maxValue = array[i];
    }
  }
  // Initializing buckets
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount);
  
  for (i = 0; i < allBuckets.length; i++)
  {
    allBuckets[i] = [];
  }
  
  // Pushing values to buckets
  var temper = array.length;
  for(var i = 13; i<temper; i+=21)
  {
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-13]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-12]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-11]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-10]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-9]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-8]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-7]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-6]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-5]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-4]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-3]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-2]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-1]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+1]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+2]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+3]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+4]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+5]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+6]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+7]);

  }
  // Sorting buckets
  array.length = 0;
  for(var k = 0; k<allBuckets.length; k++)
  {
    if(allBuckets[k].length <21)
    {
      continue;
    }
    for(var i = 13; i<= allBuckets[k].length; i+=21) //asdf
    {
      var temp1 = allBuckets[k][i-13]; 
      var temp2 = allBuckets[k][i-12];
      var temp3 = allBuckets[k][i-11];
      var temp4 = allBuckets[k][i-10];
      var temp5 = allBuckets[k][i-9];
      var temp6 = allBuckets[k][i-8];
      var temp7 = allBuckets[k][i-7];
      var temp8 = allBuckets[k][i-6];
      var temp9 = allBuckets[k][i-5];
      var temp10 = allBuckets[k][i-4];
      var temp11 = allBuckets[k][i-3];
      var temp12 = allBuckets[k][i-2];
      var temp13 = allBuckets[k][i-1];
      var temp14 = allBuckets[k][i];
      var temp15 = allBuckets[k][i+1];
      var temp16 = allBuckets[k][i+2];
      var temp17 = allBuckets[k][i+3];
      var temp18 = allBuckets[k][i+4];
      var temp19 = allBuckets[k][i+5];
      var temp20 = allBuckets[k][i+6];
      var temp21 = allBuckets[k][i+7];


      var j = i-21; //asdf
      while(j>= 0 && Number(allBuckets[k][j])>Number(temp14))
      {     
        allBuckets[k][j+8] = allBuckets[k][j-13];   
        allBuckets[k][j+9] = allBuckets[k][j-12];
        allBuckets[k][j+10] = allBuckets[k][j-11];
        allBuckets[k][j+11] = allBuckets[k][j-10];
        allBuckets[k][j+12] = allBuckets[k][j-9];
        allBuckets[k][j+13] = allBuckets[k][j-8];
        allBuckets[k][j+14] = allBuckets[k][j-7];
        allBuckets[k][j+15] = allBuckets[k][j-6];
        allBuckets[k][j+16] = allBuckets[k][j-5];
        allBuckets[k][j+17] = allBuckets[k][j-4];
        allBuckets[k][j+18] = allBuckets[k][j-3];
        allBuckets[k][j+19] = allBuckets[k][j-2];
        allBuckets[k][j+20] = allBuckets[k][j-1];
        allBuckets[k][j+21] = allBuckets[k][j];
        allBuckets[k][j+22] = allBuckets[k][j+1];
        allBuckets[k][j+23] = allBuckets[k][j+2];
        allBuckets[k][j+24] = allBuckets[k][j+3];
        allBuckets[k][j+25] = allBuckets[k][j+4];
        allBuckets[k][j+26] = allBuckets[k][j+5];
        allBuckets[k][j+27] = allBuckets[k][j+6];
        allBuckets[k][j+28] = allBuckets[k][j+7];        
        j-=21; //asdf
      }
      allBuckets[k][j+8] = temp1;
      allBuckets[k][j+9] = temp2;
      allBuckets[k][j+10] = temp3;
      allBuckets[k][j+11] = temp4;
      allBuckets[k][j+12] = temp5;
      allBuckets[k][j+13]= temp6;
      allBuckets[k][j+14]= temp7;
      allBuckets[k][j+15]= temp8;
      allBuckets[k][j+16]= temp9;
      allBuckets[k][j+17]= temp10;
      allBuckets[k][j+18]= temp11;
      allBuckets[k][j+19]= temp12;
      allBuckets[k][j+20]= temp13;
      allBuckets[k][j+21]= temp14;
      allBuckets[k][j+22]= temp15;
      allBuckets[k][j+23]= temp16;
      allBuckets[k][j+24]= temp17;
      allBuckets[k][j+25]= temp18;
      allBuckets[k][j+26]= temp19;
      allBuckets[k][j+27]= temp20;
      allBuckets[k][j+28]= temp21;
    }
  }
      //document.write("<br>");
      //document.write("<br>");
      //document.write("<br>");
      //document.write("<br>");
      //document.write("<br>");
var panzer = 0;
var punto = 0;
  for(var z = 0; z<allBuckets.length; z++)
  {  
   
    let boop = new Array();
    if(allBuckets[z].length > 12)
    {
      for(var y= 0; y<allBuckets[z].length; y++)
      {
        boop.push(allBuckets[z][y]);
        punto++;
        if(punto == 21)
        {
          punto =0;
          twodim[panzer] = boop;
          panzer++;
          boop = new Array();
        }
      }
    }
  }
if(sortearn == 0)
{
  var count=1;
  for(var i=500; i>-1; i--){
    twodim[i][17]=count;
    twodim[i][20]+=count;
    count++;
  }
  sortearn=1;  
}



  //for(var i = 0; i<twodim.length; i ++)
  //{
    //if(array[i]!= undefined)
    
    //document.write(twodim[i]);
    //document.write("<br>");
    //document.write("doot");
    //document.write("<br>");
    
  //}
  return twodim;
  }

var devsort = 0;
//sort based on std deviation 
 thisHash.BucketsortDev = function(bucketsize)
  {
    array = copy(twodim);
    //document.write(array);
    if (array.length === 0) 
    {
    return array;
    }
  // Declaring vars
  var i,
      minValue = array[16],
      maxValue = array[16],
      bucketSize = bucketSize || 5;
  
  // Setting min and max values
  for(var i =16; i<array.length; i+=21)
  {
    if(array[i] < minValue)
    {
      minValue = array[i];
    }
    else if(array[i] > maxValue)
    {
      maxValue = array[i];
    }
  }
  // Initializing buckets
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount);
  
  for (i = 0; i < allBuckets.length; i++)
  {
    allBuckets[i] = [];
  }
  
  // Pushing values to buckets
  var temper = array.length;
  for(var i = 16; i<temper; i+=21)
  {
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-16]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-15]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-14]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-13]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-12]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-11]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-10]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-9]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-8]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-7]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-6]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-5]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-4]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-3]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-2]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-1]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+1]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+2]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+3]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+4]);

  }
  // Sorting buckets
  array.length = 0;
  for(var k = 0; k<allBuckets.length; k++)
  {
    if(allBuckets[k].length <21)
    {
      continue;
    }
    for(var i = 16; i<= allBuckets[k].length; i+=21) //asdf
    {
      var temp1 = allBuckets[k][i-16]; 
      var temp2 = allBuckets[k][i-15];
      var temp3 = allBuckets[k][i-14];
      var temp4 = allBuckets[k][i-13];
      var temp5 = allBuckets[k][i-12];
      var temp6 = allBuckets[k][i-11];
      var temp7 = allBuckets[k][i-10];
      var temp8 = allBuckets[k][i-9];
      var temp9 = allBuckets[k][i-8];
      var temp10 = allBuckets[k][i-7];
      var temp11 = allBuckets[k][i-6];
      var temp12 = allBuckets[k][i-5];
      var temp13 = allBuckets[k][i-4];
      var temp14 = allBuckets[k][i-3];
      var temp15 = allBuckets[k][i-2];
      var temp16 = allBuckets[k][i-1];
      var temp17 = allBuckets[k][i];
      var temp18 = allBuckets[k][i+1];
      var temp19 = allBuckets[k][i+2];
      var temp20 = allBuckets[k][i+3];
      var temp21 = allBuckets[k][i+4];


      var j = i-21; //asdf
      while(j>= 0 && Number(allBuckets[k][j])>Number(temp17))
      {     
        allBuckets[k][j+5] = allBuckets[k][j-16];   
        allBuckets[k][j+6] = allBuckets[k][j-15];
        allBuckets[k][j+7] = allBuckets[k][j-14];
        allBuckets[k][j+8] = allBuckets[k][j-13];
        allBuckets[k][j+9] = allBuckets[k][j-12];
        allBuckets[k][j+10] = allBuckets[k][j-11];
        allBuckets[k][j+11] = allBuckets[k][j-10];
        allBuckets[k][j+12] = allBuckets[k][j-9];
        allBuckets[k][j+13] = allBuckets[k][j-8];
        allBuckets[k][j+14] = allBuckets[k][j-7];
        allBuckets[k][j+15] = allBuckets[k][j-6];
        allBuckets[k][j+16] = allBuckets[k][j-5];
        allBuckets[k][j+17] = allBuckets[k][j-4];
        allBuckets[k][j+18] = allBuckets[k][j-3];
        allBuckets[k][j+19] = allBuckets[k][j-2];
        allBuckets[k][j+20] = allBuckets[k][j-1];
        allBuckets[k][j+21] = allBuckets[k][j];
        allBuckets[k][j+22] = allBuckets[k][j+1];
        allBuckets[k][j+23] = allBuckets[k][j+2];
        allBuckets[k][j+24] = allBuckets[k][j+3];
        allBuckets[k][j+25] = allBuckets[k][j+4];
        j-=21; //asdf
      }
      allBuckets[k][j+5] = temp1;
      allBuckets[k][j+6] = temp2;
      allBuckets[k][j+7] = temp3;
      allBuckets[k][j+8] = temp4;
      allBuckets[k][j+9] = temp5;
      allBuckets[k][j+10]= temp6;
      allBuckets[k][j+11]= temp7;
      allBuckets[k][j+12]= temp8;
      allBuckets[k][j+13]= temp9;
      allBuckets[k][j+14]= temp10;
      allBuckets[k][j+15]= temp11;
      allBuckets[k][j+16]= temp12;
      allBuckets[k][j+17]= temp13;
      allBuckets[k][j+18]= temp14;
      allBuckets[k][j+19]= temp15;
      allBuckets[k][j+20]= temp16;
      allBuckets[k][j+21]= temp17;
      allBuckets[k][j+22]= temp18;
      allBuckets[k][j+23]= temp19;
      allBuckets[k][j+24]= temp20;
      allBuckets[k][j+25]= temp21;
    }
  }
var panzer = 0;
var punto = 0;
  for(var z = 0; z<allBuckets.length; z++)
  {
  
    let boop = new Array();
    if(allBuckets[z].length > 12)
    {
      for(var y= 0; y<allBuckets[z].length; y++)
      {
        boop.push(allBuckets[z][y]);
        punto++;
        if(punto == 21)
        {
          punto =0;
          twodim[panzer] = boop;
          panzer++;
          boop = new Array();
        }
      }
    }
  }
if(devsort == 0)
{
  var count=1;
  for(var i=500; i>-1; i--){
    twodim[i][19]=count;
    twodim[i][20]+=count;
    count++;
  }
  devsort=1;  
}





  return twodim;
  }

};



