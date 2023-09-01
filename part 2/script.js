// 'use strict';
//  let hasDriversLicense = false
//  const passTest = true

//  if(pass) hasDriversLicense = true

// function fruitProcessor (apples,oranges) {
//     const juice = `Juice with ${apples} apples and Juice With ${oranges} oranges`
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0)

// alert(appleJuice)
// Arrrow Functions
// const calcAge = birthYear => 2023 - birthYear
// const ageA = calcAge(1991)

// alert(age)

// const cutPieces = function (fruit) {
//     return fruit * 4;
// }

// const fruitProcessor = function (apples, oranges) {
//     const applePieces = cutPieces(apples)
//     const orangePieces = cutPieces(oranges)
//     const juice = (`Make a Juice of ${applePieces} apple Pieces and ${orangePieces} Orange Pieces`)
//     return juice
// }

// alert(fruitProcessor(3,5))

// const calcAverage = (a, b, c) => (a + b + c) / 3

// const avgDolps = calcAverage(85,54,41)
// const avgKoalas = calcAverage(23,27,34)

// const checkWinner = function (avgDolps, avgKoalas) {
//     if (avgDolps > 2 * avgKoalas) {
//         console.log(`Dolps are the winners `)

//     }
//     else if (avgKoalas > 2 * avgDolps) {
//         console.log(`Koalas are the winners `)
//     }
//     else {
//      console.log(`No Team Wins`)
//     }
// }

// checkWinner (avgDolps,avgKoalas)

// const calcTip = function(bill)
// {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
// }

// const bills = [125 , 555 ,44]

// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// const totals = [bills[0] + tip[0] , bills[1] + tip[1] , bills[2] + tip[2]]

// console.log(bills , tip , totals)


// console.log(utkarsh)

// const interstedIn = prompt('What Do You Want To Know ? job,age,firstName,lastName,friends')

// console.log(utkarsh[interstedIn])

// utkarsh.location = 'Jabalpur'
// utkarsh['twitter'] = '@Utkarsh369'
// console.log(utkarsh)

// console.log(`${utkarsh.firstName} has ${utkarsh.friends.length} friends and his bestfriend is ${utkarsh.friends[0]}`)

// const miller = {
//    fullName : 'Mark miller' , 
//    mass : 78 , 
//    height : 1.69 ,

//    calcBMI : function ()
//    {
//     this.vmi = this.mass / this.height ** 2
//         return this.vmi
//    }
// }

// const smith = {
//     fullName : 'John Smith' , 
//     mass : 92 ,
//     height : 1.95 , 

//     calcBMI : function ()
//    {
//     this.vmi = this.mass / this.height ** 2
//     return this.vmi
//    }
// }

// const millerBMI = miller.calcBMI()
// const smithBMI = smith.calcBMI()

// if (millerBMI > smithBMI) 
// {
//     console.log(`Mark's BMI ${millerBMI} is higher than John's BMI ${smithBMI}`)
// }
// else{
//     console.log(`John's BMI ${smithBMI} is higher than Mark's BMI ${millerBMI}`)
// }

const utkarsh = [
    'Utkarsh' ,
    'Shrivastava' ,
    2023-2002 , 
    'student' ,
    ['L' , 'Light' , 'N'] ,
    true
    
]

const utt = []

for (let i=0 ; i < utkarsh.length ; i++)
{
    console.log(utkarsh[i] , typeof utkarsh[i])

    utt.push(typeof utkarsh[i])
}

console.log(utt)