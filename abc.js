var sno=1;
var row=1;
var sum=0;
var ans =0;
var matmul=0;
var matlen=0;
const matsub=[];
const matcr=[];
const matgr=[];
var format=0;
var to=0;





var entry = document.getElementById("enter");
entry.addEventListener("click", displayDetails);


var cal = document.getElementById("calculate");
cal.addEventListener("click", calculateDetalis);


var up = document.getElementById("update");
up.addEventListener("click", updis);








function updis(){
var matsub = JSON.parse(sessionStorage.getItem("matsub"));
var matcr = JSON.parse(sessionStorage.getItem("matcr"));
var matgr = JSON.parse(sessionStorage.getItem("matgr"));
var leng = matcr.length;

for(let i=0;i<leng;i++){


var display = document.getElementById("display");

var newRow = display.insertRow(i+1);

var serial = newRow.insertCell(0);
var cell1 = newRow.insertCell(1);
var cell2 = newRow.insertCell(2);
var cell3 = newRow.insertCell(3);

serial.innerHTML = i+1+".";
cell1.innerHTML = matsub[i];
cell2.innerHTML = matcr[i];
cell3.innerHTML = matgr[i];
}
}







function calculateDetalis()
{

var matsub = JSON.parse(sessionStorage.getItem("matsub"));
var matcr = JSON.parse(sessionStorage.getItem("matcr"));
var matgr = JSON.parse(sessionStorage.getItem("matgr"));


matlen=matcr.length;


for(let i=0; i<matlen; i++)
{
matmul=matcr[i]*matgr[i];

sum=sum+matmul;

}

for(let j=0; j<matlen; j++)
{

to=to+matcr[j];



}

ans=sum/to;



if(ans < 6)
{
document.getElementById("final").innerHTML="very bad............ study hard better luck next time    your cgpa is  "+ans;
}
if(ans >=6 && ans<7)
{
document.getElementById("final").innerHTML="study hard better luck next time    your cgpa is  "+ans;

}

if(ans >=7 && ans<8)
{
document.getElementById("final").innerHTML="Nice try get high marks    your cgpa is  "+ans;

}
if(ans >=8 && ans<9)
{
document.getElementById("final").innerHTML="Very good keet it up ....   :)    your cgpa is  "+ans;

}


if(ans >=9)
{

document.getElementById("final").innerHTML="excelent you are amazing  lets rock it buddy.......    your cgpa is  "+ans;

}

to=0;
ans=0;
matmul=0;
sum=0;

}

function displayDetails()
{
var ss = document.getElementById("vin").value;

var cc  = parseInt(document.getElementById("cr").value);

var gg = parseInt(document.getElementById("gr").value);

matsub.push(ss);
matcr.push(cc);
matgr.push(gg);




var display = document.getElementById("display");

var newRow = display.insertRow(row);

var serial = newRow.insertCell(0);
var cell1 = newRow.insertCell(1);
var cell2 = newRow.insertCell(2);
var cell3 = newRow.insertCell(3);

serial.innerHTML = sno+".";
cell1.innerHTML = matsub[format];
cell2.innerHTML = matcr[format];
cell3.innerHTML = matgr[format];
sno++;
row++;
format++;


sessionStorage.setItem("matsub", JSON.stringify(matsub));
sessionStorage.setItem("matcr", JSON.stringify(matcr));
sessionStorage.setItem("matgr", JSON.stringify(matgr));






}






