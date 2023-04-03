//Resume sections variables
const earlyLife = document.getElementById('earlyLife');
const workHistory = document.getElementById('workHistory');
const education = document.getElementById('education');
const interests = document.getElementById('interests');
const goals = document.getElementById('goals');
const projects = document.getElementById('projects');
//Dropdown menu variables
const dropdownContent = document.getElementById('dropdown')
const dropdownEarlyLife = document.querySelector('a.earlyLife');
const dropdownWorkHistory = document.querySelector('a.workHistory');
const dropdownEducation = document.querySelector('a.education');
const dropdownInterests = document.querySelector('a.interests');
const dropdownGoals = document.querySelector('a.goals');
const dropdownProjects = document.querySelector('a.projects');
//function to change displays of the resume when clicked dropdown sections
dropdownEarlyLife.addEventListener('click', function(e){
    earlyLife.style.display = 'inline-block';
    workHistory.style.display = 'none'; 
    education.style.display = 'none'; 
    interests.style.display = 'none'; 
    goals.style.display = 'none'; 
    projects.style.display = 'none'; 
});
dropdownWorkHistory.addEventListener('click', function(e){
    earlyLife.style.display = 'none';
    workHistory.style.display = 'inline-block'; 
    education.style.display = 'none'; 
    interests.style.display = 'none'; 
    goals.style.display = 'none'; 
    projects.style.display = 'none';
});
dropdownEducation.addEventListener('click', function(e){
    earlyLife.style.display = 'none';
    workHistory.style.display = 'none'; 
    education.style.display = 'inline-block'; 
    interests.style.display = 'none'; 
    goals.style.display = 'none'; 
    projects.style.display = 'none';
});
dropdownInterests.addEventListener('click', function(e){
    earlyLife.style.display = 'none';
    workHistory.style.display = 'none'; 
    education.style.display = 'none'; 
    interests.style.display = 'inline-block'; 
    goals.style.display = 'none';
    projects.style.display = 'none'; 
});
dropdownGoals.addEventListener('click', function(e){
    earlyLife.style.display = 'none';
    workHistory.style.display = 'none'; 
    education.style.display = 'none'; 
    interests.style.display = 'none'; 
    goals.style.display = 'inline-block';
    projects.style.display = 'none'; 
});
dropdownProjects.addEventListener('click', function(e){
    earlyLife.style.display = 'none';
    workHistory.style.display = 'none'; 
    education.style.display = 'none'; 
    interests.style.display = 'none'; 
    goals.style.display = 'none'; 
    projects.style.display = 'inline-block';
});