var lib = require('./index.js');
var data = [];

data.push({"setup":{"protocol":"NVP"},"use":{"master":{"stage":"NO"}},"common_request_params":{"version":"123","method":"SetExpressCheckout"},"NVP":{"SetExpressCheckout":{"AMT":"16","CANCELURL":"http://xotoolslvs01.qa.paypal.com/ectest/cancel.html","L_AMT0":"8","L_NAME0":"Test Item fewarwerwerw","L_QTY0":"2","PAYMENTACTION":"Sale","RETURNURL":"http://xotoolslvs01.qa.paypal.com/ectest/return.html","_custom0__name":"L_DESC0","_custom0":"hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world"}}});
data.push({ zh: 
   { name: 'China',
     continent: 'Asia',
     flagColors: [ 'red', 'yellow' ],
     leader: { name: '习 近平-习', title: 'President', term: 137 },
     population: 1370000000 },
  in: 
   { name: 'India',
     continent: '',
     a: true,
     b: false,
     c: null,
     emptyArray: [],
     emptyObject: {},
     flagColors: [ 'orange', 'white', 'green' ],
     leader: { name: 'Narendra\nModi.', title: 'Prime Minister', term: 119 },
     population: 1190000000 },
  array: [ 'asdf', [ 3, 4 ] ] });

data.push({ one : 1 });
data.push({ one : 1, two: 2, three: 3});

