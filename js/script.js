const seats = document.getElementsByClassName('seat-button');
let seatCount = parseInt(document.getElementById('seat-count-indicator').innerText);
let seatRemain = parseInt(document.getElementById('remaining-seat').innerText);
const ticketPrice = parseInt(document.getElementById('ticket-price').innerText);
let selectedTotalPrice = 0;
const selectedSeatArray = [];

for (const seat of seats) {
    seat.addEventListener('click', function (e) {

        // console.log('Bhai AMi Assi')
        const seatNumber = e.target.innerText;
        if (!selectedSeatArray.includes(seatNumber)) {

            if (selectedSeatArray.length >= 4) {
                alert('তুমি সীমা লঙ্ঘন করিতেছো');
                return;
            }
            selectedSeatArray.push(seatNumber);
            e.target.classList.toggle('bg-themecolor');
            seatCount = selectedSeatArray.length;
            setInnerText('seat-count-indicator', seatCount);
            seatRemain = 40 - selectedSeatArray.length;
            setInnerText('remaining-seat', seatRemain);



            const ticketDisplayElement = document.createElement('tr');
            const ticketDisplay = document.getElementById('price-display');
            ticketDisplayElement.innerHTML = `<tr class="border-b-2 border-black">
            <td class="px-0">${seatNumber}</td>
            <td>Economy</td>
            <td class="text-right px-0" id="selected-price">${ticketPrice}</td>
          </tr>`

            ticketDisplay.appendChild(ticketDisplayElement);
            const selectedPrice = parseInt(document.getElementById('selected-price').innerText);
            selectedTotalPrice = selectedTotalPrice + selectedPrice;


        }
        else {
            e.target.classList.toggle('bg-themecolor');
        }
        console.log(selectedSeatArray);







        setInnerText('total-price', selectedTotalPrice);
        setInnerText('grand-price', selectedTotalPrice);






        const coupleCoupon = textReadyToCompare('couple-coupon');
        const newCoupon = textReadyToCompare('new-coupon');
        const couponInput = document.getElementById('coupon-input');
        couponInput.addEventListener('input', function () {
            const inputText = inputReadyToCompare(couponInput);
            if (inputText == coupleCoupon && parseInt(seatCount) >= 4) {
                const applyButton = document.getElementById('apply-button');
                applyButton.attributes.removeNamedItem('disabled');
                applyButton.addEventListener('click', function () {
                    const discountPrice = (selectedTotalPrice * 20) / 100;
                    const grandPrice = selectedTotalPrice - discountPrice;
                    setInnerText('grand-price', grandPrice);
                    document.getElementById('coupon-apply-section').classList.add('hidden');
                })
            }
            else if (inputText == newCoupon && parseInt(seatCount) >= 2) {
                const applyButton = document.getElementById('apply-button');
                applyButton.removeAttribute('disabled');
                applyButton.addEventListener('click', function () {
                    const discountPrice = (selectedTotalPrice * 15) / 100;
                    const grandPrice = selectedTotalPrice - discountPrice;
                    setInnerText('grand-price', grandPrice);
                    document.getElementById('coupon-apply-section').classList.add('hidden');
                })
            }
            else {
                document.getElementById('apply-button').disabled = true;
            }
        })

    })
}


////////////////////////////////////////
/**
 * একটা সিট একবার সিলেক্ট করতে হবে।
 * দ্বিতীয়বার ওইসিটে ক্লিক করলে সেটা বাতিল হয়ে যাবে।
 * 
 * 
 * নেক্সট বাটনে ক্লিক করলে সব সরে গিয়ে নতুন উইন্ডো আসবে।
 * নতুন উইন্ডোর কন্টিনিউউ বাটনে ক্লিক করলে আবার এই উইন্ডো আসবে।
 * সিট চারটার বেশি সিলেক্ট করা যাবে না।
 * চারটা সিট সিলেক্ট করার পর, +কুপন দিলে বাটন অ্যাকটিভ হবে। সিট চারটা না হলে কুপনে কাজ হবে না।
 * কুপনের বাটনে ক্লিক করলে ২০ বা ১৫ পারসেন্ট মাইনাস হয়ে গ্রান্ড প্রাইসে বসবে।
 * একেক কুপনের জন্য একেক প্রাইস ডিসকাউন্ট হবে।
 */
/////////////////////////////////

const phoneNumberInputField = document.getElementById('phone-number');
phoneNumberInputField.addEventListener('input', function () {
    let phoneNumber = parseInt(phoneNumberInputField.value);
    if (typeof phoneNumber === 'number' && phoneNumber.toString().length >= 10) {
        document.getElementById('next-button').attributes.removeNamedItem('disabled');
    }
    else {
        document.getElementById('next-button').disabled = true
    }
})


//Utility Function
function setInnerText(idName, value) {
    const newElement = document.getElementById(idName);
    newElement.innerText = value;
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
