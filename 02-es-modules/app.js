import { company, getUser } from "./user.js";

const user = getUser();

console.log("Company:", company);
console.log("Name:", user.name);
console.log("Age:", user.age);
