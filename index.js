import { a } from "./Higherorder.js";
const companies = [
  { name: "hyundai", category: "finance" },
  { name: "maruti", category: "retial" },
  { name: "lambo", category: "auto" },
];
console.log(a)
// array of objects

// for (let i = 0; i < companies.length; i++) {
// console.log(companies.name[i]);

// }

/*companies.forEach(function(company){

    console.log(company.name);
})
companies.forEach(function(company){

    console.log(company.category);
});*/

const showcompany = companies.filter((company) => company.name == "hyundai");
// return (company.name);

console.log(showcompany);
