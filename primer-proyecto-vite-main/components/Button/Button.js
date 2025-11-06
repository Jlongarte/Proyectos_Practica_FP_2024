import "./Button.css";

// Button.js
export const Button = (imageSrc, altText, link) => `
  <a href="${link}" target="_blank" class="button-link">
    <img src="${imageSrc}" alt="${altText}" class="button-image" />
    <span>${altText}</span>
  </a>
`;
