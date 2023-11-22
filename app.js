//variables
const bellImage = document.querySelector('.bell-image');
const alertDisplay = document.querySelector('.alert-container');
const storeMenu = document.querySelector('.dc');
const storeSubMenu = document.querySelector('.dc-sub-menu');
const planContainer = document.querySelector('.select-plan-container');
const xicon = document.querySelector('.xicon');
const arrowDown = document.querySelector('.arrow-down');
const arrowUp = document.querySelector('.arrow-up')
const setupMenu = document.querySelector('.settings');
const setting = document.querySelectorAll('.setting');
const set1 = document.querySelector('.set1');
const set2 = document.querySelector('.set2');
const set3 = document.querySelector('.set3');
const set4 = document.querySelector('.set4');
const set5 = document.querySelector('.set5');






const set = [set1, set2, set3, set4, set5]

set.forEach((sets) =>{
    sets.addEventListener('click', ()=>{
        setting.classList.toggle('submenu-active')
    } )
})







const displayAlert = () =>{
    alertDisplay.classList.toggle('active');
    
}

const displaySubMenu = ()=> {
    storeSubMenu.classList.toggle('active');
}

const cancelPlan = () =>{
    planContainer.style.display = 'none';
}

const displaySetupMenu = ()=>{
    setupMenu.classList.toggle('flex');
    arrowDown.classList.toggle('rotate')
    
  
}


bellImage.addEventListener('click', displayAlert);
storeMenu.addEventListener('click', displaySubMenu);
xicon.addEventListener('click', cancelPlan);
arrowDown.addEventListener('click', displaySetupMenu);

