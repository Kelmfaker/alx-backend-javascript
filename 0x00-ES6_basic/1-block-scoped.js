export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  return [task, task2];

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }
}
