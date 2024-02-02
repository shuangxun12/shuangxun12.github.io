function myfun(arg) {
	var a = 100;
	alert(typeof(a));

	var str = arg;
	alert(str);

	return 0
}

function fun1() {
	var b = "b = ";
	b += myfun(10);
	alert(b);
}