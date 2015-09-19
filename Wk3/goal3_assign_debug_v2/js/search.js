/*
 Name: Keri Ritenour
 Date: 9/18/2015
 Assignment: Goal3: Assignment: Debug
 */

// Create privatized scope using a self-executing function


function() {//creates the function
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),  //creates a variable requires a semi_colon
		searchInput = document.forms[0].search,          //creates a variable requires a semi-colon
		currentSearch = '';                              //creates a variable

	// Validates search query
	var validate = function (query) {                   //creates a variable and compares it to a function named query

		// Trim whitespace from start and end of search query
		while (query.charAt(0) === " ") {                 //if the first entry in the string is a space
			query = query.substring(1, query.length);  //remove it and go to the next entry
		}
		while (query.charAt(query.length - 1) === " ") {    //if the last entry in the string is a space
			query = query.substring(0, query.length - 1); //remove it and go to the next entry
			//remove semi-colon

			// Check search length, must have 3 characters
		}if (query.length < 3) {                      //if the search length has less than three characters
			alert("Your search query is too small, try again."); //alert the user - need to add another quotation to the end of alert

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();                //removes the focus from the search box upon submitting
			return;
		}               //close

		search(query);                        //calls the function to execute the search
	};                //close

// Finds search matches
	var search = function (query) {             //creates a variable that equals a function

		// split the user's search query string into an array
		var queryArray = query.split(" ");    //creates a variable that equals the query and joins them

		// array to store matched results from database.js
		var results = [];                 //creates an array to store the results

		// loop through each index of db array
		for (var i = 0, j = db.length; i < j; i++) {     //creates a for loop that checks to see if the first character in the string is j and
			//if so, increments it to the next character

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			//var db;
			var dbTitleEnd = db[i].indexOf('|');    //creates a variable and splits the string into pieces
			var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);  //creates a variable, convert it to lowercase and start at index 0 and
			// return the entire string, change to dbItem

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
		}for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {   //creates a for loop that checks to see if the first two characters are jj and
			//increments to the next character if jj is less than 0
			var qitem = queryArray[ii].toLowerCase();  //creates a variable that equals an array and converts it to lowercase

			// is the keyword anywhere in the video title?
			// If a match is found, push full db[i] into results array
			var compare = dbitem.indexOf(qitem);   //creates a variable that is equal to the index of the item, change to dbItem
		}if (compare !== -1) {       //creates an if statement that checks to if the compare variable does not equal less than 1
				results.push(db[i]); //stores the results at the end of the array
			}  //close
		};//close
	//close

	results.sort(); //stores the results and sorts them

	// Check that matches were found, and run output functions
	if (results.length = 0) {  //if the length of the results are equal to zero
		noMatch();  //run no matches
	} else {          //or if the length of the results are greater than zero
		showMatches(results); //run showMatches
	}       //close

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function () {     //creates a variable that runs a function if noMatch is true
		var html = '' +             // creates a variable for displaying
				'<p>No Results found.</p>' +   //this text
				'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'   //and this text
			;
		resultsDIV.innerHTML = html;   //results are connected to the html
	};

	// Put matches into page as paragraphs with anchors
	var showMatches = function (results) {     //creates a variable that runs a function if showMatches is true and sets it equal
		//to a function

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',    //creates a variable on the webpage that display the results to the user
			title,                      //displays that title
			url                         //displays the url
			;         //closing

		// loop through all the results search() function
		for (var i = 0, j = results.length; i < j; i++) {    //creates a for loop that checks for the letter j and checks to see
			//if the length is less than j and increments it once if statement is true

			// title of video ends with pipe
			// pull the title's string using index numbers
			var titleEnd = results[i].indexOf('|');   //need to create a variable and it splits the string into pieces
			title = results[i].substring(0, titleEnd); //need to create a variable that converts it to lowercase and start at index 0 and return the entire string

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|') + 1, results[i].length); //displays the results with the url is equal to the results and and displays
			//it in pieces

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';  //links the url
		}   //close
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.    displays the results in the html
	};

	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function () {  //takes the input from the form and upon submitting executes the function
		var query = searchInput.value;      //creates a variable sets it equal to the the value that is input into the form
		validate(query);   //the query is validated

		// return false is needed for most events - this will be reviewed in upcoming course material
		// THE LINE DIRECTLY BELOW IS CORRECT
		return false;  //validate that the form is not empty
		//close

}();   //remove all parentheses