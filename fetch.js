fetch("/api/ads")
  .then(response => response.json())
  .then(data => {
    data.forEach(ad => {
      const adElement = createAdCard(ad);
      adsContainer.appendChild(adElement);
    });
  })
  .catch(error => {
    console.error("Failed to load ads:", error);
  });