window.addEventListener('load', function(e){
	
	console.log('script loaded');
	
	// init();
loadRuffLife();	
});

  
//   function init() {
	  
	
// 	document.dogForm.lookup.addEventListener('click', function(event) {
// 		event.preventDefault();
// 		loadRuffLife();
// 	  });

// 		document.newDogForm.addDog.addEventListener('click', function(e){
		
// 			e.preventDefault();
// 			let fm = document.newDogForm;
// 			let newDog = {
// 				name: fm.name.value,
// 				favToy: fm.favToy.value,
// 				favTreat: fm.favTreat.value,
// 				favPlace: fm.favPlace.value,
// 				vices: fm.vices.value
				
				
// 			};
// 			addDog(newDog);
	  
// 	  });

// }

function loadRuffLife(){

	document.dogForm.lookup.addEventListener('click', function(event) {
				event.preventDefault();
				var dogName = document.dogForm.dogName.value;
		if (!isNaN(dogName)) {
		  getDog(dogName);
		}
			  });
		
				document.newDogForm.addDog.addEventListener('click', function(e){
				
					e.preventDefault();
					let fm = document.newDogForm;
					let newDog = {
						name: fm.name.value,
						favToy: fm.favToy.value,
						favTreat: fm.favTreat.value,
						favPlace: fm.favPlace.value,
						vices: fm.vices.value
						
						
					};
					addDog(newDog);
			  
			  });
		
  

	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/dogs');

	xhr.onreadystatechange = function(){

		if(xhr.readyState === 4){
			// console.log('passed ready state');
			if(xhr.status < 400){
				let dogs = JSON.parse(xhr.responseText);
				console.log(dogs);
				displayDogs(dogs);
			} 
		} 


	};
xhr.send();

}


function getDog(dogName) {

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/dog/' + dogName);
		
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
		if ( xhr.status == 200) { // Ok or Created
		  var newDog = JSON.parse(xhr.responseText);
		
			displayOneDog(newDog);
		}
		else {
			displayError("Dog not Found");
		  
		}
	  }
	};
	// xhr.send();
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	let dogJson = JSON.stringify(newDog);
	xhr.send(dogJson);
	
	
}




function displayError(msg){
	var dogDiv = document.getElementById('dogData');
	dogDiv.textContent = msg;
}

function displayOneDog(newDog){

	var dogDiv = document.getElementById('dogData');
  dogDiv.textContent = '';

let name = document.createElement('h1');
name.textContent = newDog.name;
dogDiv.appendChild(name);

let ul = document.createElement('ul');

let favToy = document.createElement('li');
favToy.textContent = newDog.favToy;
ul.appendChild(favToy);

let favTreat = document.createElement('li');
favTreat.textContent = newDog.favTreat;
ul.appendChild(favTreat);

let favPlace = document.createElement('li');
favPlace.textContent = newDog.favPlace;
ul.appendChild(favPlace);

 let vices = document.createElement('li');
 vices.textContent = newDog.vices;
ul.appendChild(vices);
dogDiv.appendChild(ul);


}




function displayDogs(dogs){

	let table = document.getElementById('ruffLifeTable');
	
	for (const dog of dogs) {

		let tr = document.createElement('tr');

		let name = document.createElement('td');

		name.textContent = dog.name;
		tr.appendChild(name);
		
		let favToy = document.createElement('td');

		favToy.textContent = dog.favToy;
		tr.appendChild(favToy);

		let favTreat = document.createElement('td');

		favTreat.textContent = dog.favTreat;
		tr.appendChild(favTreat);
		

		let favPlace = document.createElement('td');

		favPlace.textContent = dog.favPlace;
		tr.appendChild(favPlace);
		
		let vices = document.createElement('td');

		vices.textContent = dog.vices;
		tr.appendChild(vices);
		
		tr.addEventListener('click', function(e){
			e.preventDefault();
			// displayOneDog(dog);
		})


		table.appendChild(tr);
		

	}
}


	
// CREATE
function addDog(newDog){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/dog');
		
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
		if ( xhr.status == 200 ) { // Ok or Created
		  var newDog = JSON.parse(xhr.responseText);
		  	displayOneDog(newDog);
		}
		else {
		  displayError("Dog not created." + xhr.status);
		}
	  }
	};
		xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	let dogJson = JSON.stringify(newDog);
	xhr.send(dogJson);
			
		}




function updateDog(){
	var xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/dog/' + dogId);
	
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
		if ( xhr.status == 200 ) { // Ok or Created
		  var updateDog = JSON.parse(xhr.responseText);
		  console.log(updateDog);
	displayDogs(updateDog);
		}
		else {
		  console.log("Dog not updated.");
		  console.error(xhr.status + ': ' + xhr.responseText);
		}
	  }
	};
	
	let dogJson = JSON.stringify(updateDog);
	xhr.send(dogJson);
	
			
		}
		



		function deleteDogData(dog) {
			let xhr = new XMLHttpRequest();
			xhr.open('DELETE', 'api/dog/' + dog);
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status < 400) {
						console.log('Successfully deleted dog information.');
					} else {
						console.log('Error deleting doggo info: ' + xhr.status);
					}
				}
			};
			xhr.setRequestHeader("Content-type", "application/json");
			let dogJson = JSON.stringify(dog);
			loadTracker();
			xhr.send(dogJson);
			loadTracker();
		}
