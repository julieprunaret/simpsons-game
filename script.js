//first we call the API
axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
  //we wait for the response from the api
  .then(response => {
  //we check the answer
  console.log(response.data[0].quote);
  const quote = response.data[0].quote;
  const author = response.data[0].character;
  const paragraph = document.createElement("p");

  //we create the paragraph inside our body
  paragraph.innerText = quote;
  document.getElementById("quote").appendChild(paragraph);
  //we put the quote inside


  //we create the button for the spoil inside our body
  
  //we put the quote inside
  
  // spoilerButton.adEventlistener("click", () => {
  //   spoilerButton.innerText = quote + "<br>" + " ~ " + author;
  // })
  // spoilerButton.innerText = "spoil me !";
  // finalButton= document.getElementById("button").appendChild(spoilerButton);

  const spoilerButton = document.createElement("button");
  spoilerButton.innerText = "spoil me !";
  spoilerButton.addEventListener('click', () => {
    paragraph.innerText = quote + "    ~    " + author;
  })
  document.getElementById("button").appendChild(spoilerButton);
  })

  document.getElementById("js-reload").addEventListener("click", () => {
    location.reload();
  })


  // appeler l'api
  //afficher les quotes dans la console
  // afficher qu'une quote
  // stocker le nom de son auteur
  // faire un bouton spoile
  //lui faire afficher le nom de l'auteur à la suite de la citation
  //faire un bouton indics
  // au click lui faire suggérer plusieuirs noms dont le bon.