let one=prompt();
let two=prompt();
one=parseInt(one);
two=parseInt(two);
switch(one>=two){
	case true:
		if(one>two){
			alert(one+two)
		}else{
			alert('цифри однакові')
		}
		break
	case false:
		alert('твір')
}
