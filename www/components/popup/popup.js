define(['css!./popup','tpl!./popup.tpl',"jquery"], function(css,popuptpl,$) {
	


	var scriptArray=[];
	for(var i=0;i<10;i++){

		var a=function(){
			
			var mod=new module(arguments.callee.module_i);
			scriptArray.push(mod);
		};
		a.module_i=i;
		new a();
		// (function(module_i){
		// 	var mod=new module(module_i);
		// 	scriptArray.push(mod);
		// })(i)
	}
	function module(i){
		this.name="name"+i;
		this.callBack=function(){
			console.log(this.name);
		}
	}


	var timerid=null
	var i=0;
	function run(){
		if(timerid){
			window.clearTimeout(timerid);
		}
		i++;
		if(i<10){
			console.log(i);
			scriptArray[i].callBack();
			window.setTimeout(function(){
				run();
			},1000);
		}


	} 

	run();


 
  return {
  		getHtml:function(){
  			var popupHtml=popuptpl({"users":[
  				{"name":"11",sayName:function(){
  					console.log("sayName",this);
  				}},
  				{
  					"name":"22",
  					sayName:function(){
  						console.log("sayName","22")
  					}
  				}

  			]});
  			var div=document.createElement("DIV");
  			$(div).addClass("popup").html(popupHtml).on("click",function(e){
  				console.log(e);
  			})
  			return  div;
  		},
  		updateHtml:function(data){
  			var newHtml=popuptpl({"users":["aa","bb","cc"]});
  			return newHtml;
  		}
  }
});
