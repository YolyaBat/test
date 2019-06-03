//Problem 1

const jsonObj =
  { 
  'id': 1,
  'label': 'A',
  'childNodes': [
  {
      'id': 2,
      'label': 'B',
      'childNodes': [
        {
          'id': 5,
          'label': 'E'
        },
        {
          'id': 6,
          'label': 'F'
        },
        {
          'id': 7,
          'label': 'G'
        }
      ]
    },
    {
      'id': 3,
      'label': 'C'
    },
    {
      'id': 4,
      'label': 'D',
      'childNodes': [
        {
          'id': 8,
          'label': 'H'
        },
        {
          'id': 9,
          'label': 'I'
        }
      ]
    }
  ]
}

//Problem 2:
// I've built a simple server that returns the json object (like in the real world)

let myObj
const getObject = (() => {
  const corsUrl = 'https://cors-anywhere.herokuapp.com/'
  fetch(corsUrl + 'https://yuliabatrakova-simple-server.herokuapp.com/data')
  .then(response => response.json())
  .then(data => {
    myObj = data[0]
}).catch(err => console.log("oops, something went wrong"))
})()

// Problem 3:
function findLabel(object, id) {
  if (id == object.id) {
    return object.label
  } else {
      if(object.childNodes) {
        for (let i = 0; i < object.childNodes.length; i ++) {
          let child = object.childNodes[i];
          let result = findLabel(child, id);
          if (result) {
            return result;
          }
        }
      }
    return false;
  }
}
//Test examples: 
// findLabel(myObj, 1) returns "A"
// findLabel(myObj, 4) returns "D"
// findLabel(myObj, 5) returns "E"
// findLabel(myObj, 8) returns "H"
// findLabel(myObj) returns false
// findLabel(myObj, 1000) returns false

