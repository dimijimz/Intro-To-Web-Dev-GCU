window.onload = initialize; // Call the initialize function on page load

function initialize() {
    console.log("In initialize()"); // Display start message
    conditions(); // Call the conditions function
    loops(); // Call the loops function
    objects(); // Call the objects function
}

function conditions() {
    const number = 7;
    if (number > 5) {
        console.log("The number is greater than 5.");
    } else {
        console.log("The number is 5 or less.");
    }
}

function loops() {
    console.log("Starting loops...");

    // For Loop
    console.log("For Loop:");
    for (let i = 0; i < 5; i++) {
        console.log("i = " + i);
    }

    // While Loop
    console.log("While Loop:");
    let j = 0;
    while (j < 5) {
        console.log("j = " + j);
        j++;
    }

    // Using Break
    console.log("Using Break:");
    for (let k = 0; k < 10; k++) {
        if (k === 5) {
            console.log("Breaking at k = " + k);
            break;
        }
        console.log("k = " + k);
    }
}

function objects() {
    console.log("Learning JavaScript Objects...");

    // Object definition
    let car = {
        brand: "Toyota",
        model: "Corolla",
        year: 2000,
        getCarInfo: function() {
            return `${this.brand} ${this.model} (${this.year})`;
        }
    };

    // Accessing object properties
    console.log("Car brand: " + car.brand);
    console.log("Car model: " + car.model);
    console.log("Car year: " + car.year);

    // Calling object method
    console.log("Car info: " + car.getCarInfo());

    // Adding a new property
    car.color = "Blue";
    console.log("Car color: " + car.color);

    // Using Object Constructor
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    let person1 = new Person("John", 30);
    console.log("Person Name: " + person1.name + ", Age: " + person1.age);
}
