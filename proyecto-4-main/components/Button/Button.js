import "./Button.css";

export const Button = (texto, clase, link) => {
  return `<button class=${clase} href="${link}">${texto}</button>`;
};
