console.log("masud osmannn");
console.log("successfully worked!");

const result = {
  name: "Masud",
  age: 20,
  country: "Bangladesh",
  city: "Gazipur",
  job: "Software Engineer",
  salary: 10000,
  hobbies: ["Sports", 21, "Cookings"],
  languages: ["Bangla", "English", "Hindi"],
  gpt: (a: any) => {
    return a;
  },
};

const objfunc = <T, U extends keyof T>(obj: T, key: U) => {
  return obj[key] as T[U];
};

const res = objfunc(result, "hobbies");
console.log(Array.isArray(res));

if (Array.isArray(res)) {
  res.forEach((elements) => {
    console.log(elements);
  });
}

console.log(typeof res, res);

// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = "Hello World";
console.log(anExampleVariable);

// interface a{
//   [key:string]:string;
// }

interface apidata {
  mapsa: string;
  mapsb: number;
}

type reshape<T> = {
  [k in keyof T as removemaps<k>]: T[k];
};

type removemaps<T> = T extends `maps${infer u}` ? u : T;

type att = reshape<apidata>;

interface a {
  name: string;
  age: string;
}

type ass = {
  name: string;
  age: string | number;
};

const obj = {
  name: "masud",
  age: 1,
} satisfies ass;

const obj2 = obj.age;
// interface a {
//     b:boolean
// }

// let jpb:a = {

// }

// const af = #{
//     a:'a',
//     b:'b'
// }
// const bf = #{
//     a:'a',
//     b:'b'
// }

// console.log('hassssssssssshhhhhhhhhhhhhhhhhhhh',af == bf)

type jsonvalue = string | number | boolean | { [key: string]: jsonvalue };

// let bb:jsonvalue = {
//     'masud' : 123,
// }
let bb = {
  masud: 123,
  abc: 2,
  ccc: {
    dd: "jomit",
    cc: "palat",
    ee: {
      ff: 22,
    },
  },
} satisfies jsonvalue;

let avv = bb.ccc.ee.ff;

let temp: a = {
  name: "masud",
  age: "21",
};

const myobj = {
  name: "masud",
  age: 21,
  gender: "male",
};

// const objkeys = <obj>(a:obj):(keyof obj)[] => {
//    return Object.keys(a) as (keyof obj)[];
// }

// const objkeys = <T,>(a:T):T => {
//    return a as T;
// }
// function objkeys <T>(a:T):T
function objkeys<T>(a: string): string;
function objkeys<T>(a: boolean): boolean;
function objkeys<T>(a: string, b: T): { a: T; b: T };
function objkeys<T extends {}>(a: T): T {
  return a;
}

const jam = objkeys("1");

const func = (a: number, b: string) => true;
type aj = typeof func;

type Fakereturntype<T> = T extends (...args: infer hj) => infer R
  ? { parameterType: hj; returntype: R }
  : never;
type ccc = typeof func;
type b = Fakereturntype<typeof func>;

const ccc: b = { parameterType: [1, "a"], returntype: true };
// Object.keys(temp).forEach((key extends typeof keyof temp)=>{
//     console.log(temp[key]);
// })

temp.age = "male";

console.log(temp);

let b = temp["age"];

console.log(b);

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
