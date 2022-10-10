// import NodeCache from 'node-cache';

// const cache = new NodeCache();
// cache.set('greeting', 'hello world');

// console.log(cache.get('greeting'));

// let fullName = `Bob Bobbington`;
// let age: number = 37;
// const sentence = `Hello, my name is ${fullName}.
// I'll be ${age + 1} years old next month.`;


// console.log(sentence);

// ******************************************************************


// ******************************************************************

// function  identify (arg: any): any {
//     console.log('Type: ', typeof arg);

//    return arg;
// }

// const x = identify(10);
// const y = identify('tawfiek');

// console.log('VALUES ', x, y);

// const arr: number[]= [1,2,3];
// const arr2: Array<number> = [1,2,3];

// type  Car = {
//     brand: string;
//     model: string;
//     year: number;
//     color: string;
//     price: number;
// }
// const myCar: Car = {
//     brand: 'BMW',
//     model: 'X5',
//     year: 2019,
//     color: 'black',
//     price: 100000
// }

// type Pet = {
//     name: string;
//     age: number;
//     color: string;
//     type: string;
// }
// const myPet: Pet = {
//     name: 'Lucky',
//     age: 2,
//     color: 'white',
//     type: 'dog'
// }

// const myInfo = {
//     name: 'tawfiek',
//     myCar: myPet
// }

// interface Info<T> { // Promise <Car> =>
//     myName: string;
//     myCar: T
// }

type Info<T> = {
    value: T,
    type: string
}

function identify<G>(arg: G): Info<G> {
    console.log('Type: ', typeof arg);

    return {
        value: arg,
        type: typeof arg
    };
}

const x = identify(10);
const y = identify('10');
const z = identify(myCar);

// function convertToBool<T> (v: T): Info<T> {
//     return {
//         value: !! v,
//         type: typeof v
//     };
// }
// const age = identify<number>(10);
// const myName = identify<string>('tawfiek');

// console.log('VALUES ', myName, age);

// (function main () {
//     const x = identify<string>("hello");
//     const y = identify<number>(10);
//     const z = identify<boolean>(true);

//     console.log(`Values ${x}, ${y}, ${z}`);

// })();

// ******************************************************************

// function sayHello(name: string): void {
//     console.log(`Hello, ${name}`);
// }

// sayHello('Session ');

// function identify (value: any): any {
//     console.log(typeof value);
//     return value;
// }

// const myName: string = 'Tawfiek';
// const age: number = 37;

// const myName2 = identify(myName);
// const age2 = identify(age);

// type User = {
//     name: string;
//     age: number;
//     userName: string;
//     email: string;
//     password: string;
//     children: Child[];
// }

// interface Child {
//     name: string;
//     age: number;
// }

// const myChild: Child = {
//     name: 'Ahmed',
//     age: 10
// }

// const firstUser: User = {
//     name: 'Tawfiek',
//     userName: 'tawfiek',
//     email: 'tawfiek.108@gmail.com',
//     children: [ myChild ],
//     age: 12,
//     password: '123456'
// }

// const secondUser:  User =  {
//     name: 'Tawfiek',
//     userName: 'tawfiek',
//     email: 'tawfiek.108@gmail.com',
// }

// const firstUser: Partial<User> = {
//     name: 'Tawfiek',
//     userName: 'tawfiek',
//     email: 'tawfiek.108@gmail.com',
//     children: [
//         {
//             name: 'Tawfiek',
//             age: 12
//         }
//     ]
// }