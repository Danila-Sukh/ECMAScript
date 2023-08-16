// Задание 1
class Employee {
    constructor(name) {
        this.name = name
    }
    displayInfo() {
        console.log(`Имя сотрудника: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name)
        this.department = department
    }
    displayInfo() {
        console.log(`Имя сотрудника: ${this.name}. Department: ${this.department}`);
    }
}

const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

// Задание 2
class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber
    }
    products = []
    addProduct(product){
        this.products.push(product)
        console.log(this.products);
    }
    getTotalPrice(){
        let totalPrice = 0
        for(let key of this.products) {
            if(key.price) {
                totalPrice += key.price
            }
        }
        return totalPrice
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice())