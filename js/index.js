// ===SKILLS SECTION===
const skills = [
  'JavaScript',
  'HTML',
  'CSS',
  'SQL',
  'Java',
  'Python',
  'GitHub',
];
const skillsSection = document.getElementById('skills');
const skillsList = document.querySelector('#skills ul');
skillsSection.appendChild(skillsList);

for (const skill of skills) {
  const li = document.createElement('li');
  li.textContent = skill;
  skillsList.appendChild(li);
}
// ===FOOTER===
createFooter();


