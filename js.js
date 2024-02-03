function mymath(arg) {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	if(isNaN(num1) || isNaN(num2))
	{
		alert("请输入数字");
	}
	else
	{
		switch(arg)
		{
			case 1:
				document.getElementById("ret").value = Math.max(num1, num2);
			break;
			case 2:
				document.getElementById("ret").value = Math.min(num1, num2);
			break;
			case 3:
				document.getElementById("ret").value = Number(num1) + Number(num2);
			break;
			case 4:
				document.getElementById("ret").value = Number(num1) - Number(num2);
			break;
		}
	}
}
