## 1. What are some differences between interfaces and types in TypeScript?

এক কথায় বলতে গেলে TypeScript এর জগতে custom কোন type তৈরি করার ক্ষেত্রে interfaces ও types অনেক বেশি ব্যবহার করা হয়। 
এখানে custom type বলতে মূলত বোঝানো হয়েছে যে, 
আমরা জানি যে, TypeScript এ অনেক ধরনের built in type রয়েছে যেমন, number, string, boolean, null, undefined, object, ইত্যাদি ইত্যাদি। কিন্তু অনেক সময় এই built in type দিয়ে সব কিছু করা যায়না। নিজের প্রয়োজন মতো এই built in type ব্যবহার করে custom টাইপ তৈরি করা লাগে। এই custom type যেকোনো কিছুই হতে পারে। যেমন,
ধরুন person নামে আপনার একটা object আছে, এবং যার property হিসেবে name, age, gender আছে। যেহেতু person একটা object আর typescript এ যেহেতু object নামে একটা type আছে তাই আপনি যদি person এর type যদি object দিয়ে ব্যাবহার করেন তাহলে কোন সমস্যা নাই। যেমন টা নিচের মতো,

```ts
const person:object = {
  name: "Alice",
  age: 20,
  gender: "male"
}
```
 কিন্তু এটা করলে typescript ব্যবহার করার সুবিধাটাই বুঝতে পারবেন না। কারন যখনই আপনি person এর কোন একটা property (.) notation দিয়ে ব্যবহার করতে যাবেন তখন typescript একটা type error দিবে যে, 'Property 'age' does not exist on type 'object'.' এটা দেওয়ার কারন হলো typescript এ person এর type object হবে বলেছেন ঠিকই কিন্তু ঐ object এর মধ্যে কি কি property থাকবে সেটা বলে দেন নাই। কিছু এর জন্য দরকার custom type এর। চলুন এবার দেখি এই custom type কিভাবে তৈরি করা যায় সেটা দেখি। আমি যদি person object এর জন্য একটা কাস্টম বানাতে চাই তাহলে, অনেকটা এমন হবেঃ
 
 ```ts
 type Person = {
  name: string;
  age: number;
  gender: "male" | "female" | "other";
}
```
এখানে 'type' keyword use করে person object এর একটা custom type তৈরি করেছি যেটা যদি আমি person object এর সাথে ব্যবহার করি তাহলে এটা person object এর জন্য একটা well defined type হবে। এটা ব্যবহার করায় person object কে এর প্রত্যেকটা property আমি সুন্দর করে (.) notation দিয়ে ব্যবহার করতে পারবো। 

এবার দেখা যাক type ব্যবহারের syntax
type ব্যবহার করে কোন custom টাইপ বানাতে আমাকে type use করে type এর একটা নাম দিতে হবে (type এর নাম Capitalized form এ লেখাটা একটা convension). then (=) সাইন দিয়ে যে ধরনের data রাখতে চাই তার type দিতে হয়। Person type create করার সময় person যেহেতু একটা object তাই এর জন্য {} ব্যবহার করা হয়েছে। আর এর মধ্যে যে property গুলো থাকবে এবং তাদের type কি হবে সেটা সাধারন ভাবে type define করার মতো করে property name দিয়ে (:) notation দিয়ে type বলে দেওয়া হয়েছে। এখানে বলে রাখি 'type' keyword করে আমরা যেকোনো কাস্টম type তৈরি করতে পারবো। যেমন, type CustomString = string, এই CustomString type টা স্ট্রিং type এর custom টাইপ হিসেবে ব্যবহার করতে পারবো। একই ভাবে, type Gender = 'male' | 'female' | 'others' এখানে Gender type টা যদি আমি ব্যবহার করতে চাই তাহলে ঐ value টা অবশ্যই 'male' অথবা 'female' অথবা 'others' হতে হবে ধরে ব্যবহার করতে পারি। এভাবে type ব্যবহার করে যেকোনো ধরনের custom type তৈরি করা যায়।

এবার আসি interface নিয়ে,
TypeScript এ interface মূলত ২ ভাবে ব্যাবহার করা যায়। 
1. interface ব্যবহার করে type এর মতো করে যে কোন custom type বা shape তৈরি করা যায়। 
2. interface implements করার মাধ্যমে একটা interface কে abstract class এর মতো করে ব্যাবহার করা যায়। 

চলুন এবার দেখি এই interface কে type এর মতো করে কিভাবে custom টাইপ বা shape করা যায় সেটা দেখি।

