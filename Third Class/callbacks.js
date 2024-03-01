
//A callback is a function passed as an argument to another function

// function showProduct(prd){
//     console.log(prd)
// }


function getProduct(showProduct){
    var products = ["Audi","Mehran","Toyota","Honda Civic"];
    showProduct(products);
    showProduct(['Watch','Smart Watch','Mobile','Car']);
}
 
//calling the getProduct function

// getProduct(showProduct)

// you can print with annomunas function and with console
// getProduct(function(prd){
//     console.log(prd);
// })

// getProduct(function(prd){
//     for(var i = 0; i<prd.length; i++){
//         document.write(prd[i]);
//         document.write('<br>');
//     }
// })

//We can do as well with for of loop
getProduct(function(prd){
    for(var i of prd){
        document.write(i);
        document.write('<br>');
    }
})