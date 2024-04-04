const fs = require('fs');

// Define a map to store image descriptions
const imageDescriptions = {
  'image1': 'Dune Part 1, Realsed in 2021, earned half a billon over OTT',
  'image2': 'Dune Part 2, Released in 2024, Hoping to earn a billion',
  'image3': 'Oppenheimer, Released in 2023, Story of R.Oppenheimer man who changed the world'
};

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
        // Get the description from the map
        const description = imageDescriptions[imageName] || 'No description available';
        imageDescription.textContent = description;
      };
      sidebar.appendChild(img);
    });
  });
});
