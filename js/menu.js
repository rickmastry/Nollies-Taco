function openSideMenu(){
    document.getElementById('side-menu').style.width = '250px';
   
}
function closeSideMenu(){
   document.getElementById('side-menu').style.width = '0';
   event.preventDefault();
}