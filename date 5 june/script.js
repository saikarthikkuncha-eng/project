function calculateMarks() {
    let name = document.getElementById("name").value;
    let sub1 = Number(document.getElementById("sub1").value);
    let sub2 = Number(document.getElementById("sub2").value);

    let total = sub1 + sub2;
    let average = total / 2;

    let bonusTotal = total;
    bonusTotal += 5;

    let greaterThan = sub1 > sub2;
    let equalMarks = sub1 == sub2;

    let bothPass = sub1 > 35 && sub2 > 35;
    let oneAbove90 = sub1 > 90 || sub2 > 90;

    let incSub1 = sub1;
    incSub1++;

    let decSub2 = sub2;
    decSub2--;

    let result = average >= 35 ? "Pass" : "Fail";
    let grade;

    if (average >= 90) {
        grade = "A Grade";
    } else if (average >= 75) {
        grade = "B Grade";
    } else if (average >= 60) {
        grade = "C Grade";
    } else if (average >= 35) {
        grade = "D Grade";
    } else {
        grade = "Fail";
    }

    document.getElementById("result").innerHTML = `
        <h3>${name}</h3>
        <p>Total Marks: ${total}</p>
        <p>Average Marks: ${average}</p>
        <p>Total After Bonus (+5): ${bonusTotal}</p>
        <p>Subject 1 > Subject 2 : ${greaterThan}</p>
        <p>Both Marks Equal : ${equalMarks}</p>
        <p>Both Subjects > 35 : ${bothPass}</p>
        <p>At Least One Subject > 90 : ${oneAbove90}</p>
        <p>Subject 1 After ++ : ${incSub1}</p>
        <p>Subject 2 After -- : ${decSub2}</p>
        <p>Result : ${result}</p>
        <p>Grade : ${grade}</p>
    `;
}
