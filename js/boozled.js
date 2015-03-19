$(document).ready(function(){
	// Hi Thomas! See my comments throughout your JS. I cleaned some stuff up, compare my changes with your original JS file in this folder. Good job on this by the way!!
	
	/*	We try to avoid global variables at all costs.  
	Global variables pollute the global namespace, and just because JS will allow you to do it, doesn't mean you should. 
	Naming conflicts, and lack flexibility are just 2 reasons why not to use this practice.
	You should either put your varibles inside a closure like I'm doing here (the document ready creates it's own scope for the variables so they aren't global any more), 
	or create a JS object with a unique name - this is what we call making a custom namespace; a place to put your variables for later use. 
	*/
	
	var rand, randArray = [];

	// set up event handler here in the JS, not inline in the HTML. Again, research "Separation of Concerns" principle...
	
	$("#beanbutton").on("click", genBean);

	for(var r = 0; r < 5; r++) {
		var unique = false;
		var tempRand;
		while(!unique) {
			unique = true;
			tempRand = (Math.random() * (11 - 1) + 1) |0;
			for(var i = 0; i < 5; i++) {
				if(randArray[i] == tempRand) {
					unique = false;			
				}
			}
		}
		randArray.push(tempRand);
	}
	
	function genBean() {
		var beantype, beanimg, bgcolor, notUnique = true, originalbgcolor = $("#background").css("background-color");
		
		while(notUnique) {
			rand = (Math.random() * (11 - 1) + 1) |0;
			notUnique = false;
			for(var r = 0; r < randArray.length; r++) {
				if(rand == randArray[r]) {
					notUnique = true;
					break;
				}
			}
		}
		
		//switch statements are better to use when if else statements get longer than about 3 cases:
		
		switch (rand){
			case 1:
				beantype = "Berry Blue/Toothpaste";
				beanimg = "images/berryblue.png";
				bgcolor = "#3aaaea";
				break;
			case 2:
				beantype = "Buttered Popcorn/Rotten Egg";
				beanimg = "images/butteredpopcorn.png";
				bgcolor = "#f2cd5a";
				break;
			case 3:
				beantype = "Caramel Corn/Moldy Cheese";
				beanimg = "images/caramelcorn.png";
				bgcolor = "#f2c94b";
				break;
			case 4:
				beantype = "Chocolate Pudding/Canned Dog Food";
				beanimg = "images/chocolatepudding.png";
				bgcolor = "#45252a";
				break;
			case 5:
				beantype = "Coconut/Baby Wipes";
				beanimg = "images/coconut.png";
				bgcolor = "#efebf8";
				break;
			case 6:
				beantype = "Juicy Pear/Booger";
				beanimg = "images/juicypear.png";
				bgcolor = "#c4c75c";
				break;
			case 7:
				beantype = "Licorice/Skunk Spray";
				beanimg = "images/licorice.png";
				bgcolor = "#252a2e";
				break;
			case 8:
				beantype = "Lime/Lawn Clippings";
				beanimg = "images/lime.png";
				bgcolor = "#c6dc78";
				break;
			case 9:
				beantype = "Peach/Vomit";
				beanimg = "images/peach.png";
				bgcolor = "#e57536";
				break;
			case 10:
				beantype = "Tutti Fruitti/Stinky Socks";
				beanimg = "images/tuttifruitti.png";
				bgcolor = "#ad4647";
				break;
			default:
				console.log("This will be executed if case equals anything other than what is specified in the above cases...");
		}

		randArray.push(rand);
		randArray.shift();
		
		$( "#background" ).after( "<div id=\"background2\" class=\"animated zoomOut\" style=\"background: " + originalbgcolor + "; background-repeat: no-repeat; background-attachment: fixed;\"></div>" ).css("background-color", bgcolor);
		
		$('#background2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('#background2').remove();
		});
		
		$('#beanimg').addClass('animated zoomOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		
		/*	jQuery makes method chaining easy. Method chaining is so that you can just select the element once, instead of over and over.
			Insteady of this:
		
			$('#beanimg').removeClass('animated zoomOutUp'); 
			$('#beanimg').addClass('animated bounceIn'); 
			$("#beanimg").attr("src", beanimg);
			
		Do this:
		*/
			$('#beanimg').removeClass('animated zoomOutUp').addClass('animated bounceIn').attr("src", beanimg); 
		
		});
		
		$('#beantext').addClass('animated zoomOutUp');
		
		$('#beantext').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$('#beantext').removeClass('animated zoomOutUp').addClass('animated bounceIn').html(beantype); 
		});
		$("#favicon").attr("href",beanimg);

		if(rand == 3 || rand == 2 || rand == 5 || rand == 8 || rand == 6) {
		//	jQuery makes selectors really easy...you dont need document.getElementById anymore if you have the jQuery library included. 
		//	Instead the syntax for selecting HTML elements to perform jQuery methods is simply this: $("#your-element's-id").yourmethod();
			$("#beantext").css("color", "#212121");
			$("#beanbutton").css({"color":"#212121","border-color":"#212121"});
		} else {
			$("#beantext").css("color", "#fff");
			$("#beanbutton").css({"color":"#fff","border-color":"#fff"});
		}
	}
	
	function isArrayFull( arr ){
		for ( var i = 0, l = arr.length; i < l; i++ ){
		
			if ( 'undefined' == typeof arr[i] || null === arr[i] ){
			  return false;
			}
		}
		return true;
	}
});
