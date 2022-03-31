let studentRecords = [ 
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 }
]


// Q1 : We are interested in retrieving only the name of the students and all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']

let firstName = studentRecords.map(s => s.name.toUpperCase());
console.log(firstName)


let names = []

studentRecords.forEach(student => {
    names.push(student.name.toUpperCase());
})

console.log(names)                                               // ['JOHN', 'BABA', 'YAGA', 'WICK']

// document.getElementById("txt").innerText = names;



// Q2 : Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]

let data = studentRecords.filter(student => student.marks > 50);
console.log(data)                                                            //  [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]



// Q3 : Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let MarkId = studentRecords.filter(student => student.marks > 50 && student.id > 120)
console.log(MarkId)                                                                          // {name: 'John', id: 123, marks: 98}



// Q4 : Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let SumofMarks = studentRecords.reduce(((acc,curr) => acc + curr.marks),0);
console.log(SumofMarks)                                                              // 241



// Q5 : This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let StudentName = studentRecords.filter(student => student.marks > 50).map(student => student.name);
console.log(StudentName)                                                                                   // ['John', 'Wick']



// Q6 : This time we are required to print the sum of marks of the students with id > 120.

let totalMarks = studentRecords.filter(student => student.id > 120).reduce(((acc,curr) => acc + curr.marks), 0)
console.log(totalMarks)                                                                                            // 143



// Q7 : This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let TotalMarkswithGrace = studentRecords.map(function(student) {
    if (student.marks < 50) {
        student.marks += 15                                     // student.marks = student.marks + 15
    }
    return student;
}).filter(student => student.marks > 50).reduce(((acc,curr) => acc + curr.marks),0);

console.log(TotalMarkswithGrace)                                                                // 233



// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.

let Students = [
    {name: 'Agstya', class: 'BE', rollno: 01},
    {name: 'Justin', class: 'BE', rollno: 02},
    {name: 'Harry', class: 'BE', rollno: 03},
    {name: 'Peter', class: 'BE', rollno: 04},
    {name: 'Rahul', class: 'BE', rollno: 05},
    {name: 'Mohin', class: 'BE', rollno: 06}
]

console.log(Students)

// for(let i = 0; i < Students.length; i++) {
//     document.write(Students[i].name + " " + Students[i].class + " " + Students[i].rollno + "<br>")
// }
