const DISCORD_USER_ID = '1005669630033010728';

async function fetchPresence() {
  const url = `https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`;
  try {
    const response = await fetch(url);
    const { data } = await response.json();
    renderPresence(data);
  } catch (error) {
    // fallback: avatar default
    const avatar = document.getElementById('avatar');
    avatar.src = "images/avatar.png";
    setStatusDot('offline');
  }
}

function setStatusDot(status) {
  const dot = document.getElementById('status-dot');
  let color = "#747f8d", title = "Desconocido";
  switch (status) {
    case "online":
      color = "#43b581"; title = "Online"; break;
    case "idle":
      color = "#faa61a"; title = "Idle"; break;
    case "dnd":
      color = "#f04747"; title = "Do Not Disturb"; break;
    case "offline":
    default:
      color = "#747f8d"; title = "Offline"; break;
  }
  if (dot) {
    dot.style.backgroundColor = color;
    dot.title = title;
  }
}

function renderPresence(data) {
  const avatar = document.getElementById('avatar');
  avatar.src = `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.webp?size=512`;

  setStatusDot(data.discord_status);

  const activityDiv = document.getElementById('activity');
  if (activityDiv) activityDiv.style.display = "none";
}

fetchPresence();