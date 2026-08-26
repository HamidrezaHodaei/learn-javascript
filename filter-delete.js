const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const bigNumber = number.filter(num => num > 5)
console.log(bigNumber); // Output: [6, 7, 8, 9, 10]

let tasks = [
    {id: 1, title: "read a book", completed: false},
    {id: 2, title: "write a blog post", completed: false}
];
const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !==id);
}
deleteTask(1);
console.log(tasks);
