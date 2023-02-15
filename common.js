function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    console.log(phoneTotalElement);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const subTotalElement =document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    //calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal= currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total', currentSubTotal);
    
    //calculate tax
    const taxTotalString = (currentSubTotal * 0.1).toFixed(2);
    const taxTotal = parseFloat(taxTotalString);
    setTextElementValueById('tax-total', taxTotal);

    const finalAmount = currentSubTotal + taxTotal;
    setTextElementValueById('final-total', finalAmount);
}