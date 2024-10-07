export default function getStudentsByLocation(data, city) {
  return data.filter((student) => student.location === city);
}
