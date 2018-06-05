function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));
}

function identifyByTag() {
    console.log(document.getElementsByTagName('p'));
}

function changeBackground() {

    document.getElementById('block1').style.backgroundColor="blue";
}

function increaseFont() {
    document.getElementById('block2').style.fontSize="40px";
}

function changeFontColor() {
    document.getElementById('block3').style.color="green";
}

function revertColor() {
    document.getElementById('block3').style.color="black";

}
function hide() {
    document.getElementById('block4').style.visibility="hidden";
}
function changeBackColor(x,y) {
    var n= document.getElementsByClassName(y);
    for(var i=0;i<3;i++)
    {
        n[i].style.backgroundColor=x;
    }
    
 
 }
 function numbersOnly(event)
 {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31 
      && (charCode < 48 || charCode > 57))
       return false;
 
    return true;
 }
 
 
 function addAdjacent() {
     document.getElementById('para2').innerHTML+="<p>I got generated on the fly...</p>"
 }
 
 function removePara() {
     document.getElementById('para3').parentElement.removeChild(document.getElementById('para4'));
 
 }
 
 function animatePara() {
     myMove();
 }
 function myMove(){
     document.getElementById("box5").style.position="relative";
     document.getElementById("box5").style.animationName="example";
     document.getElementById("box5").style.animationDuration="6s";
 
 }
 function convert_upper() {
     document.getElementById("inputBox2").value=document.getElementById("inputBox1").value.toUpperCase();
 }
 function convert_camel(){
     var m=document.getElementById("inputBox3").value;
     var x=m.split(" ");
     m=x[0];
     for(var i=1;i<x.length;i++){
         x[i]=x[i].charAt(0).toUpperCase()+x[i].substr(1);
         m+=x[i];
     }
     document.getElementById("inputBox3").value=m;
 }
 function browse(){
     console.log(document.getElementById("browsers").value);
 }
 function myFunction() {
     document.getElementById("inputBox5").style.backgroundColor = "pink";
 }
 













