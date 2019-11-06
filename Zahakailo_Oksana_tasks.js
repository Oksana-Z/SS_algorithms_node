module.exports = {
  task178b: function task178b(inq) {
    return new Promise(function(resolve) {
      inq
        .prompt({
          type: 'input',
          name: 'value',
          message:
            'Zahakailo Oksana: Task 178b\n> Given natural numbers. Calculate amount of numbers, which are multiples of 3 and not multiple of 5'
              .green +
            '\n? Please type natural numbers in my console >>>'.yellow
        })
        .then(({ value }) => {
          if (value === 'back' || value === 'exit') {
            resolve(value);
          } else {
            const arr = value.split(',').map(i => +i);
            arr.forEach(a => {
              if (Number.isNaN(a) || a < 1) {
                console.log(
                  'Please try again and type correct value'.red +
                    '\nP.S. You can type exit to finish the whole program'.green +
                    '\nOr you can type back to return on tasks menu\n\n'.green
                );
                setTimeout(() => {
                  resolve(task178b(inq));
                }, 2000);
              }
            })
            const counter = arr.filter(num => num % 3 === 0 && num % 5 !== 0).length
            console.log(`Amount of numbers, which are multiples of 3 and not multiple of 5: ${counter}`)
              setTimeout(() => {
                resolve('back');
              }, 2000);
          }
        });
    });
  },
  task178w: function task178w(inq) {
    return new Promise(function(resolve) {
      inq
        .prompt({
          type: 'input',
          name: 'value',
          message:
            'Zahakailo Oksana: Task 178w\n> Given natural numbers. Calculate amount of numbers, which are squares of natural even numbers'
              .green +
            '\n? Please type natural numbers in my console >>>'.yellow
        })
        .then(({ value }) => {
          if (value === 'back' || value === 'exit') {
            resolve(value);
          } else {
            const arr = value.split(',').map(i => +i);
            arr.forEach(a => {
              if (Number.isNaN(a) || a < 1) {
                console.log(
                  'Please try again and type correct value'.red +
                    '\nP.S. You can type exit to finish the whole program'.green +
                    '\nOr you can type back to return on tasks menu\n\n'.green
                );
                setTimeout(() => {
                  resolve(task178w(inq));
                }, 2000);
              }
            })
            const evenNaturalNumbers = arr.filter(num => num % 2 === 0)
            let calculator = 0
            evenNaturalNumbers.forEach(function (evenNum) {
              if (Math.sqrt(evenNum) % 2 === 0) {
                calculator++
              }
            })
            console.log(`Amount of numbers, which are squares of natural even numbers: ${calculator}`)
              setTimeout(() => {
                resolve('back');
              }, 2000);
          }
        });
    });
  },
  task554: function task554(inq) {
    return new Promise(function(resolve) {
      inq
        .prompt({
          type: 'input',
          name: 'value',
          message:
            'Given natural number n. Get all the Pythagorean triples of natural numbers, each of which does not exceed n. a * a + b * b = c * c (a ≤ b ≤ c ≤ n)'
              .green +
            '\n? Type a number greater than 1 in my console. Please don\'t try anything except numbers >>>'
              .yellow
        })
        .then(({ value }) => {
          if (value === 'back' || value === 'exit') {
            resolve(value);
          } else {
            const n = Number(value);
            if (!Number.isNaN(n) && n > 1) {
              for (let a = 1; a < n; a++) {
                for (let b = a; b < n; b++) {
                  const c = Math.sqrt(a * a + b * b)
                  if (c % 1 === 0 && c <= n) {
                    console.log(`Pythagorean triple: ${a}, ${b}, ${c}`)
                  }
                }
              }
              setTimeout(() => {
                resolve('back');
              }, 2000);
            } else {
              console.log(
                'Please try again and type correct value'.red +
                  '\nP.S. You can type exit to finish the whole program'.green +
                  '\nOr you can type back to return on tasks menu\n\n'.green
              );
              setTimeout(() => {
                resolve(task554(inq));
              }, 2000);
            }
          }
        });
    });
  }
};
