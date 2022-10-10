import NodeCache from 'node-cache';
var cache = new NodeCache();
cache.set('greeting', 'hello world');
console.log(cache.get('greeting'));
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is ".concat(fullName, ".\nI'll be ").concat(age + 1, " years old next month.");
console.log(sentence);
// ******************************************************************
// let list: number[] = [1, 2, 3];
// let list2: Array<number> = [1, 2, 3];
// // Declare a tuple type
// let x: [string, number, number];
// // Initialize it
// x = ["hello", 10, 10]; // OK
// ******************************************************************
// function  identify (arg: any): any {
//     console.log('Type: ', typeof arg);
//    return arg;
// }
// const x = identify(10);
// const y = identify('tawfiek');
// console.log('VALUES ', x, y);
// interface Info<T> { // Promise <string> =>
//     type: string;
//     value: T | boolean
// }
// function identify<T>(arg: T): Info<T> {
//     console.log('Type: ', typeof arg);
//     return {
//         value: arg,
//         type: typeof arg
//     };
// }
// const x = identify(10);
// const y = identify('10');
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
