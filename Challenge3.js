const KRA_PERCENTAGE = 0.3;
const NHIF_PERCENTAGE = 0.025;
const NSSF_PERCENTAGE = 0.06;
const KRA_DEDUCTION_THRESHOLD = 28800;
const NHIF_DEDUCTION_MAX = 1700;

function calculateNetSalary(basicSalary, benefits) {
  // Calculate gross salary
  const grossSalary = basicSalary + benefits;
  
  // Calculate KRA deduction
  const kraDeduction = grossSalary >= KRA_DEDUCTION_THRESHOLD ? grossSalary * KRA_PERCENTAGE : 0;
  
  // Calculate NHIF deduction
  const nhifDeduction = Math.min(grossSalary * NHIF_PERCENTAGE, NHIF_DEDUCTION_MAX);
  
  // Calculate NSSF deduction
  const nssfDeduction = grossSalary * NSSF_PERCENTAGE;
  
  // Calculate total deductions
  const totalDeductions = kraDeduction + nhifDeduction + nssfDeduction;
  
  // Calculate net salary
  const netSalary = grossSalary - totalDeductions;
  
  // Output results
  console.log(`Gross Salary: KES ${grossSalary}`);
  console.log(`KRA Deduction: KES ${kraDeduction}`);
  console.log(`NHIF Deduction: KES ${nhifDeduction}`);
  console.log(`NSSF Deduction: KES ${nssfDeduction}`);
  console.log(`Total Deductions: KES ${totalDeductions}`);
  console.log(`Net Salary: KES ${netSalary}`);
}

// Example usage
calculateNetSalary(50000, 10000);
