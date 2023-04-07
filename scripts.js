//Resume sections variables
const home = document.getElementById('home');
const aboutMe = document.getElementById('aboutMe');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const bodySections = [home, aboutMe, projects, interests, goals, contact];
//Dropdown menu variables
const dropdownhome = document.querySelector('a.home');
const dropdownWorkHistory = document.querySelector('a.aboutMe');
const dropdownEducation = document.querySelector('a.projects');
const dropdownProjects = document.querySelector('a.contact');
//function to change displays of the resume when clicked dropdown sections
const revealAndHide = (section) => {
    for(let key of bodySections){
        if(section.id === key.id){
           key.style.display = 'inline-block';
        }else{
           key.style.display = 'none'
        }
    }
};
//Click events to reveal that section and hide the others
dropdownhome.addEventListener('click', () => {revealAndHide(home)});
dropdownWorkHistory.addEventListener('click', () => {revealAndHide(aboutMe)});
dropdownEducation.addEventListener('click', () => {revealAndHide(projects)});
dropdownProjects.addEventListener('click', () => {revealAndHide(contact)});