const seats = document.getElementsByClassName('seat-button');

let seatCount = parseInt(document.getElementById('seat-count-indicator').innerText);
let seatRemain = parseInt(document.getElementById('remaining-seat').innerText);
const ticketPrice = parseInt(document.getElementById('ticket-price').innerText)

for (const seat of seats){
    seat.addEventListener('click', function(e){
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
        ticketDisplayElement.innerHTML = `<tr class="">
        <td class="px-0">${seatNumber}</td>
        <td>Economy</td>
        <td class="text-right px-0">${ticketPrice}</td>
      </tr>`

      ticketDisplay.appendChild(ticketDisplayElement);
    })
}


//Utility Function
function setInnerText(idName, value){
    const newElement = document.getElementById(idName);
    newElement.innerText = value;
}