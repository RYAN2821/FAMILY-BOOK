var reasons=["CHETNA KHURANA MY MOTHER","BIMLA DEVI MY GRANDMOTHER","SAKSHAM MY BROTHER","ME RYAN"];
var images=["mummy.jpg","dadi.jpg","brother.jpg","me.jpg"];
var i=0;
function nextslide(){
  document.getElementById("reasontext").innerHTML=reasons[i];
  document.getElementById("album").src=images[i];
  i++;
  document.getElementById("audio").play();
}