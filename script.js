// dropdown menu start
var settingsmenu = document.querySelector('.settings-menu');
var darkBtn = document.querySelector('#dark-btn');

function settingsmenuToggle()
{
    settingsmenu.classList.toggle('settings-menu-height');
}
// dropdown menu end


// left to write
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-teme")
}