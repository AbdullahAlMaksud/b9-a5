const seats = document.getElementsByClassName('seat-button');
let seatCount = parseInt(document.getElementById('seat-count-indicator').innerText);
let seatRemain = parseInt(document.getElementById('remaining-seat').innerText);
const ticketPrice = parseInt(document.getElementById('ticket-price').innerText)

for (const seat of seats) {
    seat.addEventListener('click', function (e) {
        console.log('Bhai AMi Assi')
        seatCount++;
        setInnerText('seat-count-indicator', seatCount);
        seatRemain--;
        setInnerText('remaining-seat', seatRemain);

        e.target.classList.toggle('bg-themecolor');
        const seatNumber = e.target.innerText;
        console.log(seatNumber, ticketPrice)


        const ticketDisplayElement = document.createElement('tr');
        const ticketDisplay = document.getElementById('price-display');
        ticketDisplayElement.innerHTML = `<tr class="border-b-2 border-black">
        <td class="px-0">${seatNumber}</td>
        <td>Economy</td>
        <td class="text-right px-0" class="selected-price">${ticketPrice}</td>
      </tr>`
        ticketDisplay.appendChild(ticketDisplayElement);

        totalPrice += ticketPrice;
        let totalPrice = parseInt(document.getElementById('total-price').innerText);
        setInnerText('total-price', totalPrice);


    })
}


////////////////////////////////////////
/**
 * একটা সিট একবার সিলেক্ট করতে হবে।
 * দ্বিতীয়বার ওইসিটে ক্লিক করলে সেটা বাতিল হয়ে যাবে।
 * সিট চারটার বেশি সিলেক্ট করা যাবে না।
 * চারটা সিট সিলেক্ট করার পর, +কুপন দিলে বাটন অ্যাকটিভ হবে। সিট চারটা না হলে কুপনে কাজ হবে না।
 * কুপনের বাটনে ক্লিক করলে ২০ বা ১৫ পারসেন্ট মাইনাস হয়ে গ্রান্ড প্রাইসে বসবে।
 * একেক কুপনের জন্য একেক প্রাইস ডিসকাউন্ট হবে।
 * 
 * নেক্সট বাটনে ক্লিক করলে সব সরে গিয়ে নতুন উইন্ডো আসবে।
 * নতুন উইন্ডোর কন্টিনিউউ বাটনে ক্লিক করলে আবার এই উইন্ডো আসবে।
 */
/////////////////////////////////

const phoneNumberInputField = document.getElementById('phone-number');
phoneNumberInputField.addEventListener('input', function (e) {
    let phoneNumberText = phoneNumberInputField.value;
    let phoneNumber = parseInt(phoneNumberInputField.value);

    console.log(typeof phoneNumber);

    if (typeof phoneNumber === 'number' && phoneNumber.toString().length >= 10) {
        document.getElementById('next-button').attributes.removeNamedItem('disabled');
    }
    else {
        document.getElementById('next-button').disabled = true
    }
})


const coupleCoupon = textReadyToCompare('couple-coupon');
const newCoupon = textReadyToCompare('new-coupon');
console.log(coupleCoupon);
console.log(newCoupon);
const couponInput = document.getElementById('coupon-input');


couponInput.addEventListener('input', function () {
    const inputText = inputReadyToCompare(couponInput);
    console.log(inputText)

    if (inputText == coupleCoupon || inputText == newCoupon) {
        document.getElementById('apply-button').attributes.removeNamedItem('disabled');
    }
    else {
        document.getElementById('apply-button').disabled = true;
    }
})



// const phoneNumber = document.getElementById('phone-number').value;
// const nextButton = document.getElementById('next-button').attributes.removeNamedItem('disabled');
// console.log(phoneNumber);

// console.log(nextButton);

// if(typeof phoneNumber === 'number' || phoneNumber.length >=2){

//     document.getElementById('next-button').attributes.removeNamedItem('disabled');
// }



//Utility Function
function setInnerText(idName, value) {
    const newElement = document.getElementById(idName);
    newElement.innerText = value;
    return value;
}

function textReadyToCompare(elementID) {
    const elementText = document.getElementById(elementID).innerText.toLocaleLowerCase();
    const elementTextSplit = elementText.split(' ');
    const textReady = elementTextSplit.join('');
    return textReady;
}
function inputReadyToCompare(elementID) {
    const elementText = (elementID).value.toLocaleLowerCase();
    const elementTextSplit = elementText.split(' ');
    const textReady = elementTextSplit.join('');
    return textReady;
}
