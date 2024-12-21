// calculate total product const from amazon project;
const basketballPrice = 2095;
const tShirtPrice = 799;
const tosterPrice = 1899;
const totalProductPrice = parseFloat(basketballPrice + tShirtPrice + tosterPrice)/100;
// console.log('Total Product Price: ',totalProductPrice)
const shippingAndHandelingCost = 499
const totalCostWithShipping = totalProductPrice + parseFloat(shippingAndHandelingCost)/100;
// console.log('Total cost with shipper: ',totalCostWithShipping)
const taxParcentage = 10/100;
const taxOfProduct = Math.round((basketballPrice + tShirtPrice + tosterPrice + shippingAndHandelingCost) * taxParcentage )/100;
// console.log('Tax of total product: ',taxOfProduct)
const totalCostWithTax = parseFloat(totalCostWithShipping + taxOfProduct);
// console.log('Todal cost with tax: ',totalCostWithTax)


// challenge exercises.
// fahrenheit formula = (celsius * 9/5) + 32;
// celsius formula = (fahrenheit - 32) * 5/9;

// 2l. The temperature is 25C. Calculate the temperature in Fahrenheit; (77);
//2m. The temperature is 86F. Calculate the temperature in celsius (30);
// 2n. The temperature is -5C. Calculate the temperature in Fahrenheit; (23);

const fahrenheit1 = (25 * 9/5) + 32;
const celsius1 = Math.floor((86 - 32) * 5/9);
const fahrenheit2 = (-5 * 9/5) + 32;
console.log(fahrenheit1,celsius1,fahrenheit2);
