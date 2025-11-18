1. What are some differences between interfaces and types in TypeScript?
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

