"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
let ageInput = readlineSync.question("Input age: ");
let age = parseInt(ageInput, 10); // Convert string to number
console.log("Age entered is: " + age);
if (age < 2) {
    console.log("Person is a baby");
}
else if (age >= 2 && age <= 4) {
    console.log("Person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("Person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("Person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("Person is an adult");
}
else {
    console.log("Person is an elder");
}
