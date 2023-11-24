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
const settingsSubMenu = document.querySelector('.settings-submenu');



/*let currentlyOpenedContentId = null;

function toggleContent(childNumber){
    const contentId = `content${childNumber}`;


    if(currentlyOpenedContentId !== null){
        document.getElementById(currentlyOpenedContentId).style.display = 'none';
    }

    const content = document.getElementById(contentId);
    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';

    currentlyOpenedContentId = content.style.display === 'block' ? contentId : null;
}
toggleContent(1)*/


function toggleContent(childNumber) {
    const content = document.getElementById(`content${childNumber}`);
    const setting = document.querySelector(`.setting${childNumber}`);

    // Hide all contents
    document.querySelectorAll('.child-content').forEach(item => {
      item.style.display = 'none';
    });

    // Remove 'opened' class from all children
    document.querySelectorAll('.child').forEach(item => {
      item.classList.remove('opened');
    });

    // Toggle the current content
    content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';

    // Add 'opened' class to the clicked child
    if(setting.classList.contains('opened')){
        setting.classList.add('opened');
    }

   
    
  }
toggleContent(1)











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

