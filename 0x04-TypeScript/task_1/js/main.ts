interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Index signature for additional properties
}

interface Directors extends Teacher {
 numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string{
return `${firstName[0]} ${lastName}`;
}

interface function printTeacherFunction(){
(firstName: string, lastName: string): string;
}


class TeacherClass implements Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    if (yearsOfExperience) {
      this.yearsOfExperience = yearsOfExperience;
    }
  }
}
