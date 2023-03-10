function increment(elementId) {
    const elementById = document.getElementById(elementId)
    const elementStringValue = elementById.value;
    const elementNumValue = parseFloat(elementStringValue)

    if (elementNumValue > 0) {
        const totalElementNum = elementNumValue + 1;
        elementById.setAttribute("value", totalElementNum);
        return totalElementNum;
    }
}
function decrement(elementId) {
    const elementById = document.getElementById(elementId)
    const elementStringValue = elementById.value;
    const elementNumValue = parseFloat(elementStringValue)
    if (elementNumValue > 1) {
        const totalElementNum = elementNumValue - 1;
        elementById.setAttribute("value", totalElementNum);
        return totalElementNum;
    }
}
function priceIncrement(elementAmount, elementId, elementPrice) {
    const itemId = document.getElementById(elementId) //1200
    const itemPriceString = itemId.innerText;
    const itemPriceNum = parseFloat(itemPriceString) // 1200 num
    // if (elementAmount > 0) {
    if (elementAmount >= 0) {
        const itemTotalPrice = itemPriceNum + elementPrice;
        itemId.innerText = itemTotalPrice;
        return itemTotalPrice;
    }
}


function priceDecrement(elementAmount, elementId, elementPrice) {
    const itemId = document.getElementById(elementId) //1200
    const itemPriceString = itemId.innerText;
    const itemPriceNum = parseFloat(itemPriceString) // 1200 num
    if (elementAmount >= 0) {
        const itemTotalPrice = itemPriceNum - elementPrice;
        itemId.innerText = itemTotalPrice;

        return itemTotalPrice;
    }
}

function totalPrice(elementId, itemPrice, itemAmount) {
    const subTotalId = document.getElementById('sub-total')
    const subTotalString = subTotalId.innerText;
    const subTotalNum = parseFloat(subTotalString);

    let subTotal;
    if (elementId === "phone-plus" || elementId === "case-plus") {
        subTotal = subTotalNum + itemPrice;
    } else {
        subTotal = subTotalNum - itemPrice;
    }
    subTotalId.innerText = subTotal;
    document.getElementById('tax').innerText = subTotal / 10;
    document.getElementById('in-total-price').innerText = subTotal + (subTotal / 10);
}


// -----------------phone container 
document.getElementById('phone-plus').addEventListener('click', function () {
    const elementAmount = increment("phone-number");
    const priceTotal = priceIncrement(elementAmount, "phone-total-price", 1200)
    totalPrice("phone-plus", 1200, elementAmount)
})

document.getElementById('phone-minus').addEventListener('click', function () {
    const elementAmount = decrement("phone-number")
    const priceTotal = priceDecrement(elementAmount, "phone-total-price", 1200)
    totalPrice("phone-minus", 1200, elementAmount)
})



// ---->>>>>>>>>>>>>>>>  case container=======
document.getElementById('case-plus').addEventListener('click', function () {
    const elementAmount = increment("case-number");
    const priceTotal = priceIncrement(elementAmount, "case-total-price", 60)
    totalPrice("case-plus", 60, elementAmount)
})

document.getElementById('case-minus').addEventListener('click', function () {
    const elementAmount = decrement("case-number")
    const priceTotal = priceDecrement(elementAmount, "case-total-price", 60)
    totalPrice("case-minus", 60, elementAmount)

})