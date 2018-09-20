var colors = [
	"rgb(255, 0, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(0, 255, 255)",
	"rgb(255, 255, 0)",
	"rgb(255, 0, 255)"                                           
];
      var square=document.querySelectorAll(".square");
      var b=colors[3]
      var colordisplay=document.getElementById("colordisplay");
      colordisplay.textContent=b;
      for(var i=0; i<square.length; i++){
      	square[i].style.background=colors[i];

      	square[i].addEventListener("click",function(){
      		var clicked =this.style.background;

      	  if(clicked===b){
            alert("correct");
      	  }else{alert("incorrect")
      	}

      });
      }
  