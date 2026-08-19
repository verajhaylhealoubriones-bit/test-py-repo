const profileContainer = document.getElementById("profile-container");


const name = document.createElement("h2");
const bio = document.createElement("p");
const avatar = document.createElement("img");


name.textContent = "Lhealou Jhay Vera";

bio.textContent = "I am a BSIS student interested in basic programming, financial analysis, photography, videography, and video editing.";

avatar.src = "https://i.pinimg.com/originals/19/18/51/191851aefde677526f000487a23d4f8a.gif";
avatar.alt = "Student Avatar";


profileContainer.appendChild(avatar);
profileContainer.appendChild(name);
profileContainer.appendChild(bio);