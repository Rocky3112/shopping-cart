function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    console.log(phoneTotalElement);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function calculateSubTotal(){
    
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal= currentPhoneTotal + currentCaseTotal;
    console.log(currentSubTotal);

    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;    


}