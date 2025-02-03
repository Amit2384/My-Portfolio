document.addEventListener('DOMContentLoaded', function() {
  const toggleSkillsButton = document.getElementById('toggleSkills');
  const skillsList = document.getElementById('skillsList');
  const downloadPdfButton = document.getElementById('downloadPdf');

  toggleSkillsButton.addEventListener('click', function() {
    if (skillsList.style.display === 'none') {
       skillsList.style.display = 'block';
    } else {
      skillsList.style.display = 'none';
    }
  });

  downloadPdfButton.addEventListener('click', function() {
        const pdfUrl = "resume.pdf";
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = "Amit_Chandajkar_resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  });
});
