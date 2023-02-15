function updateCaseNumber(isIncrease){
    const caseNumberField =document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value ;
    const previousCaseNumber = parseInt(caseNumberString);
    
    let newCaseNumber;
    if(isIncrease == true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
//   break; does not work why i dont know
//i want to ignore negative value
        
    }
     
    caseNumberField.value =newCaseNumber; 
    return newCaseNumber;
}
//calculate total case price
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;

    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;

}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber= updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
    
});
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber= updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
    

});