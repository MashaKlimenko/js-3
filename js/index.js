var clientData = ['John', 'James', 'Jacke'];


var $clientData = document.getElementById('client-data')[0];
clientData.forEach(function(el){
    $clientData.innerHTML += '<li>' + el + '</li>';
});


var h1 = document.getElementByTagName('h1')[0];
h1.style.display = 'none';

