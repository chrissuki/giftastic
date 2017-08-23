var subject = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret" ,"turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];

function clearDisplay() {
	$("#pics").empty();
	$("#rate").empty();
}

function makeButtons(){
	$("#animal").empty();
	for (var i = 0; i < subject.length ; i ++){
		console.log(subject.length + "array length");
		var animal = subject[i];
		var animalButton = $("<button>");
		animalButton.addClass("animalName");
		animalButton.attr("data-name",animal);
		animalButton.text(animal);
		animalButton.css("background-color","teal").css("color","white").css("padding","10px");
		$("#animal").append(animalButton);
	}	
}

$(document).ready(function() {
	console.log(this);
	clearDisplay();
	makeButtons();

	$("#animal").on("click", ".animalName", function(event) {
		console.log(this);
  		//clear previous display
  		clearDisplay();	
  		//diplay data-name
  		var animal = $(this).attr("data-name");
  		console.log(animal);
  		console.log(animal.indexOf(" "));
		// if there is a space in the words adds a + into the string
  			if (animal.indexOf(" ") != -1){
  				console.log("two words");
  				var x = animal.split(" ");
  				animal = x[0] + "+" + x[1];
  				console.log("new animal" + animal);
  				}
  		// put animal into query line
  		var queryURL = "http://api.giphy.com/v1/gifs/search?q="+animal+"&api_key=298c2ce4eb8a4d0e96ef87c28981bae3&limit=10";
  		console.log(queryURL);
  		$.ajax({
           url: queryURL,
           method: "GET"
         })
  		.done(function(response) {
  			
         	console.log(response);
         	for (var i = 0; i < 10; i ++){
         		//rating
         		var newdiv = $("<div class = 'picBox'>");
         		newdiv.attr("id","picBox");
         		//$("#picBox").show();
         		//newdiv.append("#animal");
         		var rating = $("<p id = 'rate'>").text("Rated - " + response.data[i].rating);          		
         		//make an image
         		var gifBox = $("<img class = 'picture"+i+"''>");
         		gifBox.attr("id","pic"+i);
            gifBox.attr("data",i);
         		gifBox.attr("src",response.data[i].images.fixed_height_still.url);
            gifBox.attr("data-animate",response.data[i].images.fixed_height.url);
            gifBox.attr("data-still", response.data[i].images.fixed_height_still.url);
            gifBox.attr("data-state","still");
         		//console.log(response.data[i].images.fixed_height.url);
         		//console.log(response.data[i].rating);
         		newdiv.append(rating);
         		newdiv.append(gifBox);
            $("#pics").append(newdiv);
         	}// end of i loop
         });// end done function
		});// on click function

	$("#addAnimal").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var animal = $("#animal-input").val();

        // Adding movie from the textbox to our array
        console.log(animal + "= animal");
		    var animalButton = $("<button>");
		    animalButton.addClass("animalName");
		    animalButton.attr("data-name",animal);
		    animalButton.text(animal);
		    animalButton.css("background-color","teal").css("color","white").css("padding","10px");
		    subject.push(animal);
		    console.log(subject);
		    $("#animal").append(animalButton);
		    makeButtons();
 	}); // end ok on click addanimal


	 $("#pics").on("click", ".picture0", function (event){	
      
      if ($(".picture0").attr("data-state") === "still"){
        console.log("test data animate -- " + $(".picture0").attr("data-animate"));
        var newSource = $(".picture0").attr("data-animate");
        $(".picture0").attr("src",newSource);
        $(".picture0").attr("data-state","move");
      }

      else {
        var newSource = $(".picture0").attr("data-still");
        $(".picture0").attr("src",newSource);
        $(".picture0").attr("data-state","still");
      }
    });
  
    $("#pics").on("click", ".picture1", function (event){ 
      
      if ($(".picture1").attr("data-state") === "still"){
        console.log("test data animate -- " + $(".picture1").attr("data-animate"));
        var newSource = $(".picture1").attr("data-animate");
        $(".picture1").attr("src",newSource);
        $(".picture1").attr("data-state","move");
      }

      else {
        var newSource = $(".picture1").attr("data-still");
        $(".picture1").attr("src",newSource);
        $(".picture1").attr("data-state","still");
      }
    });

    $("#pics").on("click", ".picture2", function (event){ 
      
      if ($(".picture2").attr("data-state") === "still"){
        console.log("test data animate -- " + $(".picture2").attr("data-animate"));
        var newSource = $(".picture2").attr("data-animate");
        $(".picture2").attr("src",newSource);
        $(".picture2").attr("data-state","move");
      }

      else {
        var newSource = $(".picture2").attr("data-still");
        $(".picture2").attr("src",newSource);
        $(".picture2").attr("data-state","still");
      }
    });

    $("#pics").on("click", ".picture3", function (event){ 
      
      if ($(".picture3").attr("data-state") === "still"){
        console.log("test data animate -- " + $(".picture3").attr("data-animate"));
        var newSource = $(".picture3").attr("data-animate");
        $(".picture3").attr("src",newSource);
        $(".picture3").attr("data-state","move");
      }

      else {
        var newSource = $(".picture3").attr("data-still");
        $(".picture3").attr("src",newSource);
        $(".picture3").attr("data-state","still");
      }
    });

    $("#pics").on("click", ".picture4", function (event){ 
      
      if ($(".picture4").attr("data-state") === "still"){
        console.log("test data animate -- " + $(".picture4").attr("data-animate"));
        var newSource = $(".picture4").attr("data-animate");
        $(".picture4").attr("src",newSource);
        $(".picture4").attr("data-state","move");
      }

      else {
        var newSource = $(".picture4").attr("data-still");
        $(".picture4").attr("src",newSource);
        $(".picture4").attr("data-state","still");
      }
    });

    $("#pics").on("click", ".picture5", function (event){ 
      
      if ($(".picture5").attr("data-state") === "still"){
        console.log("test data animate -- " + $(".picture5").attr("data-animate"));
        var newSource = $(".picture5").attr("data-animate");
        $(".picture5").attr("src",newSource);
        $(".picture5").attr("data-state","move");
      }

      else {
        var newSource = $(".picture5").attr("data-still");
        $(".picture5").attr("src",newSource);
        $(".picture5").attr("data-state","still");
      }
    });
    $("#pics").on("click", ".picture6", function (event){ 
      
      if ($(".picture6").attr("data-state") === "still"){
        console.log("test data animate -- " + $(".picture6").attr("data-animate"));
        var newSource = $(".picture6").attr("data-animate");
        $(".picture6").attr("src",newSource);
        $(".picture6").attr("data-state","move");
      }

      else {
        var newSource = $(".picture6").attr("data-still");
        $(".picture6").attr("src",newSource);
        $(".picture6").attr("data-state","still");
      }
    });
    $("#pics").on("click", ".picture7", function (event){ 
      
      if ($(".picture7").attr("data-state") === "still"){
        console.log("test data animate -- " + $(".picture7").attr("data-animate"));
        var newSource = $(".picture0").attr("data-animate");
        $(".picture7").attr("src",newSource);
        $(".picture7").attr("data-state","move");
      }

      else {
        var newSource = $(".picture7").attr("data-still");
        $(".picture7").attr("src",newSource);
        $(".picture7").attr("data-state","still");
      }
    });
    $("#pics").on("click", ".picture8", function (event){ 
      
      if ($(".picture8").attr("data-state") === "still"){
        console.log("test data animate -- " + $(".picture8").attr("data-animate"));
        var newSource = $(".picture8").attr("data-animate");
        $(".picture8").attr("src",newSource);
        $(".picture8").attr("data-state","move");
      }

      else {
        var newSource = $(".picture8").attr("data-still");
        $(".picture8").attr("src",newSource);
        $(".picture8").attr("data-state","still");
      }
    });
    $("#pics").on("click", ".picture9", function (event){ 
      
      if ($(".picture9").attr("data-state") === "still"){
        console.log("test data animate -- " + $(".picture9").attr("data-animate"));
        var newSource = $(".picture9").attr("data-animate");
        $(".picture9").attr("src",newSource);
        $(".picture9").attr("data-state","move");
      }

      else {
        var newSource = $(".picture9").attr("data-still");
        $(".picture9").attr("src",newSource);
        $(".picture9").attr("data-state","still");
      }
    });

	});// end of document ready


