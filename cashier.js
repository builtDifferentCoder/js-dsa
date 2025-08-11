const Queue = require("./queue");
class Customer {
  constructor(name, order) {
    this.name = name;
    this.order = order;
  }
}

class Cashier {
  constructor() {
    this.customers = new Queue();
  }
  addCustomer(customer) {
    this.customers.enqueue(customer);
  }
  deliverOrder() {
    var finished = this.customers.dequeue();
    console.log("Name:" + finished.name + " Order:" + finished.order);
  }
}

var customer1 = new Customer("Hamza", "Processed chicken");
var customer2 = new Customer("Zambi", "Chips");
const cashier = new Cashier();
cashier.addCustomer(customer1);
cashier.addCustomer(customer2);
cashier.deliverOrder();
