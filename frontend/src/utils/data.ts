const cards: { question: string; type: string }[] = [
  {
    question:
      "Give me an example of the project or initiative that you started on your own. It can be a non&minus;business one. What prompted you to get started?'",
    type: "behavioral"
  },
  {
    question:
      "Tell me about a time you had to work on several projects at once. How did you handle this?",
    type: "behavioral"
  },
  {
    question:
      "Describe a situation in which you felt you had not communicated well enough. What did you do? How did you handle it?",
    type: "behavioral"
  },
  {
    question:
      "Tell me about when you had to deal with conflict within your team. How was the conflict solved? How did you handle that? How would you deal with it now?",
    type: "behavioral"
  },
  {
    question:
      "Give me an example of a time you had to take a creative and unusual approach to solve coding problem. How did this idea come to your mind? Why do you think it was unusual?",
    type: "behavioral"
  },
  {
    question:
      "Describe a situation in which you worked diligently on a project and it did not produce the desired results. Why didn't you get the desired results? What did you learn from the experience?",
    type: "behavioral"
  },
  {
    question:
      "Give an example of an important project goal you reached and how you achieved it.",
    type: "behavioral"
  },
  {
    question:
      "Describe a situation in which you experienced difficulty in getting others to accept your ideas? What was your approach? How did this work? Were you able to successfully persuade someone to see things your way",
    type: "behavioral"
  },
  {
    question:
      "Tell me about a situation when you were responsible for project planning. Did everything go according to your plan? If not, then why and what kind of counteractions did you have to take?",
    type: "behavioral"
  },
  {
    question:
      "Tell me about a situation when you made a mistake at work. What happened exactly and how did you deal with it? What steps did you take to improve the situation?",
    type: "behavioral"
  },
  {
    question:
      "Tell me about a time when you worked with someone who was not completing his or her share of the work. How did you handle the situation? Did you discuss your concern with your coworker? With your manager? If yes, how did your coworker respond to your concern? What was your manager's response?",
    type: "behavioral"
  },
  {
    question:
      "Describe a situation when you worked effectively under pressure. How did you feel when working under pressure? What was going on, and how did you get through it?",
    type: "behavioral"
  },
  {
    question: "Tell me about yourself.",
    type: "behavioral"
  },
  {
    question: "Tell me about your experience at 100Devs.",
    type: "behavioral"
  },
  {
    question: "What do you know about our company?",
    type: "behavioral"
  },
  {
    question: "Why do you want to work for us?",
    type: "behavioral"
  },
  {
    question: "Why are you interested in this opportunity?",
    type: "behavioral"
  },
  {
    question:
      "Tell me about your dream job?  What do you really want to do with your career?",
    type: "behavioral"
  },
  {
    question: "Tell me a time when you failed.",
    type: "behavioral"
  },
  {
    question: "What do you read on a regular basis?",
    type: "behavioral"
  },
  {
    question: "What's some critical feedback you've gotten recently?",
    type: "behavioral"
  },
  {
    question: "Do you have any questions?",
    type: "behavioral"
  },
  {
    question: "What does a doctype do?",
    type: "HTML"
  },
  {
    question: "How do you serve a page with content in multiple languages?",
    type: "HTML"
  },
  {
    question:
      "What kind of things must you be wary of when design or developing for multilingual sites?",
    type: "HTML"
  },
  {
    question: "What are <code>data&minus;</code> attributes good for?",
    type: "HTML"
  },
  {
    question:
      "Consider HTML5 as an open web platform. What are the building blocks of HTML5?",
    type: "HTML"
  },
  {
    question:
      "Describe the difference between a <code>cookie</code>, <code>sessionStorage</code> and <code>localStorage</code>.",
    type: "HTML"
  },
  {
    question:
      "Describe the difference between <code>&lt;script&gt;</code>, <code>&lt;script async&gt;</code> and <code>&lt;script defer&gt;</code>.",
    type: "HTML"
  },
  {
    question:
      "Why is it generally a good idea to position CSS <code>&lt;link&gt;s</code> between <code>&lt;head&gt;&lt;&#x2F;head&gt;</code> and JS <code>&lt;script&gt;s</code> just before <code>&lt;&#x2F;body&gt;</code>? Do you know any exceptions?",
    type: "HTML"
  },
  {
    question: "What is progressive rendering?",
    type: "HTML"
  },
  {
    question:
      "Why would you use a <code>srcset</code> attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.",
    type: "HTML"
  },
  {
    question: "Have you used different HTML templating languages before?",
    type: "HTML"
  },
  {
    question: "What is CSS selector specificity and how does it work?",
    type: "CSS"
  },
  {
    question:
      "What's the difference between 'resetting' and 'normalizing' CSS? Which would you choose, and why?",
    type: "CSS"
  },
  {
    question: "Describe floats and how they work.",
    type: "CSS"
  },
  {
    question:
      "Describe <code>z&minus;index</code> and how stacking context is formed.",
    type: "CSS"
  },
  {
    question: "Describe BFC (Block Formatting Context) and how it works.",
    type: "CSS"
  },
  {
    question:
      "What are the various clearing techniques and which is appropriate for what context?",
    type: "CSS"
  },
  {
    question:
      "Explain CSS sprites, and how you would implement them on a page or site.",
    type: "CSS"
  },
  {
    question:
      "How would you approach fixing browser&minus;specific styling issues?",
    type: "CSS"
  },
  {
    question:
      "How do you serve your pages for feature&minus;constrained browsers? What techniques&#x2F;processes do you use?",
    type: "CSS"
  },
  {
    question:
      "What are the different ways to visually hide content (and make it available only for screen readers)?",
    type: "CSS"
  },
  {
    question:
      "Have you ever used a grid system, and if so, what do you prefer?",
    type: "CSS"
  },
  {
    question:
      "Have you used or implemented media queries or mobile specific layouts&#x2F;CSS?",
    type: "CSS"
  },
  {
    question: "Are you familiar with styling SVG?",
    type: "CSS"
  },
  {
    question:
      "Can you give an example of an <code>@media</code> property other than screen?",
    type: "CSS"
  },
  {
    question: "What are some of the 'gotchas' for writing efficient CSS?",
    type: "CSS"
  },
  {
    question:
      "What are the advantages&#x2F;disadvantages of using CSS preprocessors?",
    type: "CSS"
  },
  {
    question:
      "Describe what you like and dislike about the CSS preprocessors you have used.",
    type: "CSS"
  },
  {
    question:
      "How would you implement a web design comp that uses non&minus;standard fonts?",
    type: "CSS"
  },
  {
    question:
      "Explain how a browser determines what elements match a CSS selector.",
    type: "CSS"
  },
  {
    question:
      "Describe pseudo&minus;elements and discuss what they are used for.",
    type: "CSS"
  },
  {
    question:
      "Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.",
    type: "CSS"
  },
  {
    question:
      "What does <code>* { box&minus;sizing: border&minus;box; }</code> do? What are its advantages?",
    type: "CSS"
  },
  {
    question:
      "What is the CSS display property and can you give a few examples of its use?",
    type: "CSS"
  },
  {
    question:
      "What's the difference between inline and <code>inline&minus;block</code>?",
    type: "CSS"
  },
  {
    question:
      "What's the difference between a relative, fixed, absolute and statically positioned element?",
    type: "CSS"
  },
  {
    question:
      "What existing CSS frameworks have you used locally, or in production? How would you change&#x2F;improve them?",
    type: "CSS"
  },
  {
    question:
      "Have you played around with the new CSS </code>flexbox</code> or <code>grid</code> specs?",
    type: "CSS"
  },
  {
    question:
      "Can you explain the difference between coding a web site to be responsive versus using a mobile&minus;first strategy?",
    type: "CSS"
  },
  {
    question: "How is responsive design different from adaptive design?",
    type: "CSS"
  },
  {
    question:
      "Have you ever worked with retina graphics? If so, when and what techniques did you use?",
    type: "CSS"
  },
  {
    question:
      "Is there any reason you'd want to use <code>translate()</code> instead of absolute positioning, or vice&minus;versa? And why?",
    type: "CSS"
  },
  {
    question: "Explain event delegation.",
    type: "JavaScript"
  },
  {
    question:
      "What's the difference between <code>.call</code> and <code>.apply</code>?",
    type: "JavaScript"
  },
  {
    question: "Explain how <code>this</code> works in JavaScript.",
    type: "JavaScript"
  },
  {
    question: "Explain how prototypal inheritance works.",
    type: "JavaScript"
  },
  {
    question: "What do you think of AMD vs CommonJS?",
    type: "JavaScript"
  },
  {
    question:
      "Explain why the following doesn't work as an IIFE: function <code>foo(){ }();</code>. What needs to be changed to properly make it an IIFE?",
    type: "JavaScript"
  },
  {
    question:
      "What's the difference between a variable that is: <code>null</code>, <code>undefined</code> or undeclared? How would you go about checking for any of these states?",
    type: "JavaScript"
  },
  {
    question: "What is a closure, and how/why would you use one?",
    type: "JavaScript"
  },
  {
    question:
      "Can you describe the main difference between a <code>.forEach</code> loop and a <code>.map()</code> loop and why you would pick one versus the other?",
    type: "JavaScript"
  },
  {
    question: "What's a typical use case for anonymous functions?",
    type: "JavaScript"
  },
  {
    question:
      "How do you organize your code? (module pattern, classical inheritance?)",
    type: "JavaScript"
  },
  {
    question: "What's the difference between host objects and native objects?",
    type: "JavaScript"
  },
  {
    question:
      "Difference between: <code>function Person(){}</code>, <code>var person = Person()</code>, and <code>var person = new Person()</code>?",
    type: "JavaScript"
  },
  {
    question: "Explain <code>Function.prototype.bind</code>.",
    type: "JavaScript"
  },
  {
    question: "When would you use <code>document.write()</code>?",
    type: "JavaScript"
  },
  {
    question:
      "What's the difference between feature detection, feature inference, and using the UA string?",
    type: "JavaScript"
  },
  {
    question: "Explain Ajax in as much detail as possible.",
    type: "JavaScript"
  },
  {
    question: "What are the advantages and disadvantages of using Ajax?",
    type: "JavaScript"
  },
  {
    question: "Explain how JSONP works (and how it's not really Ajax).",
    type: "JavaScript"
  },
  {
    question:
      "Have you ever used JavaScript templating? If so, what libraries have you used?",
    type: "JavaScript"
  },
  {
    question: "Explain 'hoisting'.",
    type: "JavaScript"
  },
  {
    question: "Describe event bubbling.",
    type: "JavaScript"
  },
  {
    question:
      "What's the difference between an <code>attribute</code> and a <code>property</code>?",
    type: "JavaScript"
  },
  {
    question:
      "Why is extending built&minus;in JavaScript objects not a good idea?",
    type: "JavaScript"
  },
  {
    question:
      "Difference between document <code>load</code> event and document <code>DOMContentLoaded</code> event?",
    type: "JavaScript"
  },
  {
    question:
      "What is the difference between <code>==</code> and <code>===</code>?",
    type: "JavaScript"
  },
  {
    question:
      "Explain the same&minus;origin policy with regards to JavaScript.",
    type: "JavaScript"
  },
  {
    question:
      "Make this work: <code>duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]</code>",
    type: "JavaScript"
  },
  {
    question:
      'Why is it called a Ternary expression, what does the word "Ternary" indicate?',
    type: "JavaScript"
  },
  {
    question:
      "What is <code>use strict;</code>? what are the advantages and disadvantages to using it?",
    type: "JavaScript"
  },
  {
    question:
      'Create a for loop that iterates up to <code>100</code> while outputting "fizz" at multiples of <code>3</code>, "buzz" at multiples of <code>5</code> and "fizzbuzz" at multiples of <code>3</code> and <code>5</code>',
    type: "JavaScript"
  },
  {
    question:
      "Why is it, in general, a good idea to leave the global scope of a website as&minus;is and never touch it?",
    type: "JavaScript"
  },
  {
    question:
      "Why would you use something like the <code>load</code> event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?",
    type: "JavaScript"
  },
  {
    question:
      "Explain what a single page app is and how to make one SEO&minus;friendly.",
    type: "JavaScript"
  },
  {
    question:
      "What is the extent of your experience with Promises and&#x2F;or their polyfills?",
    type: "JavaScript"
  },
  {
    question:
      "What are the pros and cons of using Promises instead of callbacks?",
    type: "JavaScript"
  },
  {
    question:
      "What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?",
    type: "JavaScript"
  },
  {
    question: "What tools and techniques do you use debugging JavaScript code?",
    type: "JavaScript"
  },
  {
    question:
      "What language constructions do you use for iterating over object properties and array items?",
    type: "JavaScript"
  },
  {
    question: "Explain the difference between mutable and immutable objects.",
    type: "JavaScript"
  },
  {
    question:
      "Explain the difference between synchronous and asynchronous functions.",
    type: "JavaScript"
  },
  {
    question:
      "What is the event loop? What is the difference between call stack and task queue?",
    type: "JavaScript"
  },
  {
    question:
      "Explain the differences on the usage of foo between function <code>foo() {}</code> and <code>var foo = function() {}</code>",
    type: "JavaScript"
  },
  {
    question:
      "What are the differences between variables created using <code>let</code>, <code>var</code> or <code>const?</code>",
    type: "JavaScript"
  },
  {
    question:
      "What are the differences between ES6 class and ES5 function constructors?",
    type: "JavaScript"
  },
  {
    question:
      "Can you offer a use case for the new arrow =&gt; function syntax? How does this new syntax differ from other functions?",
    type: "JavaScript"
  },
  {
    question: "What is Node.js? Where can you use it?",
    type: "Node.js"
  },
  {
    question: "Why use Node.js?",
    type: "Node.js"
  },
  {
    question: "What are the features of Node.js?",
    type: "Node.js"
  },
  {
    question: "How do you update <code>npm</code> to a new version in Node.js?",
    type: "Node.js"
  },
  {
    question: "Why is Node.js Single&minus;threaded?",
    type: "Node.js"
  },
  {
    question: "Explain callback in Node.js.",
    type: "Node.js"
  },
  {
    question: "What is callback hell in Node.js?",
    type: "Node.js"
  },
  {
    question: "How do you prevent&#x2F;fix callback hell?",
    type: "Node.js"
  },
  {
    question: "Explain the role of REPL in Node.js.",
    type: "Node.js"
  },
  {
    question: "Name the types of API functions in Node.js.",
    type: "Node.js"
  },
  {
    question: "What are the functionalities of <code>npm</code> in Node.js?",
    type: "Node.js"
  },
  {
    question: "What is the difference between Node.js and Ajax?",
    type: "Node.js"
  },
  {
    question:
      "What are “streams” in Node.js? Explain the different types of streams present in Node.js.",
    type: "Node.js"
  },
  {
    question: "Explain chaining in Node.js.",
    type: "Node.js"
  },
  {
    question: "What are Globals in Node.js?",
    type: "Node.js"
  },
  {
    question: "What is Event&minus;driven programming?",
    type: "Node.js"
  },
  {
    question: "What is the Event loop in Node.js? And How does it work?",
    type: "Node.js"
  },
  {
    question: "What is the purpose of <code>module.exports</code> in Node.js?",
    type: "Node.js"
  },
  {
    question:
      "What is the difference between Asynchronous and Non&minus;blocking?",
    type: "Node.js"
  },
  {
    question: "What is Tracing in Node.js?",
    type: "Node.js"
  },
  {
    question: "How will you debug an application in Node.js?",
    type: "Node.js"
  },
  {
    question:
      "Difference between <code>setImmediate()</code> vs <code>setTimeout()</code>?",
    type: "Node.js"
  },
  {
    question: "What is <code>process.nextTick()</code>.",
    type: "Node.js"
  },
  {
    question: "What is <code>package.json</code>? What is it used for?",
    type: "Node.js"
  },
  {
    question: "What is <code>libuv</code>?",
    type: "Node.js"
  },
  {
    question: "What are some of the most popular modules of Node.js?",
    type: "Node.js"
  },
  {
    question: "What is <code>EventEmitter</code> in Node.js?",
    type: "Node.js"
  },
  {
    question:
      "What advantage is there for using the arrow syntax for a method in a constructor?",
    type: "JavaScript"
  },
  {
    question: "What is the definition of a higher&minus;order function?",
    type: "JavaScript"
  },
  {
    question:
      "Can you give an example for destructuring an object or an array?",
    type: "JavaScript"
  },
  {
    question:
      "ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?",
    type: "JavaScript"
  },
  {
    question:
      "Can you give an example of a curry function and why this syntax offers an advantage?",
    type: "JavaScript"
  },
  {
    question:
      "What are the benefits of using spread syntax and how is it different from rest syntax?",
    type: "JavaScript"
  },
  {
    question: "How can you share code between files?",
    type: "JavaScript"
  },
  {
    question: "Why might you want to create static class members?",
    type: "JavaScript"
  },
  {
    question:
      "Can you name two programming paradigms important for JavaScript app developers?",
    type: "JavaScript"
  },
  {
    question: "What is functional programming?",
    type: "JavaScript"
  },
  {
    question:
      "What is the difference between classical inheritance and prototypal inheritance?",
    type: "JavaScript"
  },
  {
    question:
      "What are the pros and cons of functional programming vs object&minus;oriented programming?",
    type: "JavaScript"
  },
  {
    question:
      "What are two&minus;way data binding and one&minus;way data flow, and how are they different?",
    type: "JavaScript"
  },
  {
    question:
      "What is asynchronous programming, and why is it important in JavaScript?",
    type: "JavaScript"
  },
  {
    question: "What is recursion and give an example using javascript?",
    type: "CS Theory"
  },
  {
    question: "What are types?",
    type: "CS Theory"
  },
  {
    question: "What are data structures?",
    type: "CS Theory"
  },
  {
    question: "What is an algorithm? ",
    type: "CS Theory"
  },
  {
    question: "What is scope &#x2F; lexical scope in javascript?",
    type: "CS Theory"
  },
  {
    question: "What is polymorphism?",
    type: "CS Theory"
  },
  {
    question: "What is encapsulation?",
    type: "CS Theory"
  },
  {
    question: "What is a Linked List?",
    type: "CS Theory"
  },
  {
    question: "What is a Doubly Linked List?",
    type: "CS Theory"
  },
  {
    question: "What is a Queue?",
    type: "CS Theory"
  },
  {
    question: "What is a Stack?",
    type: "CS Theory"
  },
  {
    question: "What is a Hash Table?",
    type: "CS Theory"
  },
  {
    question: "What is a Heap?",
    type: "CS Theory"
  },
  {
    question: "What is a Trie?",
    type: "CS Theory"
  },
  {
    question: "What is a Tree?",
    type: "CS Theory"
  },
  {
    question: "What is a Binary Search Tree?",
    type: "CS Theory"
  },
  {
    question: "What is a Disjoint Set?",
    type: "CS Theory"
  },
  {
    question: "What is a Bloom Filter?",
    type: "CS Theory"
  },
  {
    question: "Demonstrate Bubble Sort and explain when you might use it.",
    type: "CS Theory"
  },
  {
    question: "Demonstrate Insertion Sort and explain when you might use it.",
    type: "CS Theory"
  },
  {
    question: "Demonstrate Merge Sort and explain when you might use it.",
    type: "CS Theory"
  },
  {
    question: "Demonstrate Quicksort and explain when you might use it.",
    type: "CS Theory"
  }
]

export default cards
