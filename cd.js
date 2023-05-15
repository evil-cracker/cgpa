
var okeyi = document.getElementById("okey");
okeyi.addEventListener("click", goback);


var backi = document.getElementById("bc");
backi.addEventListener("click", back);


function goback()
{

var matsub = JSON.parse(sessionStorage.getItem("matsub"));
var matcr = JSON.parse(sessionStorage.getItem("matcr"));
var matgr = JSON.parse(sessionStorage.getItem("matgr"));


var sn= parseInt(document.getElementById("serial").value);
sn= sn-1;

var sub= document.getElementById("chsub").value;

var cr =parseInt(document.getElementById("cr").value);

var gr= parseInt(document.getElementById("gr").value);

matsub.splice(sn,1,sub);
matcr.splice(sn,1,cr);
matgr.splice(sn,1,gr);


sessionStorage.setItem("matsub", JSON.stringify(matsub));
sessionStorage.setItem("matcr", JSON.stringify(matcr));
sessionStorage.setItem("matgr", JSON.stringify(matgr));



}


function back()
{

window.history.back();
}