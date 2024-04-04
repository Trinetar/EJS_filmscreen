const fs = require('fs');

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const imageDescription = document.getElementById('image-description');

  // Load images from the images directory
  fs.readdir('./images', (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach(file => {
      const img = document.createElement('img');
      img.src = `../images/${file}`;
      img.onclick = () => {
        const imageName = file.split('.')[0];
        imageDescription.textContent = `Description for ${imageName}`;
      };
      sidebar.appendChild(img);
    });
  });
});
