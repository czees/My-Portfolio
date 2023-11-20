let readPara = document.getElementById('about');
let fform = getElementById('form')
let submitButon = document.getElementsByClassName('submit');
let logo = document.getElementByClassName('mypic');


function colorChangePara (){
    readPara.style.color = 'Blue';
};

function formChange (){
    fform.style.backgroundColor = 'Blue'
};

function subbimt (){
    submitButon.style.backgroundColor = 'Red'
};

function transfform (){
    logo.style.transform = 'translate(-80px, 0px)';
    logo.style.transition = 'transform 2s ease-in-out 0.21s';
};



submitButon.addEventListener('mouseover', subbimt);
logo.addEventListener('mouseover', transfform);
readPara.addEventListener('mouseover', colorChangePara);
fform.addEventListener('mouseover', formChange);