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

      var j = i-20; //asdf
      while(j>= 0 && Number(allBuckets[k][j])>Number(temp21))
      {     
        allBuckets[k][j] = allBuckets[k][j-20];   
        allBuckets[k][j+1] = allBuckets[k][j-19];
        allBuckets[k][j+2] = allBuckets[k][j-18];
        allBuckets[k][j+3] = allBuckets[k][j-17];
        allBuckets[k][j+4] = allBuckets[k][j-16];
        allBuckets[k][j+5] = allBuckets[k][j-15];
        allBuckets[k][j+6] = allBuckets[k][j-14];
        allBuckets[k][j+7] = allBuckets[k][j-13];
        allBuckets[k][j+8] = allBuckets[k][j-12];
        allBuckets[k][j+9] = allBuckets[k][j-11];
        allBuckets[k][j+10] = allBuckets[k][j-10];
        allBuckets[k][j+11] = allBuckets[k][j-9];
        allBuckets[k][j+12] = allBuckets[k][j-8];
        allBuckets[k][j+13] = allBuckets[k][j-7];
        allBuckets[k][j+14] = allBuckets[k][j-6];
        allBuckets[k][j+15] = allBuckets[k][j-5];
        allBuckets[k][j+16] = allBuckets[k][j-4];
        allBuckets[k][j+17] = allBuckets[k][j-3];
        allBuckets[k][j+18] = allBuckets[k][j-2];
        allBuckets[k][j+19] = allBuckets[k][j-1];
        allBuckets[k][j+20] = allBuckets[k][j];

        j-=20; //asdf
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
      allBuckets[k][j+13]= temp14;
      allBuckets[k][j+14]= temp15;
      allBuckets[k][j+15]= temp16;
      allBuckets[k][j+16]= temp17;
      allBuckets[k][j+17]= temp18;
      allBuckets[k][j+18]= temp19;
      allBuckets[k][j+19]= temp20;
      allBuckets[k][j+20]= temp21;
    }
  }



var panzer = 0; //counter
  for(var z = 0; z<allBuckets.length; z++)
  {
    if(allBuckets[z].length > 20)
    {
      let boop = new Array(); //array to be put into array

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

      var j = i-20; //asdf
      while(j>= 0 && Number(allBuckets[k][j])>Number(temp15))
      {     
        allBuckets[k][j+6] = allBuckets[k][j-14];   
        allBuckets[k][j+7] = allBuckets[k][j-13];
        allBuckets[k][j+8] = allBuckets[k][j-12];
        allBuckets[k][j+9] = allBuckets[k][j-11];
        allBuckets[k][j+10] = allBuckets[k][j-10];
        allBuckets[k][j+11] = allBuckets[k][j-9];
        allBuckets[k][j+12] = allBuckets[k][j-8];
        allBuckets[k][j+13] = allBuckets[k][j-7];
        allBuckets[k][j+14] = allBuckets[k][j-6];
        allBuckets[k][j+15] = allBuckets[k][j-5];
        allBuckets[k][j+16] = allBuckets[k][j-4];
        allBuckets[k][j+17] = allBuckets[k][j-3];
        allBuckets[k][j+18] = allBuckets[k][j-2];
        allBuckets[k][j+19] = allBuckets[k][j-1];
        allBuckets[k][j+20] = allBuckets[k][j];
        allBuckets[k][j+21] = allBuckets[k][j+1];
        allBuckets[k][j+22] = allBuckets[k][j+2];
        allBuckets[k][j+23] = allBuckets[k][j+3];
        allBuckets[k][j+24] = allBuckets[k][j+4];
        allBuckets[k][j+25] = allBuckets[k][j+5];
        allBuckets[k][j+26] = allBuckets[k][j+6];

        j-=20; //asdf
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
      allBuckets[k][j+19]= temp14;
      allBuckets[k][j+20]= temp15;
      allBuckets[k][j+21]= temp16;
      allBuckets[k][j+22]= temp17;
      allBuckets[k][j+23]= temp18;
      allBuckets[k][j+24]= temp19;
      allBuckets[k][j+25]= temp20;
      allBuckets[k][j+26]= temp21;
    }
  }



var panzer = 0; //counter
  for(var z = 0; z<allBuckets.length; z++)
  {
    if(allBuckets[z].length > 20)
    {
      let boop = new Array(); //array to be put into array

      boop.push(allBuckets[z]);
      array[panzer] = boop;
      panzer ++;
    }
  }


var counter = 1;
for(int i =0; i<500; i++)
{
  array[i][18] = counter;
  array[i][20]+= counter;
  counter++;

}

  
twodim = copy(array);


  }
