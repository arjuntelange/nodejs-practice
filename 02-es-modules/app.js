import { createUser } from "./user.js";

const userInfo = createUser("Arjun", 19);

console.log(`Name: ${userInfo.name}\nAge: ${userInfo.age}`);
