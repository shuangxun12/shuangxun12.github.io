function url() {
	alert("网页标题： "+document.title);

	alert("网页地址: "+document.URL);

	var value = document.getElementById("mylabel").innerHTML;
	alert(value);
	alert("hello");
	document.getElementById("mylabel").innerHTML = "hello world!";
}