data.push([
  {
    "_id": "55d54e11bf8bf51e99245818",
    "index": 0,
    "guid": "f1205498-83a2-4f9d-ba60-ded5585c0e67",
    "isActive": false,
    "balance": "$2,370.15",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "green",
    "name": {
      "first": "Jill",
      "last": "Pennington"
    },
    "company": "GAZAK",
    "email": "jill.pennington@gazak.co.uk",
    "phone": "+1 (998) 584-3321",
    "address": "517 Coles Street, Skyland, Montana, 7661",
    "about": "Pariatur tempor consequat amet do incididunt aute nulla. Pariatur reprehenderit nostrud quis mollit duis ipsum ut consequat mollit qui. Ullamco reprehenderit nostrud nulla nisi ipsum adipisicing esse. Et ullamco in reprehenderit fugiat consectetur sunt laborum est. Magna sit consectetur commodo tempor dolore sint id dolor Lorem Lorem. Ex nisi ea occaecat nisi. Voluptate enim in aliquip laborum consectetur eu commodo enim excepteur ex.",
    "registered": "Saturday, July 26, 2014 3:55 PM",
    "latitude": "74.180645",
    "longitude": "-80.748226",
    "tags": [
      "anim",
      "est",
      "excepteur",
      "esse",
      "voluptate",
      "nulla",
      "anim",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Frazier Schwartz"
      },
      {
        "id": 1,
        "name": "Ellis Fuller"
      },
      {
        "id": 2,
        "name": "Laurel Hill"
      }
    ],
    "greeting": "Hello, Jill! You have 9 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "55d54e11e47640367e1e8a29",
    "index": 1,
    "guid": "edb46838-ba45-4de1-8a8a-71a7503d5a2d",
    "isActive": true,
    "balance": "$3,282.70",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "brown",
    "name": {
      "first": "Eliza",
      "last": "Mcdaniel"
    },
    "company": "GENMOM",
    "email": "eliza.mcdaniel@genmom.name",
    "phone": "+1 (991) 496-2864",
    "address": "532 Jewel Street, Outlook, Utah, 2237",
    "about": "Aliquip ea et mollit in excepteur anim duis adipisicing laboris esse occaecat. Mollit tempor et duis sit tempor irure sint sit id enim eiusmod. Amet consectetur esse commodo nostrud dolore excepteur in laboris aliqua cillum elit velit adipisicing deserunt. Ut excepteur ad quis ea velit aliqua tempor consectetur.",
    "registered": "Sunday, August 17, 2014 1:04 AM",
    "latitude": "-39.904477",
    "longitude": "71.117407",
    "tags": [
      "anim",
      "est",
      "excepteur",
      "esse",
      "voluptate",
      "nulla",
      "anim",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Frazier Schwartz"
      },
      {
        "id": 1,
        "name": "Ellis Fuller"
      },
      {
        "id": 2,
        "name": "Laurel Hill"
      }
    ],
    "greeting": "Hello, Eliza! You have 9 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55d54e118f4a1f5c6749e9fa",
    "index": 2,
    "guid": "854040fa-6f9d-481b-990e-d2877dbee2d4",
    "isActive": false,
    "balance": "$3,010.47",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "brown",
    "name": {
      "first": "Robert",
      "last": "Burch"
    },
    "company": "ACRODANCE",
    "email": "robert.burch@acrodance.biz",
    "phone": "+1 (876) 431-2360",
    "address": "139 Cornelia Street, Collins, Oklahoma, 671",
    "about": "Voluptate anim est velit reprehenderit sit ut magna non commodo. Commodo veniam sit non commodo nisi enim. Sint adipisicing culpa cillum exercitation irure consequat laboris laborum.",
    "registered": "Wednesday, September 17, 2014 9:16 AM",
    "latitude": "-18.778534",
    "longitude": "-77.0815",
    "tags": [
      "anim",
      "est",
      "excepteur",
      "esse",
      "voluptate",
      "nulla",
      "anim",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Frazier Schwartz"
      },
      {
        "id": 1,
        "name": "Ellis Fuller"
      },
      {
        "id": 2,
        "name": "Laurel Hill"
      }
    ],
    "greeting": "Hello, Robert! You have 6 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "55d54e1161c743c696e550b9",
    "index": 3,
    "guid": "a9bc9cc1-f159-44c0-af72-0832a4a05ed6",
    "isActive": false,
    "balance": "$2,632.61",
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "green",
    "name": {
      "first": "Mae",
      "last": "Fowler"
    },
    "company": "JUNIPOOR",
    "email": "mae.fowler@junipoor.org",
    "phone": "+1 (825) 426-2682",
    "address": "316 Pineapple Street, Hegins, New York, 5565",
    "about": "Voluptate elit non magna excepteur velit voluptate. Eu aliqua Lorem eiusmod ut quis amet cillum consequat. Do magna ex laborum incididunt est proident dolore tempor in ullamco. Commodo irure labore nulla voluptate in voluptate minim mollit enim aliqua minim excepteur ad esse.",
    "registered": "Thursday, June 18, 2015 10:05 PM",
    "latitude": "-62.526412",
    "longitude": "-54.420474",
    "tags": [
      "anim",
      "est",
      "excepteur",
      "esse",
      "voluptate",
      "nulla",
      "anim",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Frazier Schwartz"
      },
      {
        "id": 1,
        "name": "Ellis Fuller"
      },
      {
        "id": 2,
        "name": "Laurel Hill"
      }
    ],
    "greeting": "Hello, Mae! You have 9 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "55d54e1134a6c7726d4311b7",
    "index": 4,
    "guid": "7b5cbc42-3c27-41fd-bec4-08e34581ce26",
    "isActive": false,
    "balance": "$2,232.78",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "blue",
    "name": {
      "first": "Casey",
      "last": "Evans"
    },
    "company": "NETERIA",
    "email": "casey.evans@neteria.ca",
    "phone": "+1 (989) 576-2758",
    "address": "940 Norfolk Street, Keller, Iowa, 6578",
    "about": "Do Lorem ullamco laborum ex qui qui ea ullamco deserunt aliquip reprehenderit sint dolore. Amet est dolor minim officia. Non irure sint mollit aute sunt ad enim id ullamco amet excepteur minim. Deserunt cillum esse do cupidatat cupidatat dolor nostrud proident pariatur laborum minim incididunt. Adipisicing eiusmod nulla aliquip in ea commodo anim irure ex qui culpa sint. Cupidatat fugiat est laboris culpa occaecat veniam qui eiusmod. Laborum qui dolore est ipsum anim.",
    "registered": "Monday, August 25, 2014 11:26 PM",
    "latitude": "52.117994",
    "longitude": "-9.442317",
    "tags": [
      "anim",
      "est",
      "excepteur",
      "esse",
      "voluptate",
      "nulla",
      "anim",
      "custom_tag"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Frazier Schwartz"
      },
      {
        "id": 1,
        "name": "Ellis Fuller"
      },
      {
        "id": 2,
        "name": "Laurel Hill"
      }
    ],
    "greeting": "Hello, Casey! You have 5 unread messages.",
    "favoriteFruit": "apple"
  }
]);

data.forEach(function(datum) {
	lib.stats(datum, function cb(err, result) {
		if (err) {
			console.log(err.stack);
		} else {
			console.log(result);	
		}
	});
})

data.forEach(function(datum) {
	lib.compress(datum, function cb(err, result) {
		lib.decompress(result, function cb(err, result) {
			console.log(result);
		});
	});
});

/*
lib.compress(data, function(err, compressed) {
	if (err) {
		return console.log(err.stack);
	}

	lib.decompress(compressed, function(err, decompressed) {
		if (err) {
			return console.log(err.stack);
		}

		console.log(decompressed);
	})
})
*/