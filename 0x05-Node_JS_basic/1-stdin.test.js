const { spawn } = require('child_process');
const path = require('path');

const exec = path.join(__dirname, '.', '1-stdin.js');

test('the user is entering a name', (done) => {
  const proc = spawn("node", [exec], { stdio: 'pipe' });

  proc.stdout.once('data', (test) => {
    expect(test.toString()).toBe('Welcome to Holberton School, what is your name?\n');
    proc.stdin.write('Guillaumeh\n');
    proc.stdout.once('data', (test) => {
      expect(test.toString()).toBe('Your name is: Guillaumeh\n');
      done();
    });
  });
});
