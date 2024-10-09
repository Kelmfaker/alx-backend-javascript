export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  try {
    if (position >= length || position < 0) {
      throw new Error('Position outside range');
    }
    view.setInt8(position, value);
  } catch (error) {
    console.error(error.message);
  }
  return view;
}