```ts
interface IPerson {
  name: string;
  age: number;
  gender: "male" | "female" | "other";
}
```
এখানে syntax টা অনেকটাই type এর মতো। শুধু পার্থক্য হলো interface তৈরি করতে type এর মতো করে (=) দিয়ে টাইপ ডিফাইন করার কোন সুযোগ নেই। এছাড়া interface ব্যাবহার করে type এর মতো প্রায় সব কিছু করা যায়।
যেমন, 
```ts
interface INumber extends Number {}
```
এখানে interface দিয়ে custom number type তৈরি করা হয়েছে। এমন আরও অনেক কিছু type দিয়ে করা যায়।

এবার দেখা যাক interface implements করার মাধ্যমে কিভাবে একটা interface কে abstract class এর মতো করে ব্যাবহার করা যায়।

```ts
interface IEngine {
  start: () => void;
  stop: () => void;
}
class Engine implements IEngine{

  start(){
    console.log("Engine started")
  }
  stop(){
    console.log("Engine is stopped")
  }
}
```

## 3. Explain the difference between any, unknown, and never types in TypeScript.
আমরা জানি যে, TypeScript হলো একটা strongly typed programming language যেটা কিনা JavaScript এর উপর base করে তৈরি করা হয়েছে। TypeScript এ অনেক ধরনের type আছে যেমন, string, number, object, undefined, null, any, unknown, never, ইত্যাদি ইত্যাদি। এদের মধ্যে any, unknown, never এই type গুলো অন্যতম। কারন, আমরা developer রা এই তিনটা type কোনটা কখন ও কিভাবে use করতে হয় সেটা বুজতে পারি না। তাই, চলুন তাহলে কোন কিছু মুখস্ত না করে নিজের ভেতর ফিল নিয়ে নিয়ে এই any, unknown, never এই type গুলোর নাড়ি নক্ষত্র খুজে বের করার চেষ্টা করি।

কথায় আছে ব্যবহারেই বংশের পরিচয়। নাম দেখেই বোঝা যাচ্ছে যে, এই any type মানে হলো যেকোনো type. এখানে যেকোনো টাইপ মানে কি? আমরা তো জানি, TypeScript হলো একটা strongly typed programming language. তাহলে এই যেকোনো type বা any type বলতে তো এমন কিছুই বুঝাচ্ছে যে, Suppose, age নামে আমার একটা variable আছে। এই age variable এর type যদি আমি any দিয়ে রাখি তাহলে আমি এই age এর value যেকোনো সময় যেকোনো type এর ডাটা রাখতে পারবো। যেমন,

```ts
let age: any;
age = 10;
age = "ten";
age = true;
```
এমন কাজটা কিন্তু JavaScript এও করা যেতো। যেখানে JavaScript এ type এর support না থাকায় TypeScript use করছি সেখানে এই any type বা যেকোনো type যদি আমি TypeScript এ ব্যাবহার করি তাহলে তো TypeScript use করার কোন মানেই থাকছে না। ঠিক তাই। কোন variable বা অন্য কিছুর সাথে যদি আমি any type ইউজ করি তার মানে হলো, শুধু ঐ variable এর জন্য TypeScript completely disable হয়ে যায়। disable হয়ে যাওয়া মানে হলো TypeScript থেকে JavaScript এ compile করার সময় ঐ variable এর জন্য TypeScript কোন error দিবে না। সাধারণত, আমরা জানি যে, TypeScript এ variable বা function বা যেকোনো কিছু নিয়ে কাজ করার সময় যদি type match না করে তাহলে সঙ্গে সঙ্গে type error দেয়। যেমন,

```ts
let age: number = "20";   // ❌ Error: Type 'string' is not assignable to type 'number'
```

কিন্তু এখানে number type এর জায়গায় যদি any type দেওয়া হতো তাহলে TypeScript এই error টা দিতো না। এখন কথা হলো error দেওয়া ভালো না খারাপ?

চলেন একটা উদাহরন দেখে বোঝার চেষ্টা করি,

ধরেন আপনি একটি multiply নামে একটা function লিখেছেন, যেটি দুটি any type এর parameter receive করে এবং দুটি parameter এর গুনফল return করে। যেমনঃ

```ts
const multiply = (num1: any, num2: any): any => {
  return num1 * num2;
};
```

যেটি আপনার প্রয়োজন অনুসারে যেখানে খুশি সেখানে দুটি number value গুন করার জন্য ব্যাবহার করেন। খুব ভালো কথা। কিন্তু ধরেন, কোন একটা জায়গায় আপনি multiply function call করার সময় বাই মিস্টেক number দেওয়ার জায়গায় দুটি string data দিয়ে multiply function call করেছেন। যেহেতু parameter গুলোর type any use করা তাই TypeScript কোন error দিবে না। কিন্তু unexpected output and wrong output return করবে। যেমনঃ

