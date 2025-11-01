const months = ["January", "Febuary", "March", "April", "May", "December"];

// const capitalMonths = months.map((month,index,array) => {
//     console.log(index+1,month);
//     return month.toUpperCase();
// });

// const filteredMonths = months.filter((month,index,array) => {
//     console.log( month.toLocaleLowerCase().includes('m'));
//     return month.toLocaleLowerCase().includes('m');
// });


// const filteredMonths = months.filter((month, index, array) => {
//     // console.log( month.toLocaleLowerCase().includes('m'));
//     return index >= 3;
// });

const students = [
    {
        name: 'Yogesh',
        age: 17,
    },
    {
        name: 'Anuj',
        age: 18,
    },
    {
        name: 'Yuvi',
        age: 28,
    },
    {
        name: 'Ajay',
        age: 32,
    },
    {
        name: 'Nidhi',
        age: 16
    },
]

const adultStudents = students.filter((student) => {
    return student.age >= 18
}).map((student) => {
    return student.name
}).filter((student)=>{
    return student.includes('A')
})

