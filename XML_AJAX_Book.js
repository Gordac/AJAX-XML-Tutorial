function loadXML{
	var xHttp = new XMLHttpRequest();
	xHttp.onreadystatechange = function{
		if(this.readyState == 4 && this.state == 200){
			createView(this);
		}
	};
	xHttp.open("GET", "book_collection.xml", true);
	xHttp.send();
}

function createView(xml){
	var xmlDoc = xml.responseXML;
	
	var table="<tr><th>Book</th></tr>";
	
	var book = xmlDoc.getElementsByTagName("BOOK");
	
	for(var index = 0; book.length; index++){
		table += "<tr><td>" + book.getElementsByTagName("AUTHOR")[0].childNodes[0].nodeValue +
		"</td><td>" +
		book.getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
		"</td></tr>";
	}
	document.getElementById("bookView").innerHTML = table;
}

<!DOCTYPE html>
<html>
<body onload="createView()">
<style>
table,th,td {
  border : 1px solid black;
  border-collapse: collapse;
}
th,td {
  padding: 5px;
}
</style>
<body>

<h2>Local LIbrary</h2>

<table id="bookView"></table>