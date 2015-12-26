var data = [];
var i;
function myFunction()
{
	while(data.length<=5)
	{
		document.getElementById("topka").innerHTML=Math.round(Math.random()*48+1);
		
		data.push(document.getElementById("topka").innerHTML);

		document.getElementById("topka").innerHTML=data[i];	 
	 	console.log(data); 

	}
	for(i in data)
	{
		var content = document.createElement('div');
		content.id=data[i];
		content.className="pulled";
		content.innerHTML=data[i];
		document.body.appendChild(content);
		document.getElementById("topka").innerHTML="Pulled numbers";
	 }

}

var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);
 function someOtherFunction() {
    alert ("Try again");
}