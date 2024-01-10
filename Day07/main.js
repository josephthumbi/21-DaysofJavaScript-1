// Creating an object
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    address: {
      city: "Example City",
      country: "Example Country",
    },
    hobbies: ["Reading", "Gaming", "Coding"],
  };
  
  // Accessing properties of the object
  console.log("First name:", person.firstName);
  console.log("Age:", person["age"]);
  console.log("City:", person.address.city);
  console.log("First hobby:", person.hobbies[0]);
  
  // Modifying properties of the object
  person.age = 26;
  person.address.city = "Updated City";
  person.hobbies.push("Traveling");
  
  console.log("Modified object:", person);
  
  // Adding new properties to the object
  person.email = "john.doe@example.com";
  person["occupation"] = "Software Developer";
  
  console.log("Object with new properties:", person);
  
  // Deleting properties from the object
  delete person.address; // Deleting the entire 'address' property
  delete person["hobbies"]; // Deleting the 'hobbies' property
  
  console.log("Object after deletion:", person);
  
  // Checking if a property exists in the object
  console.log("Has email property:", "email" in person);
  
  // Iterating through the object properties
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  