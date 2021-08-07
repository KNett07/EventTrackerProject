window.addEventListener('load', function(e){
	
	console.log('script loaded');
	
	// init();
loadRuffLife();	
});

  
//   function init() {
// 	document.dogForm.lookup.addEventListener('click', function(event) {
// 	  event.preventDefault();
// 	  var dogId = document.dogForm.dogId.value;
// 	  if (!isNaN(dogId) && dogId > 0) {
// 		getDog(dogId);
// 	  }
// 	});
  
//   document.newDogForm.addEventListener('click', function(e){
	  
// 	  e.preventDefault();
// 	  let fm = document.newDogForm;
// 	  let newDog = {
// 		  name: fm.name.value,
// 		  favToy: fm.favToy.value,
// 		  favTreat: fm.favTreat.value,
// 		  favPlace: fm.favPlace.value,
// 		  vices: fm.vices.value
		  
		  
// 	  };
// 	  addDog(newDog);
	  
	  
//   })
//   }




function loadRuffLife(){

	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/dogs');

	xhr.onreadystatechange = function(){

		if(xhr.readyState === 4){
			// console.log('passed ready state');
			if(xhr.status < 400){
				let dogs = JSON.parse(xhr.responseText);
				console.log(dogs);
				displayDogs(dogs);
			} else {
				console.log("xhr status is broken");
			}
		} else{
			// console.log('first if statement broken')
		}


	};
xhr.send();

}

function displayDogs(dogs){

	let table = document.getElementById('ruffLifeTable');
	console.log(dogs);
	console.log(table);
	for (const dog of dogs) {
		console.log(dog);
		console.log(dog.name);

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
// SINGLE RETRIEVE

function getDog(dogName) {

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/dog/' + dogName);
	
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
		if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
		  var dog = JSON.parse(xhr.responseText);
		
		  console.log(dog);
			displayOneDog(dog);
		}
		else {
		  console.log("Dog not Found.");
		  console.error(xhr.status + ': ' + xhr.responseText);
		}
	  }
	};
	xhr.send();
	
}

function displayOneDog(dog){

	var dogDiv = document.getElementById('dogData');
  dogDiv.textContent = '';

let h1 = document.createElement('h1');
h1.textContent = dog.name;

dataDiv.appendChild(h1);

let bq = document.createElement('blockquote');
bq.textContent = dog.favToy;
dataDiv.appendChild(bq)

let ul = document.createElement('ul');
let li = document.createElement('li');
li.textContent = dog.favTreat;
ul.appendChild(li);
dogDiv.appendChild(li)
 li = document.createElement('li');
li.textContent = dog.favPlace;
ul.appendChild(li);
dogDiv.appendChild(li);
 li = document.createElement('li');
li.textContent = dog.vices;
ul.appendChild(li);
dogDiv.appendChild(li);

	
// CREATE
function addDog(newDog){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/dog');
	
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
		if ( xhr.status == 200 ) { // Ok or Created
		  var newDog = JSON.parse(xhr.responseText);
		  console.log(newDog);
	displayDogs(newDog);
		}
		else {
		  console.log("Dog not created.");
		  console.error(xhr.status + ': ' + xhr.responseText);
		}
	  }
	};
	
	let dogJson = JSON.stringify(newDog);
	xhr.send(dogJson);
			
			
		}








// function updateDog(){
// 	var xhr = new XMLHttpRequest();
// 	xhr.open('PUT', 'api/dog/' + dogId);
	
// 	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	
// 	xhr.onreadystatechange = function() {
// 	  if (xhr.readyState === 4 ) {
// 		if ( xhr.status == 200 ) { // Ok or Created
// 		  var updateDog = JSON.parse(xhr.responseText);
// 		  console.log(updateDog);
// 	displayDogs(updateDog);
// 		}
// 		else {
// 		  console.log("Dog not updated.");
// 		  console.error(xhr.status + ': ' + xhr.responseText);
// 		}
// 	  }
// 	};
	
// 	let dogJson = JSON.stringify(updateDog);
// 	xhr.send(dogJson);
	
			
// 		}
		}