```ts
console.log(multiply("sss", "ss")); // NaN
```
একই কাজটা যদি আপনি প্রপার type define করে করতেন তাহলে কোড টা নিচের মতো হতোঃ

```ts
const multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};
```
এখন আপনি যদি এই multiply function call করার সময় ভুল করেও number এর জায়গায় অন্য type এর ডাটা দিতেন তাহলে TypeScript আপনাকে তখনই ধরে বসতো এবং type error দিয়ে বলতো Argument of type 'string' is not assignable to parameter of type 'number'. 

এখন বুজতে পারছেন যে, TypeScript এ any type ব্যবহার করা কতটা ভয়ংকর?

### এবার আসি unknown type নিয়ে

unknown word টা শুনেই বোঝা যাচ্ছে যে এটা অনেকটা any type এর মতোই। এটা আসলেই অনেকটা any type এর মতো। এখানে আপনি চাইলেই যেকোনো type এর ডাটা রাখতে পারবেন। কিন্তু এখানে কিছু পার্থক্য আছে। এটা হলো একটা safer version of any type. মানে হলো, যখন আপনি কোন variable বা কোন কিছুর type unknown রাখবেন তখন সেই variable টি অনেকটা any type এর মতোই আচারন করবে। কিন্তু ঐ variable এর value দিয়ে কোন কাজ বা operation করতে গেলে ঐ variable এর value টা যে type এর হয়ে operation perform করবে ঐ type টা check দিয়ে নিতে হবে। যেমন,

```ts
let name: unknown = "Dipta Saha"
name.toUpperCase(); // ❌ Error: 'name' is of type 'unknown'.
```

উপরের কোডে name variable এর type unknown রেখে value হিসেবে ‘Dipta Saha‘ assign করা হয়েছে। এর মানে কিন্তু এই না যে উক্ত variable টা string এর মতো করে আচারন করবে। name এর type unknown ই থেকে যাবে। যেমন টা code এ দেখতে পারছেন যে, name এর value string ধরে string এর একটা operation চালানোর চেষ্টা করা হয়েছে। যেহেতু name এর type string না তাই string এর একটা method use করতে গেলে type error দিচ্ছে যে, 'name' is of type 'unknown'. তাই, string এর operation apply করতে গেলে আমাকে আগে অবশ্যই variable এর value টা string টাইপ কিনা সেটা চেক করে নিতে হবে, অনেকটা নিচের মতো করে

```ts
let name: unknown = "Dipta Saha";
if (typeof name === "string") {
  name.toUpperCase();
}
```
এভাবে string check করাতে if block এর ভিতর গিয়ে যদি আমি name variable এর উপর hover করি তাহলে আমাকে name variable টা string type এর দেখাবে। 

একই ভাবে যদি আরও একটা উদাহরন দেখি,

```ts
let name: unknown = 100;
if(typeof name === "string"){
  console.log(name.toUpperCase());
}
if(typeof name === "number"){
  console.log(name + 100);
}
```

এখানে name এর value 100 দিয়ে assign করে 2 টা check দেওয়া হয়েছে। বলেন তো output এ কি আসবে?

output এ 200 আসবে কারন, name এর টাইপ unknown থাকার পরেও value হিসেবে 100 (একটা number type) এর value assign করা হয়েছে। এরপর 2 টা if condition string ও number চেক দিচ্ছে। যেহেতু name এর value number এ দেওয়া হয়েছে তাই last condition (number check) টা সত্য হয়ে block er ভিতর গিয়ে 100 + 100 = 200 output এ দিবে। I hope unknown type এর actual concept এখন আপনাদের কাছে অনেকটা clear.

### এবার আসি never type নিয়ে
এই never টাইপ নিয়ে আসলে কিছু বলার নাই। কারন যে type কখনো exist করে না, সেই type নিয়ে আর কি বলার আছে? আচ্ছা ধরুন আপনাকে বলা হলো একটা variable এ number এবং string type এর ডাটা রাখতে হবে। এটা কি আসলে possible? এক কথায় না। যদি এমন বলা হতো একটা variable এ number অথবা string type এর ডাটা রাখতে হবে, তাহলে মানা যেতো। চলুন ঝটপট কিছু এমন উদ্ভট মার্কা type এর কিছু উদাহরন দেখা যাক,

```ts
let data: number & string;
```


```ts
let data: number[] & string[];
```

ইত্যাদি ইত্যাদি। এই টাইপ যেহেতু exist করে না তাই একে আদর করে impossible type বলেও ডাকা হয়। 