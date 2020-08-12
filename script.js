// Declaring empty arrays
var filmArr = [];
var camArr = [];
var lensArr = [];
var updatesArr = [];

// Populate home screen
window.onload = function() {
  displayUpdates();
  var newArr = newItems(camArr, lensArr, filmArr);
  populateItems(newArr);
  document.querySelector('#heading').innerHTML = 'New in stock: ' + newArr.length + ' items';
};

// Event listeners
var home = document.getElementById('home');
home.addEventListener('click', function() {
  displayUpdates();
  var newArr = newItems(camArr, lensArr, filmArr);
  populateItems(newArr);
  document.querySelector('#heading').innerHTML = 'New in stock: ' + newArr.length + ' items';
});

var cameras = document.getElementById('cameras');
cameras.addEventListener('click', function() {
  clearUpdates();
  populateItems(camArr);
  document.querySelector('#heading').innerHTML = camArr.length + ' products available';
});

var lenses = document.getElementById('lenses');
lenses.addEventListener('click', function() {
  populateItems(lensArr);
  document.querySelector('#heading').innerHTML = lensArr.length + ' products available';
});

var film = document.getElementById('film');
film.addEventListener('click', function() {
  populateItems(filmArr);
  document.querySelector('#heading').innerHTML = filmArr.length + ' products available';
});

var cart = document.getElementById('cart');
cart.addEventListener('click', function() {
  displayCart();
});





// Arrays of products
camArr = [
  {
    caption: 'Canon EOS',
    alt: 'Canon',
    url: './img/cam01.jpg',
    text: 'Canon EOS Camera',
    description: 'Excellent condition. Digital.',
    price: '99.99',
    newItem: 'Y',
    id: '1901'
  },
  {
    caption: 'Elner Camera',
    alt: 'Elner',
    url: './img/cam02.jpg',
    text: 'Elner Camera',
    description: 'Good condition. Functional.',
    price: '99.99',
    newItem: 'Y',
    id: '1902'
  },
  {
    caption: 'Canon AE-1',
    alt: 'Canon',
    url: './img/cam03.jpg',
    text: 'Canon AE-1 Camera',
    description: 'Excellent condition. Takes 35mm film.',
    price: '99.99',
    newItem: 'N',
    id: '1903'
  },
  {
    caption: 'Revue Zoom P&S',
    alt: 'Revue',
    url: './img/cam04.jpg',
    text: 'Revue Zoom P&S Camera',
    description: 'Poor condition. Functional. Takes 35mm film.',
    price: '99.99',
    newItem: 'N',
    id: '1904'
  },
  {
    caption: 'Polaroid One Step 2',
    alt: 'Polaroid',
    url: './img/cam05.jpg',
    text: 'Polaroid One Step 2 Camera',
    description: 'Excellent condition. Takes i-type and 600 film.',
    price: '99.99',
    newItem: 'N',
    id: '1905'
  },
  {
    caption: 'Reflekta II',
    alt: 'Reflekat',
    url: './img/cam06.jpg',
    text: 'Reflekta II Camera',
    description: 'Excellent condition. Takes 120 film. 6x6 frame size.',
    price: '99.99',
    newItem: 'N',
    id: '1906'
  },
  {
    caption: 'Kodak Retina',
    alt: 'Kodak',
    url: './img/cam07.jpg',
    text: 'Kodak Retina Camera',
    description: 'Good condition. Takes 35mm film.',
    price: '99.99',
    newItem: 'N',
    id: '1907'
  },
  {
    caption: 'Pentax MV-1',
    alt: 'Pentax',
    url: './img/cam08.jpg',
    text: 'Pentax MV-1',
    description: 'Excellent condition. Takes 35mm film.',
    price: '99.99',
    newItem: 'N',
    id: '1908'
  }
];

