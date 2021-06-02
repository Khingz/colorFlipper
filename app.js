const btn = document.getElementById('basic-btn')
const main = document.querySelector('main');
const colorIdentity = document.getElementById('color-identity');



const basicColors = ['red', 'blue', '#2A3662', '#A9E199', '#AE5799', '#8C800C', '#B49059',	'#E831E9', '#38329D', '#EFD174', '#838589', '#371BA0', 'rgb(128,0,0)', 'rgb(255,0,255)']


btn.addEventListener('click', () => {
    let i = parseInt(Math.random() * basicColors.length);
    color = basicColors[i];
    main.style.backgroundColor = `${color}`;
    colorIdentity.innerText = color;
})


