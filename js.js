function mymath(arg){
  var num1 = document.getElementsById("num1");
  var num2 = document.getElementsById("num2");
  if(isNaN(num1) || isNaN(num2))
  {
  	alert("请输入数字");
  }
  else
  {
  	swich(arg)
  	{
  		case 1:
  			document.getElementsById("ret") = Math.max(num1, num2);
  			break;
  		case 2:
  			document.getElementsById("ret") = Math.min(num1, num2);
  			break;
  		case 3:
  			document.getElementsById("ret") = Number(num1) + Number(num2);
  			break;
  		case 4:
  			document.getElementsById("ret") = Number(num1) - Number(num2);
  			break;
  	}
  }
}