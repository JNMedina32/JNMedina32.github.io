//Resume sections variables
const earlyLife = document.getElementById('earlyLife');
const workHistory = document.getElementById('workHistory');
const education = document.getElementById('education');
const interests = document.getElementById('interests');
const goals = document.getElementById('goals');
const projects = document.getElementById('projects');
const bodySections = [earlyLife, workHistory, education, interests, goals, projects];
//Dropdown menu variables
const dropdownContent = document.getElementById('dropdown')
const dropdownEarlyLife = document.querySelector('a.earlyLife');
const dropdownWorkHistory = document.querySelector('a.workHistory');
const dropdownEducation = document.querySelector('a.education');
const dropdownInterests = document.querySelector('a.interests');
const dropdownGoals = document.querySelector('a.goals');
const dropdownProjects = document.querySelector('a.projects');
//function to change displays of the resume when clicked dropdown sections
const revealAndHide = (section) => {
    const bodySections = [earlyLife, workHistory, education, interests, goals, projects];
    for(let key in bodySections){
        if(section === key){
           section.style.display = 'inline-block';
        }else{
           section.style.display = 'none'
        }
    }return section
}
dropdownEarlyLife.addEventListener('click', () => {revealAndHide(earlyLife)});

// function(e){
//     earlyLife.style.display = 'block';
//     workHistory.style.display = 'none'; 
//     education.style.display = 'none'; 
//     interests.style.display = 'none'; 
//     goals.style.display = 'none'; 
//     projects.style.display = 'none'; 
// }
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