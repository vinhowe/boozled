var rand;
var randArray = new Array();
window.onload = function() {
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
}
function genBean() {
	var beantype;
	var beanimg;
	var originalbgcolor = document.getElementById("background").style.backgroundColor;
	var bgcolor;
	var notUnique = true;
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
		if (rand == 1) {
			beantype = "Berry Blue/Toothpaste";
			beanimg = "images/berryblue.png";
		   	bgcolor = "#3aaaea";
		} else if (rand == 2) {
			beantype = "Buttered Popcorn/Rotten Egg";
			beanimg = "images/butteredpopcorn.png";
			bgcolor = "#f2cd5a";
		} else if (rand == 3) {
			beantype = "Caramel Corn/Moldy Cheese";
			beanimg = "images/caramelcorn.png";
			bgcolor = "#f2c94b";
		} else if (rand == 4) {
			beantype = "Chocolate Pudding/Canned Dog Food";
			beanimg = "images/chocolatepudding.png";
			bgcolor = "#45252a";
		} else if (rand == 5) {
			beantype = "Coconut/Baby Wipes";
			beanimg = "images/coconut.png";
			bgcolor = "#efebf8";
		} else if (rand == 6) {
			beantype = "Juicy Pear/Booger";
			beanimg = "images/juicypear.png";
			bgcolor = "#c4c75c";
		} else if (rand == 7) {
			beantype = "Licorice/Skunk Spray";
			beanimg = "images/licorice.png";
			bgcolor = "#252a2e";
		} else if (rand == 8) {
			beantype = "Lime/Lawn Clippings";
			beanimg = "images/lime.png";
			bgcolor = "#c6dc78";
		} else if (rand == 9) {
			beantype = "Peach/Vomit";
			beanimg = "images/peach.png";
			bgcolor = "#e57536";
		} else if (rand == 10) {
			beantype = "Tutti Fruitti/Stinky Socks";
			beanimg = "images/tuttifruitti.png";
			bgcolor = "#ad4647";
		}
		randArray.push(rand);
		randArray.shift();
		$( "#background" ).after( "<div id=\"background2\" class=\"animated zoomOut\" style=\"background: " + originalbgcolor + "; background-repeat: no-repeat; background-attachment: fixed;\"></div>" );
		document.getElementById("background").style.backgroundColor = bgcolor;
		$('#background2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {$('#background2').remove();});
		$('#beanimg').addClass('animated zoomOutUp');
		$('#beanimg').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {$('#beanimg').removeClass('animated zoomOutUp'); $('#beanimg').addClass('animated bounceIn'); $("#beanimg").attr("src", beanimg);});
		$('#beantext').addClass('animated zoomOutUp');
		$('#beantext').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {$('#beantext').removeClass('animated zoomOutUp'); $('#beantext').addClass('animated bounceIn'); document.getElementById("beantext").innerHTML = beantype;});
		$("#favicon").attr("href",beanimg);
	if(rand == 5) {
		document.getElementById("beantext").style.color = "#212121";
		document.getElementById("beanbutton").style.color = "#212121";
		document.getElementById("beanbutton").style.borderColor = "#212121";
	} else {
		document.getElementById("beantext").style.color = "#fff";
		document.getElementById("beanbutton").style.color = "#fff";
		document.getElementById("beanbutton").style.borderColor = "#fff";
	}
}

function isArrayFull( arr )
{
  for ( var i = 0, l = arr.length; i < l; i++ )
  {
    if ( 'undefined' == typeof arr[i] || null === arr[i] )
    {
      return false;
    }
  }
  return true;
}
