 const createCard = (ad) => {
  const article = document.createElement("article");
  article.className = "ad-card";

  /* Image */
  const figure = document.createElement("figure");
  figure.className = "ad-image";

  const img = document.createElement("img");
  img.src = ad.image;
  img.alt = `${ad.title} in ${ad.area}`;

  figure.appendChild(img);

  /* Info */
  const info = document.createElement("div");
  info.className = "ad-info";

  /* Title */
  const title = document.createElement("h3");
  title.textContent = ad.title;

  /* Features */
  const features = document.createElement("ul");
  features.className = "ad-features";

  const rooms = document.createElement("li");
  rooms.textContent = `🛏 ${ad.rooms} Rooms`;

  const size = document.createElement("li");
  size.textContent = `📐 ${ad.size} m²`;

  const baths = document.createElement("li");
  baths.textContent = `🛁 ${ad.bathrooms} Bathrooms`;

  features.append(rooms, baths, size);

  /* Price */
  const price = document.createElement("p");
  price.className = "ad-price";

  const priceValue = document.createElement("strong");
  priceValue.textContent = ad.price.toLocaleString();

  price.append(priceValue, ` ${ad.currency}`);

  /* Assemble */
  info.append(title, features, price);
  article.append(figure, info);

  return article;
}

export default createCard