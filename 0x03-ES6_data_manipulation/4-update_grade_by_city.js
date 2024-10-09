export default function updateStudentGradeByCity(data, city, newGrades) {
// Filtering Students by City

  const dataLoc = data.filter((student) => student.location === city);

  // Handling the Case When newGrades is Not Provided
  return dataLoc.map((student) => {
    if (!newGrades) {
      return {
        ...student, grade: 'N/A',
      };
    }

    // Updating Grades When newGrades is Provided
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: newGrade ? newGrade.grade : student.grade,
    };
  });
}
