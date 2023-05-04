///////DUPLICATES///////////////////////////////////////////////////////////////////////////////////////////
// 1.To make new array which contain only duplicates of arr
var arr=[1,2,3,4,4,4,5,5,5]
var b=[]
for(var i=0;i<arr.length;i++){
 for(var j=i+1;j<arr.length;j++){
     if(arr[i]===arr[j]){
         b.push(arr[i])
     }
 }   
}
console.log([...new Set(b)]) 

/////output////////

[ 4, 5 ]


///////////////////////////////////////////////////////////////////////////////////////////////////////

//2.To remove duplicates from array and form an array without duplicates
//inbuild method
var arr=[1,2,3,4,4,4,5,5,5]
var res=[...new Set(arr)]
console.log(res)

//////output///////

[ 1, 2, 3, 4, 5 ]

//filter method
var arr=[1,2,3,4,4,4,5,5,5]
var res=arr.filter((ele,index)=>
    arr.indexOf(ele)===index
   
)
console.log(res)

//////output//////

[ 1, 2, 3, 4, 5 ]



/////////////////////////////////////////////////////////////////////////////////////////////////////

// 3.Duplicate Count

var arr=[1,2,3,4,4,4,5,5,5]
var res=arr.reduce((acc,ele,index)=>{
    acc[ele]=acc[ele]+1 || 1
    return acc
},{})
console.log(res)


////output////
{ '1': 1, '2': 1, '3': 1, '4': 3, '5': 3 }

/////////////////////////////////////////////////////////////////////////////////////////////////////////


// *********************************************** /end of duplicates/***********************************************

////////ARRAY ROTATION///////////////
4.var arr=[1,2,3,4,5]
var k=+userInput[0]
for(var i=0;i<k;i++){
    arr.unshift(arr.pop())
}
console.log(arr)

////OUTPUT////
[5,1,2,3,4] WHEN K=1


// ********************************/END OF ARRAY ROTATIONS/***************************************************
/



///////////////SORTING OF ARRAY//////////////////////////
5.Ascending order

var arr=[2,3,5,7,4,6,55,99,66]
arr.sort(function(a,b){
    return a-b
})
console.log(arr)

////output////
[ 2, 3, 4, 5, 6, 7, 55, 66, 99 ]

/////////////////////////////////

6.Desending order
var arr=[2,3,5,7,4,6,55,99,66]
arr.sort(function(a,b){
    return b-a
})
console.log(arr)


///output////
[ 99, 66, 55, 7, 6, 5, 4, 3, 2 ]
method 2.
var arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            var x=arr[i]
            arr[i]=arr[j]
            arr[j]=x
        }
    }
}
console.log(arr)

////output////
[ 9, 8, 7, 5, 4, 3, 2, 1, 0 ]

7.Ascending order

var arr=[2,3,5,7,4,6,55,99,66]
arr.sort(function(a,b){
return a-b
})
console.log(arr)


////output////

[ 2, 3, 4, 5, 6, 7, 55, 66, 99 ]

method2
var arr=[2,3,5,7,4,6,55,99,66]
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;i++){
        if(arr[i]>arr[j]){
            var x=arr[i]
            arr[i]=arr[j]
            arr[j]=x
        }
    }
}
console.log(arr)

////output////
[ 2, 3, 4, 5, 6, 7, 55, 66, 99 ]


// *********************************/end of sorting/*************************************


////array Reverse////////
8.var arr=[1,2,3,4,5,6]
var b=[]
for(var i=arr.length-1;i>=0;i--){
   b.push(arr[i])
}console.log(b)

////output/////
[ 6, 5, 4, 3, 2, 1 ]


//*******************************************/end of array reverse/******************************************


///////ODD OR EVEN////////LEAP YEAR/////////FACTORIAL///////

/////ODD OR EVEN//////////
9.
var arr=[1,2,3,4,5,6,7]
var b=[]
var c=[]
for(var i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        b.push(arr[i])
    }else{
        c.push(arr[i])
    }
}
console.log(`even array ${[b]}`)
console.log(`odd array ${[c]}`)

////output////
even array 2,4,6
odd array 1,3,5,7

///////LEAP YEAR///////
var a=+2021

    if(a%4===0){
    console.log("leap year")
    }else{
        console.log("not a leap year")
    }

//////////////////////////

//////FACTORIAL/////////////////
var a=3
var res=1
for(var i=a;i>0;i--){
   res*=i
    
}
console.log(res)


/////////////MAP,REDUCE,FILTER/////////////////////////

var arr=[1,2,3,4,5,6]
var res=arr.map((ele,index)=>ele*index)
console.log(res)

///output////
[ 0, 2, 6, 12, 20, 30 ]

///////////////////////////Reduce////////
var arr=[1,2,3,4,5,6]
var res=arr.reduce((acc,ele)=>{
    acc+ele
})
console.log(res)

///output////
21

//////////////filter/////////////////////
var arr=[1,2,3,4,5,6]
var res=arr.filter((ele)=>{
ele%2===0
})
console.log(res)


//////output/////
[ 2, 4, 6 ]


///////fibnocci///////////
var num=+5;
  var num1=0;
        var num2=1;
        var sum;
        var i=0;
        for (i = 0; i < num; i++) 
        {
            sum=num1+num2;
            num1=num2;
            num2=sum;
        }
         console.log(sum)


         ////output///
    8
 
    

    // ****************************/end of fibinocci/*********************************************************


    /////AMSTRONG NUMBER////////////////////////////

    var a=userInput[0].split("").map(Number)
