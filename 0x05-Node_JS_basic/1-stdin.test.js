process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const InPut = process.stdin.read();

  if (InPut) {
    process.stdout.write(`Your name is: ${InPut}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});