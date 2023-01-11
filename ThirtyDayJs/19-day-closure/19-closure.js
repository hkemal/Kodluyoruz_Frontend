function counter() {
  let count = 0;
  function up() {
    count++;
    return count;
  }
  function down() {
    count--;
    return count;
  }
  return {
    yukari: up,
    asagi: down,
  };
}

let count = counter();

console.log(count.yukari());
console.log(count.yukari());
console.log(count.asagi());
console.log(count.yukari());
