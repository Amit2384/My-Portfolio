document.addEventListener('DOMContentLoaded', function() {
    const downloadPdfButton = document.getElementById('downloadPdf');
  
    downloadPdfButton.addEventListener('click', function() {
      const pdfUrl = "resume.pdf";  // Ensure this file path is correct
  
      // Create an invisible link element
      const link = document.createElement('a');
      link.href = "resume.pdf";
      link.download = "Amit's resume.pdf";  // Name of the file to be downloaded
      
      // Append the link to the document body (it needs to be part of the DOM to trigger click)
      document.body.appendChild(link);
      
      // Programmatically trigger the click event to start the download
      link.click();
      
      // Remove the link from the document after the click
      document.body.removeChild(link);
    });
  });
  