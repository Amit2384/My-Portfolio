document.addEventListener('DOMContentLoaded', function() {
  const toggleSkillsButton = document.getElementById('toggleSkills');
  const skillsList = document.getElementById('skillsList');

  toggleSkillsButton.addEventListener('click', function() {
    if (skillsList.style.display === 'none') {
       skillsList.style.display = 'block';
    } else {
      skillsList.style.display = 'none';
    }
  });
});