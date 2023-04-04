//Resume sections variables
const earlyLife = document.getElementById('earlyLife');
const workHistory = document.getElementById('workHistory');
const education = document.getElementById('education');
const interests = document.getElementById('interests');
const goals = document.getElementById('goals');
const projects = document.getElementById('projects');
const bodySections = [earlyLife, workHistory, education, interests, goals, projects];
//Dropdown menu variables
const dropdownEarlyLife = document.querySelector('a.earlyLife');
const dropdownWorkHistory = document.querySelector('a.workHistory');
const dropdownEducation = document.querySelector('a.education');
const dropdownInterests = document.querySelector('a.interests');
const dropdownGoals = document.querySelector('a.goals');
const dropdownProjects = document.querySelector('a.projects');
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
dropdownEarlyLife.addEventListener('click', () => {revealAndHide(earlyLife)});
dropdownWorkHistory.addEventListener('click', () => {revealAndHide(workHistory)});
dropdownEducation.addEventListener('click', () => {revealAndHide(education)});
dropdownInterests.addEventListener('click', () => {revealAndHide(interests)});
dropdownGoals.addEventListener('click', () => {revealAndHide(goals)});
dropdownProjects.addEventListener('click', () => {revealAndHide(projects)});