var max = 1000;
var dimplus =0;
var dimcounter = 0;
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





  thisHash.Bucketsort = function(bucketsize)
  {
    array = copy(twodim);
    //document.write(array);
    if (array.length === 0) 
    {
    return array;
    }

  // Declaring vars
  var i,
      minValue = array[1],
      maxValue = array[1],
      bucketSize = bucketSize || 5;
  
  // Setting min and max values
  for(var i = 1; i<array.length; i+=13)
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
  for(var i = 1; i<temper; i+=13)
  {
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i-1]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+1]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+2]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+3]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+4]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+5]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+6]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+7]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+8]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+9]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+10]);
    allBuckets[Math.floor((array[i] - minValue)/bucketSize)].push(array[i+11]);
  }
  // Sorting buckets
  array.length = 0;

  for(var k = 0; k<allBuckets.length; k++)
  {
    if(allBuckets[k].length <13)
    {
      continue;
    }
    for(var i = 1; i<= allBuckets[k].length; i+=13) //asdf
    {
      var temp1 = allBuckets[k][i-1]; 
      var temp2 = allBuckets[k][i];
      var temp3 = allBuckets[k][i+1];
      var temp4 = allBuckets[k][i+2];
      var temp5 = allBuckets[k][i+3];
      var temp6 = allBuckets[k][i+4];
      var temp7 = allBuckets[k][i+5];
      var temp8 = allBuckets[k][i+6];
      var temp9 = allBuckets[k][i+7];
      var temp10 = allBuckets[k][i+8];
      var temp11 = allBuckets[k][i+9];
      var temp12 = allBuckets[k][i+10];
      var temp13 = allBuckets[k][i+11];

      var j = i-13; //asdf
      while(j>= 0 && Number(allBuckets[k][j])>Number(temp12))
      {     
        allBuckets[k][j+12] = allBuckets[k][j-1];   
        allBuckets[k][j+13] = allBuckets[k][j];
        allBuckets[k][j+14] = allBuckets[k][j+1];
        allBuckets[k][j+15] = allBuckets[k][j+2];
        allBuckets[k][j+16] = allBuckets[k][j+3];
        allBuckets[k][j+17] = allBuckets[k][j+4];
        allBuckets[k][j+18] = allBuckets[k][j+5];
        allBuckets[k][j+19] = allBuckets[k][j+6];
        allBuckets[k][j+20] = allBuckets[k][j+7];
        allBuckets[k][j+21] = allBuckets[k][j+8];
        allBuckets[k][j+22] = allBuckets[k][j+9];
        allBuckets[k][j+23] = allBuckets[k][j+10];
        allBuckets[k][j+24] = allBuckets[k][j+11];



        j-=13; //asdf
      }
      allBuckets[k][j+12] = temp1;
      allBuckets[k][j+13] = temp2;
      allBuckets[k][j+14] = temp3;
      allBuckets[k][j+15] = temp4;
      allBuckets[k][j+16] = temp5;
      allBuckets[k][j+17]= temp6;
      allBuckets[k][j+18]= temp7;
      allBuckets[k][j+19]= temp8;
      allBuckets[k][j+20]= temp9;
      allBuckets[k][j+21]= temp10;
      allBuckets[k][j+22]= temp11;
      allBuckets[k][j+23]= temp12;
      allBuckets[k][j+24]= temp13;

    }
  }



var panzer = 0;
  for(var z = 0; z<allBuckets.length; z++)
  {
    if(allBuckets[z].length > 12)
    {
      let boop = new Array();

      boop.push(allBuckets[z]);
      array[panzer] = boop;
      panzer ++;
    }
  }
  for(var i = 0; i<array.length; i ++)
  {
    if(array[i]!= undefined)
    {
      document.write(array[i]);
      document.write("<br>");
    }

  }



  return array;
  }




      //this function needs to be changed/have several versions to benefit us
  thisHash.print = function() {
    for(var i = 0; i< twodim.length; i++)
    {
      document.write(twodim[i]);
      document.write("<br>");
       if(storage[i]!=undefined)
        {
       //document.write(storage[i]);
       //document.write("<br>");
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
  thisHash.printinfo = function(key)
  {
    var index = hash(key,max);
    if(storage[index]===undefined)
    {
    document.write("no symbol match");  
  }
    else
    {
      for(var i=0; i<storage[index].length; i++)
      {
        if (storage[index][i][0] === key)
        {
          document.write(storage[index][i][0]);
          document.write(" ");
          document.write(storage[index][i][1]);
        }
      }
    }
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
};
let ht = new HashTable();
  ht.getData();