var n=a.length
var res=a.map((ele)=>

   Math.pow(ele,n)
)

console.log(n)
var result=res.reduce((acc,ele)=>acc+ele)
console.log(a.join(""))
var b=+(a.join(""))

if(result===b){
    console.log("it is an amstrong number")
}else{
    console.log("it is not an amstrong number")
}


    ////////////pattern/////////////////
//    *****
//    ****
//    ***
//    **
//    *
var n=5;
for(var i=n-1;i>=0;i--){
    var str=""
    for(var j=0;j<=i;j++){
        str+="*"
    }
    console.log(str)
}
///////////////////////////////////////////////////
// *
// **
// ***
// ****
// *****
var n=5;
for(var i=0;i<n;i++){
    var str=""
    for(var j=0;j<=i;j++){
        str+="*"
    }
    console.log(str)
}



////////////////////////////PLAYING WITH OBJECTS//////////////////////////////
var obj={
    name:"mithran",
    age:"25"

}
obj.qualification={UG:"B.E"}
console.log(obj)
   

/////output/////
{ name: 'mithran', age: '25', qualification: { UG: 'B.E' } }

///////////////forin loop for obj//////////////////////
var obj={
    name:"mithran",
    age:"25"

}
obj.qualification={UG:"B.E"}


for(var key in obj){
    console.log(key,obj[key])
}

//////output////
name mithran
age 25
qualification { UG: 'B.E' }



///////for accessing only qualification////////////

var obj={
    name:"mithran",
    age:"25"
   

}
obj.qualification={UG:"B.E"}


console.log(obj.qualification.UG)

///output////
B.E

//////////key and value inter change/////////////////
var obj={
    name:"mithran",
    age:25,
    UG:"B.E"
   

}

var output={}

for(var key in obj){
    output[obj[key]]=key
}
console.log(output)


///////output//////
{ '25': 'age', mithran: 'name', 'B.E': 'UG' }

////////////////making only key as capital//////////
var obj={
    name:"mithran",
    age:25,
    UG:"B.E"
   

}

var output={}

for(var key in obj){
    output[key.toUpperCase()]=obj[key]
}
console.log(output)


//////output//////
{ NAME: 'mithran', AGE: 25, UG: 'B.E' }

//////////////both key and value on uppercase/////////////
var obj={
    name:"mithran",
    age:"25",
    UG:"B.E"
   

}

var output={}

for(var key in obj){
   output[key.toUpperCase()]=obj[key].toUpperCase()
}
console.log(output)

///output////
{ NAME: 'MITHRAN', AGE: '25', UG: 'B.E' }

////////in array of array to capital only [0]/////
var arr=[["jack","jill"],["jung","jill"],["chuck","jill"]]
var res=arr.map((ele)=>{
    ele[0]=ele[0].toUpperCase()
    return ele
})
console.log(res)

//////output/////
[ [ 'JACK', 'jill' ], [ 'JUNG', 'jill' ], [ 'CHUCK', 'jill' ] ]


///////interchanging array a[0] to a[1]////////
var arr=[["jack","jill"],["jung","jill"],["chuck","jill"]]
var res=arr.map((ele)=>{
    var x=ele[0]
    ele[0]=ele[1]
    ele[1]=x
    
    return ele
})
console.log(res)
////output////
[ [ 'jill', 'jack' ], [ 'jill', 'jung' ], [ 'jill', 'chuck' ] ]


/////////array of object ittration//////////
var arr=[
    {
        name:"anu",
        age:25
    }, {
        name:"mithran",
        age:27
    },
     {
        name:"sai",
        age:16
    }
    
    
    ]
    for(var i=0;i<arr.length;i++){
      console.log( arr[i])
    }
    ///output///
    { name: 'anu', age: 25 }
{ name: 'mithran', age: 27 }
{ name: 'sai', age: 16 }

///////////using map adding age+10//////////////
var arr=[
    {
        name:"anu",
        age:25
    }, {
        name:"mithran",
        age:27
    },
     {
        name:"sai",
        age:16
    }
    
    
    ]
  var res=arr.map((ele)=>{
      ele.age=ele.age+10
      return ele
  })
 console.log(res)
 /////output/////
 [ { name: 'anu', age: 35 },
  { name: 'mithran', age: 37 },
  { name: 'sai', age: 26 } ]


  //////using filter going to find age above 20/////
  var arr=[
    {
        name:"anu",
        age:25
    }, {
        name:"mithran",
        age:27
    },
     {
        name:"sai",
        age:16
    }
    
    
    ]
  var res=arr.filter((ele)=>
      ele.age>20
     
  )
  console.log(res)

  ////output///
  [ { name: 'anu', age: 25 }, { name: 'mithran', age: 27 } ]
  /////////////////end of array and object//////////////////////

//////slice////////
var arr=["jan","feb","march","april","may","june"]
var res=arr.slice(0,3)//(start,n-1(index))
console.log(res)

/////output///
[ 'jan', 'feb', 'march' ]


var arr=["jan","feb","march","april","may","june"]
var res=arr.slice(3)//(start,n-1(index))
console.log(res)

///output///
[ 'april', 'may', 'june' ]


/////////////////////splice///////////////////////////

var arr=["jan","feb","dec","may","june"]
arr.splice(2,0,"march")
arr.splice(3,1,"april")
console.log(arr)

//////output/////
[ 'jan', 'feb', 'march', 'april', 'may', 'june' ]
