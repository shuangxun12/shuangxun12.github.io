function mymath(arg){
  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2");
  if(isNaN(num1) || isNaN(num2))
  {
  	alert("请输入数字");
  }
  else
  {
  	swich(arg)
  	{
  		case 1:
  			document.getElementById("ret") = Math.max(num1, num2);
  			break;
  		case 2:
  			document.getElementById("ret") = Math.min(num1, num2);
  			break;
  		case 3:
  			document.getElementById("ret") = Number(num1) + Number(num2);
  			break;
  		case 4:
  			document.getElementById("ret") = Number(num1) - Number(num2);
  			break;
  	}
  }
}