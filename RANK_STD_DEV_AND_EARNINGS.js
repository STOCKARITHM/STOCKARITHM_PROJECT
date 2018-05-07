 


//sort based on earnings 
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
    }
  }
var panzer = 0;
  for(var z = 0; z<allBuckets.length; z++)
  {
    if(allBuckets[z].length > 20)
    {
      let boop = new Array();
      boop.push(allBuckets[z]);
      array[panzer] = boop;
      panzer ++;
    }
  }
  var count=1;
  for(var i=0; i<500; i++){
    array[i][17]=count;
    array[i][20]+=count;
    count++;
  }

  twodim=copy(array);



  return array;
  }
function average(array,row){
  var sum=0;
  var avg=0;
  for(var i=1; i<13; i++){
    sum+=array[row][i];
  }
  avg=sum/12;
  array[row][15]=avg;
}

function standardDeviation(array, row){
  var Xi=0;
  var sum=0;
  for(var i=1; i<13; i++){
    Xi=array[row][i];
    sum+=Math.pow(Xi-array[row][15], 2);
  }
  var standardDev = Math.sqrt((sum/11));
  array[row][16]=standardDev;
}
for(var i=1; i<500; i++){
  average(twodim,i);
 standardDeviatino(twodim,i);
}
//sort based on std deviation 
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
    }
  }
var panzer = 0;
  for(var z = 0; z<allBuckets.length; z++)
  {
    if(allBuckets[z].length > 20)
    {
      let boop = new Array();
      boop.push(allBuckets[z]);
      array[panzer] = boop;
      panzer ++;
    }
  }
  var count=1;
  for(var i=0; i<500; i++){
    array[i][19]=count;
    array[i][20]+=count;
    count++;
  }

  twodim=copy(array);



  return array;
  }
