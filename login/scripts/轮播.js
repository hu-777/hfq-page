var i=1
function carousel()
{
    i++;
    if(i>5){
        i=1;
    }
    var img=document.getElementById("crs-img");
    img.src="images/画"+i+".jpg";
}
setInterval(carousel,2000)