lensArr = [
  {
    caption: 'Minolta Rokkor',
    alt: 'Minolta',
    url: './img/lens01.jpg',
    text: 'Minolta Lens',
    description: 'Rokkor f1.4 lens. Excellent condition.',
    price: '59.99',
    newItem: 'Y',
    id: '1801'
  },
  {
    caption: 'Nikon Nikkor',
    alt: 'Nikon',
    url: './img/lens02.jpg',
    text: 'Nikon Lens',
    description: 'Nikon 50mm f1.8. Excellent condition.',
    price: '59.99',
    newItem: 'Y',
    id: '1802'
  },
  {
    caption: 'Canon',
    alt: 'Canon',
    url: './img/lens03.jpg',
    text: 'Canon Lens',
    description: 'Canon 24-70mm f4. Good condition.',
    price: '59.99',
    newItem: 'N',
    id: '1803'
  },
  {
    caption: 'Leitz Wetzlar',
    alt: 'Leitz',
    url: './img/lens04.jpg',
    text: 'Leitz Lens',
    description: 'Wetzlar 28mm f2.8. Good condition.',
    price: '59.99',
    newItem: 'N',
    id: '1804'
  },
  {
    caption: 'Caspeco',
    alt: 'Caspeco',
    url: './img/lens05.jpg',
    text: 'Caspeco Lens',
    description: '28mm f2.8. Good condition.',
    price: '59.99',
    newItem: 'N',
    id: '1805'
  },
  {
    caption: 'Nikon Nikkor',
    alt: 'Nikon',
    url: './img/lens06.jpg',
    text: 'Nikon Lens',
    description: 'Nikkor DX 10-20mm. Excellent condition.',
    price: '59.99',
    newItem: 'N',
    id: '1806'
  },
  {
    caption: 'Canon',
    alt: 'Canon',
    url: './img/lens07.jpg',
    text: 'Canon Lens',
    description: 'Canon 135mm. Excellent condition.',
    price: '59.99',
    newItem: 'N',
    id: '1807'
  }
];

filmArr = [
  {
    caption: 'Kodak Gold',
    alt: 'Kodak',
    url: './img/film01.jpg',
    text: 'Kodak Gold',
    description: 'Colour negative. 400 speed.',
    price: '9.99',
    newItem: 'Y',
    id: '1701'
  },
  {
    caption: 'Ilford HP5 plus',
    alt: 'Ilford',
    url: './img/film02.jpg',
    text: 'Ilford HP5 Plus',
    description: 'Black and White. 400 speed.',
    price: '9.99',
    newItem: 'Y',
    id: '1702'
  },
  {
    caption: 'Kodak Portra',
    alt: 'Kodak',
    url: './img/film03.jpg',
    text: 'Kodak Portra',
    description: 'Colour negative. 400 speed.',
    price: '9.99',
    newItem: 'N',
    id: '1703'
  },
  {
    caption: 'Ilford FP4 Plus',
    alt: 'Ilford',
    url: './img/film04.jpg',
    text: 'Ilford FP4 Plus',
    description: 'Black and White. 125 speed.',
    price: '9.99',
    newItem: 'N',
    id: '1704'
  }
];

updatesArr = [
  {
    title: '6 Items added',
    content: "We've added six new items to the store.",
    date: 'August 7, 2020'
  },
  {
    title: 'Welcome to Captured Essence',
    content: 'This website was built for Web222 at Seneca College.',
    date: 'August 6, 2020'
  }
];

// Methods

