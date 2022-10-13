let mas=[10,20,30,50,235,3000]
let value="";
mas.forEach(it=>{
	let iter=it.toString();
	if((iter[0]==1) || (iter[0]==2) || (iter[0]==5)){
	value+=iter+"\r\n";
}});
alert(value);
