export default function getListStudentIds(data) {
  if (!Array.isArray(data)) {
    return [];
  }
  return data.map((item) => item.id);
}