// Creates a grid of items from an array that has been passed into it
// needs to be restructed for readability
function populateItems(arr) {
  document.querySelector('#product').innerHTML = '';
  var imgloc = document.querySelector('#product');
  imgloc.class = "generatedProducts";
  for (var i = 0; i < arr.length; i++) {
    // Add containing div
    var newdiv = document.createElement('div');
    newdiv.id = 'img' + i;

    // add figure and img
    var figure = document.createElement('figure');
    var testimg = document.createElement('img');
    testimg.src = arr[i].url;
    testimg.alt = arr[i].alt;
    var capt = document.createElement('figcaption');
    capt.figcaption = arr[i].caption;
    figure.appendChild(testimg);
    figure.appendChild(capt);
    newdiv.appendChild(figure);

    // add product name
    var namespan = document.createElement('span');
    var name = document.createTextNode(arr[i].text);
    namespan.id = 'itemName';
    namespan.appendChild(name);

    // add description
    var desc = document.createTextNode(arr[i].description);
    var adddescspan = document.createElement('span');
    adddescspan.id = 'itemDescription';
    adddescspan.appendChild(desc);

    // add price
    var price = document.createTextNode(arr[i].price);
    var addpricespan = document.createElement('span');
    addpricespan.id = 'itemPrice';
    addpricespan.appendChild(price);

    // add cart button
    var add = document.createTextNode('Add to cart');
    var addlink = document.createElement('a');
    var addspan = document.createElement('span');
    var adddiv = document.createElement('div');
    addlink.href = '#';
    addlink.appendChild(addspan);
    addspan.appendChild(add);
    addspan.id = 'addspan' + arr[i].id;
    addlink.id = 'addspan' + arr[i].id;
    adddiv.id = 'addToCart';
    adddiv.appendChild(addlink);

    // var declarations for br tags
    var space = document.createElement('br');
    var space2 = document.createElement('br');
    var space3 = document.createElement('br');

    // add elements to containing div
    newdiv.appendChild(namespan);
    newdiv.appendChild(space);
    newdiv.appendChild(adddescspan);
    newdiv.appendChild(space2);
    newdiv.appendChild(addpricespan);
    newdiv.appendChild(space3);
    newdiv.appendChild(adddiv);

    // add containing div to the product div
    imgloc.appendChild(newdiv);
  }
}

// Checks all the item arrays for objects which have a new attribute set to Y
// and then builds a new array of them to display on the home page
function newItems(arr1, arr2, arr3) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i].newItem === 'Y') {
      newArr.push(arr1[i]);
    }
  }
  for (var j = 0; j < arr2.length; j++) {
    if (arr2[j].newItem === 'Y') {
      newArr.push(arr2[j]);
    }
  }
  for (var k = 0; k < arr3.length; k++) {
    if (arr3[k].newItem === 'Y') {
      newArr.push(arr3[k]);
    }
  }
  return newArr;
}

// Since the cart function isn't implemented, this just serves to empty
// the page.
function displayCart() {
  document.querySelector('#product').innerHTML = '';
  document.querySelector('#heading').innerHTML = '';
}

// Fills the update div by reading a title, description, and date from an array
// This could be read from a file instead, if the client wanted to build a separate
// web app to dynamically update this section.
function displayUpdates() {
  var updatemain = document.getElementById('updates');
  document.querySelector('#updates').innerHTML = '';

  // Wrap all of this content in a div
  var updatewrapper = document.createElement('div');
  updatewrapper.id = 'updatewrapper';
  updatemain.appendChild(updatewrapper);

  // Update header
  var updateheading = updatewrapper.appendChild(document.createElement('div'));
  var updatespan = document.createElement('span');
  updatespan.id = 'updateHeading';
  var headingTitle = document.createTextNode('Updates:');
  updatespan.appendChild(headingTitle);
  updateheading.appendChild(updatespan);

  var updateloc = updatewrapper.appendChild(document.createElement('div'));
  updateloc.id = 'updates-location';

  // Add updates from array of update information
  for (var i = 0; i < updatesArr.length; i++) {
    var addTitleSpan = document.createElement('span');
    var addTitleText = document.createTextNode(updatesArr[i].title);
    addTitleSpan.appendChild(addTitleText);
    addTitleSpan.appendChild(document.createElement('br'));
    addTitleSpan.id = 'updateTitle';

    var addContentSpan = document.createElement('span');
    var addContentText = document.createTextNode(updatesArr[i].content);
    addContentSpan.appendChild(addContentText);
    addContentSpan.appendChild(document.createElement('br'));
    addContentSpan.id = 'updateContent';

    var addDateSpan = document.createElement('span');
    var addDateText = document.createTextNode(updatesArr[i].date);
    addDateSpan.appendChild(addDateText);
    addDateSpan.appendChild(document.createElement('br'));
    addDateSpan.id = 'updateDate';

    updateloc.appendChild(document.createElement('br'));
    updateloc.appendChild(addTitleSpan);
    updateloc.appendChild(addContentSpan);
    updateloc.appendChild(addDateSpan);
  }
}

// remove the update from subsequent pages
function clearUpdates() {
  var updatemain = document.getElementById('updatewrapper');
  if (updatemain !== null) {
    updatemain.remove();
  }
}
