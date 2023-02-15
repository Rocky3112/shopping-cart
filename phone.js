function updatePhoneNumber(isIncrease){
    const phoneNumberField =document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value ;
    const previousPhoneNumber = parseInt(phoneNumberString);
    
    let newPhoneNumber;
    if(isIncrease == true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
        
    }
     
    phoneNumberField.value =newPhoneNumber; 
    return newPhoneNumber;
}
//calculate total phone price
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;

    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;

}
//calculate total phone button by function
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber= updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubTotal();

});
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber= updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    
    calculateSubTotal();
});