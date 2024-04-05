const fs = require('fs');

const imageDescriptions = {
  'image1': 'Dune Part 1, Realsed in 2021, earned half a billon over OTT, began with House Atreides being given control of Arrakis, a desert planet whose harsh conditions mask rich deposits of spice. Water is extremely scarce, and the massive sandworms who roam the vast deserts kill everything in their paths',
  'image2': 'Dune Part 2, Released in 2024, Hoping to earn a billion, Following the destruction of House Atreides by House Harkonnen, Princess Irulan, the daughter of Padishah Emperor Shaddam IV, secretly journals that Paul Atreides may still be alive. On Arrakis, Stilgars Fremen troops, including Paul and his pregnant mother, Lady Jessica, overcome a Harkonnen patrol.', 
  'image3': 'Oppenheimer, Released in 2023, Story of R.Oppenheimer man who changed the world During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the worlds first nuclear explosion, forever changing the course of history.',
  'image4': 'Interstellar, Released in 2014, In Earths future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earths population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankinds new home.',
  'image5': 'Godfather-1, Released in 1974,Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son, Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger'
};

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const imageDescription = document.getElementById('image-description');

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
        const description = imageDescriptions[imageName] || 'No description available';
        imageDescription.textContent = description;
      };
      sidebar.appendChild(img);
    });
  });
});
