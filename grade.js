function calculate(arr) {
    let total = 0; 
    let totalCreditHour=0;
    for (let i=0;i<arr.length;i++) {
        totalCreditHour+=arr[i].creditHour;
    }
    for (let i=0;i<arr.length;i++) {
        e=arr[i]; 
        if (e.grade.toUpperCase() == "A") {
            total+=e.creditHour*4;
        } 
        else if (e.grade.toUpperCase() == "A+") {
            total+=e.creditHour*4;
        } 
        else if (e.grade.toUpperCase() == "A-") {
            total+=e.creditHour*3.7;
        }
        else if (e.grade.toUpperCase() == "B") {
            total+=e.creditHour*3;
        } 
        else if (e.grade.toUpperCase() == "B+") {
            total+=e.creditHour*3.5;
        }
        else if (e.grade.toUpperCase() == "B-") {
            total+=e.creditHour*2.7;
        } 
        else if (e.grade.toUpperCase() == "C") {
            total+=e.creditHour*2;
        }
        else if (e.grade.toUpperCase() == "C-") {
            total+=e.creditHour*1.7;
        } 
        else if (e.grade.toUpperCase() == "C+") {
            total+=e.creditHour*2.5;
        }
        else if (e.grade.toUpperCase() == "D") {
            total+=e.creditHour*1;
        } 
        else if (e.grade.toUpperCase() == "F") {
            total+=e.creditHour*0;
        }
    }
    return total/totalCreditHour;
}

console.log(calculate([{grade:"A", creditHour: 4}, {grade:"B-", creditHour: 3},  {grade:"C+", creditHour: 2}]));