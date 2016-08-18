define(['css!./popup','tpl!./popup.tpl',"jquery"], function(css,popuptpl,$) {
	
 
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
