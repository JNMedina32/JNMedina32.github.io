const earlyLife = document.getElementById('earlyLife');
const workHistory = document.getElementById('workHistory');
//function to change displays of the resume dropdown sections
const revealSection = (event) => {
    if(event){
        earlyLife.style.display = 'inline-block';
        workHistory.style.display = 'none';
    } 
}
earlyLife.addEventListener('click', revealSection);
