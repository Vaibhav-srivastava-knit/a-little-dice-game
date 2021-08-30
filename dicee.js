//console.log('connected');
//d1
var a=Math.random();
var b;
var d1;
b=Math.floor(a*6);
b=b+1;
//console.log(b);
if(b==1)
d1=1;
if(b==2)
d1=2;
if(b==3)
d1=3;
if(b==4)
d1=4;
if(b==5)
d1=5;
if(b==6)
d1=6;
var y=`images/dice${d1}.png`
var x=document.querySelector('.img1').setAttribute("src",y);
var c=Math.random();
var d;
var d2;
b=Math.floor(c*6);
d=b+1;
//console.log(b);
if(d==1)
d2=1;
if(d==2)
d2=2;
if(d==3)
d2=3;
if(d==4)
d2=4;
if(d==5)
d2=5;
if(d==6)
d2=6;
var z=`images/dice${d2}.png`
var x2=document.querySelector('.img2').setAttribute("src",z);
var k=document.querySelector("h1");
if(d1>d2)
k.innerHTML='player one wins';
else if(d2>d1)
k.innerHTML='player two wins';
else if(d1==d2)
k.innerHTML='draw';