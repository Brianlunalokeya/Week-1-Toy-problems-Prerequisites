function generateGrade() {
    const mark = prompt("Enter student mark (between 0 and 100):");
    
    if (mark >= 80) {
      return "A";
    } else if (mark >= 60) {
      return "B";
    } else if (mark >= 50) {
      return "C";
    } else if (mark >= 40) {
      return "D";
    } else {
      return "E";
    }
  }
  
  const grade = generateGrade();
  console.log(`The student's grade is ${grade}`);
  