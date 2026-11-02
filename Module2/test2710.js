let value = "Hello, World!";

doSomething(() => {
  value = "Hello, Universe!";
});

console.log(value); // "Hello, World!" or "Hello, Universe?"

// Synchronous
function doSomething(callback) {
  callback();
}

// Asynchronous
function doSomething(callback) {
  setTimeout(callback, 0);
}