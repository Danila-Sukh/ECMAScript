// Задание 1
class Book {
    title = 'Azbuka';
    author = 'Kirill and Mefodiy';
    pages = 1;
    constructor() {
        this.displayInfo = this.displayInfo.bind(this)
    }
    displayInfo() {
        console.log('Title:',this.title, ",", "Author:", this.author, ",", "Pages:", this.pages);
    }
}
const someBook = new Book()

// Задание 2
class Student {
    constructor(name, age, grade) {
        this.name = name
        this.age = age
        this.grade = grade
    }
    displayInfo() {
        console.log(`name: ${this.name}, age: ${this.age}, grade: ${this.grade}`);
    }
}

const student1 = new Student("John Smith", 16, "10th")
student1.displayInfo()

const student2 = new Student("Jane Doe", 17, "11th");
student2.displayInfo();