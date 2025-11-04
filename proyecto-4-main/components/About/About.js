import "./About.css";
import data from "/datos";

const template = (data) => {
  let skillsList = "";

  for (const skill of data.skills) {
    skillsList += `<li>${skill}</li>`;
  }

  return `

      <img src="${data.avatar}" alt="Avatar of ${data.name}" />
      <p>${data.address}</p>
      <h2>${data.name}</h2>
      <p>${data.aboutMe}</p>
      <ul>
        ${skillsList} 
      </ul>

  `;
};

const AboutMe = () => {
  document.querySelector(".aboutMe").innerHTML = template(data);
};

export default AboutMe;
