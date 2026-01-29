// Minimal Node.js entry file for github-reminder-lab
// This file exists mainly to give pull requests something to modify.

function greet(name) {
  return `Hello, ${name}!`;
}

function main() {
  const message = greet("GitHub Reminder Lab");
  console.log(message);
}

if (require.main === module) {
  main();
}

module.exports = { greet };


