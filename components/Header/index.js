// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


const headerContainer = document.querySelector('.header-container');
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

console.log(today);

function Header(data) {
    // Variable
    const header = document.createElement('div'),
        date = document.createElement('span'),
        title = document.createElement('h1'),
        temp = document.createElement('span');

    // Class Specification
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // Appends
    header.append(date);
    header.append(title);
    header.append(temp);

    date.textContent = today;
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';



    return header;
}

headerContainer.append(Header());