const n = 91; // número a ser verificado

const fibonacci = [0, 1];
while (fibonacci[fibonacci.length - 1] < n) {
  fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
}

if (fibonacci.includes(n)) {
  console.log(`O número ${n} pertence à sequência de Fibonacci!`);
} else {
  console.log(`O número ${n} não pertence à sequência de Fibonacci.`);
}
