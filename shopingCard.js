//Module(28: 1-3)
/*
function productNumber(product, price, isIncreasing) { //M(28-3)
    const productInput = document.getElementById(product + '-number');//m(28-2)
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        // এটার কাজ হলো যদি আমি সংখ্যাকে ০ এর চেয়ে বড় হয় তাহলে  এটা কাজ করবে না 
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber; // এটা এখানে দেয়ার কারণ হলো  যাতে করে number এর সাথে এটা যোগ হয়
    //update  total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
}
//phone increse and decrease  //M(28-3)
document.getElementById('phone-plus').addEventListener('click', function () {
    productNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    productNumber('phone', 1259, false)
})


//handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    productNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    productNumber('case', 59, false);
})
*/

//--------------------------module:28-4---------------------------
//Module(28:4)


function productNumber(product, price, isIncreasing) { //M(28-3)
    const productInput = document.getElementById(product + '-number');//m(28-2)
    console.count('how much clicked:-')
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber; // এটা এখানে দেয়ার কারণ হলো  যাতে করে number এর সাথে এটা যোগ হয়
    //update  total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal()
}

function getInputValue(product) {
    const phoneInput = document.getElementById(product + '-number');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
    
}

function FcalculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tex = subTotal / 10;
    const totalPrice = tex + subTotal;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tex-amount').innerText = tex;
    document.getElementById('total-price').innerText = totalPrice;

    console.log(total)
}
//phone increse and decrease  //M(28-3)
document.getElementById('phone-plus').addEventListener('click', function () {
    productNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    productNumber('phone', 1219, false)
})


//handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    productNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    productNumber('case', 59, false);
})