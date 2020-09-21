// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
const fibonacci = () => {

}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const oddNums = (array) => {
    let newArr = array.filter(value => {
      if(typeof value === "number"){
        return value % 2 !== 0
      }
    })
    return newArr.sort((a, b) => a - b)
}

console.log(oddNums(fullArr1))
console.log(oddNums(fullArr2))


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
//Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”
var position = ""
var length = 0

const midLetter = (str) => {
  if(str.length() % 2 == 1){
  let position = str.length() / 2
  let  length = 1
  }
  return string.substring(position, postion + length)
}
console.log(midLetter(middleLetters1))
// console.log(midLetter(middleLetters2))

// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
Class AreaSphere extends Component{

constructor(props){
  super(props)
    this.state = {
      pi: 3.14,
      radius: 0
    }
  getArea = () => {
    let {pi, radius} = this.state
    pi * 4 * radius * radius
    }
}

}

// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []
var lastNum = 0

const sequence = (array) => {
  return array.map(number => lastNum += number)
}
console.log(sequence(numbersToAdd1))
console.log(sequence(numbersToAdd2))
console.log(sequence(numbersToAdd3))
