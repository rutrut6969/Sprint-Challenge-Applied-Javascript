// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container');


function cards(data) {
    const card = document.createElement('div'),
        headline = document.createElement('div'), // Nested inside Card
        author = document.createElement('div'), // Nested inside Headline
        authImgContainer = document.createElement('div'), // Nested inside Author
        authImg = document.createElement('img'), // Nested Inside Image Container
        authName = document.createElement('span'); // Nested inside of Author

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    authImgContainer.classList.add('img-container');

    card.append(headline);
    card.append(author);
    author.append(authImgContainer);
    author.append(authName);
    authImgContainer.append(authImg);

    headline.textContent = data.headline;
    authImg.setAttribute('src', `../.${data.authorPhoto}`);
    // console.log(authImg);
    authName.textContent = data.authorName;



    return card;
};

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const articles = response.data.articles;
        // console.log(response.data);
        // console.log(articles.javascript);
        articles.javascript.forEach(element => {
            cardsContainer.append(cards(element));
        });
        articles.bootstrap.forEach(element => {
            cardsContainer.append(cards(element));
        });
        articles.technology.forEach(element => {
            cardsContainer.append(cards(element));
        });
        articles.jquery.forEach(element => {
            cardsContainer.append(cards(element));
        });
        articles.node.forEach(element => {
            cardsContainer.append(cards(element));
        });
    })
    .catch(err => console.log(err));



//     javascript: (4) [{…}, {…}, {…}, {…}]
// bootstrap: (3) [{…}, {…}, {…}]
// technology: (3) [{…}, {…}, {…}]
// jquery: (3) [{…}, {…}, {…}]
// // node: (2) [{…}, {…}]