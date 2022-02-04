var headerText = document.createElement('h1');
headerText.textContent = 'Welcome To My JS Site';
document.body.append(headerText);

var paragraph = document.createElement('para');
paragraph.textContent = 'All of this was created with Javascript';
document.body.append(paragraph);

var orderedList = document.createElement('ol');
var favoriteColor = document.createElement('li');
favoriteColor.textContent = 'Blue';
orderedList.append(favoriteColor);

var favoriteMovie = document.createElement('li');
favoriteMovie.textContent = 'Spider-Man';
orderedList.append(favoriteMovie);

var nickName = document.createElement('li');
nickName.textContent = 'Yesi';
orderedList.append(nickName);

document.body.append(orderedList);



