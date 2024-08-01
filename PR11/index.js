class employe {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    this.leave = 4;
  }

  takeLeave(days) {
    if (this.leave >= days) {
      this.leave -= days;
      return `You have taken ${days} leave. Remaining leave: ${this.leave}`;
    } else {
      return "You don't have enough leave";
    }
  }
}

class Manager extends employe {
  constructor(name, salary) {
    super(name, salary);
  }

  removeEmploy(employee) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].name === employee.name) {
        this.employees.splice(i, 1);
        return `${employee.name} has been removed from the team`;
      }
    }
    return `${employee.name} is not found on the team`;
  }

  checkEmployee(employee) {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].name === employee.name) {
        return `${employee.name} is on the team`;
      }
    }
    return `${employee.name} is not on the team`;
  }
}

let manager = new Manager("Manager", 5000);

let employee1 = new employe("kohli", 3000);
let employee2 = new employe("Brett Lee", 5000);

manager.employees = [employee1, employee2];

console.log(manager.removeEmploy(employee2));
console.log(manager.checkEmployee(employee2));
