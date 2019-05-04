const validateForm = function(){
    var  pizzaCount = document.forms["orderForm"]["pizza-count"].value;
    var  pizzaPrice = document.forms["orderForm"]["pizza-price"].value;
    var  lasagnaCount = document.forms["orderForm"]["lasagna-count"].value;
    var  lasagnaPrice = document.forms["orderForm"]["lasagna-count"].value;
    var checker = [pizzaCount, pizzaPrice, lasagnaCount, lasagnaPrice];
    for(var i=0; i< checker.length;i++){
        if(checker[i] <= 0 || checker[i]==""){
            alert("Invalid amount");
            return false;
        }
    }
}