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
//Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
const readlineSync = __importStar(require("readline-sync"));
let alien_color = readlineSync.question("Input Alien color: \nAvailable Colors: Yellow, Red or Green\nInput here: ");
console.log("The Alien color is: " + alien_color);
const lowerCaseInput = alien_color.toLowerCase();
if (lowerCaseInput === 'green') { // === checks both the value and the type of the operands.
    console.log("You just earned 5 points");
}
else if (lowerCaseInput === 'yellow') {
    console.log("You just earned 10 points");
}
else if (lowerCaseInput === 'red') {
    console.log("You just earned 15 points");
}
else {
    console.log("Invalid alien color. No points earned.");
}
