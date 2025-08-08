const reposList = document.getElementById('repos-list');
const username = "eternalontop";

function getLangColor(lang) {
  const colors = {
    JavaScript: "#f7df1e",
    Python: "#3572A5",
    HTML: "#e44d26",
    CSS: "#563d7c",
    Shell: "#89e051",
    Batchfile: "#4d4d4d",
    Dart: "#00b4ab",
    TypeScript: "#3178c6",
    C: "#555555",
    Cpp: "#f34b7d",
    Java: "#b07219",
    default: "#b26eff"
  };
  return colors[lang] || colors.default;
}

function truncate(text, max) {
  if (!text) return "";
  return text.length > max ? text.slice(0, max) + "..." : text;
}

function repoCard(repo) {
  // Imagen preview: busca social-preview.png o logo.png en la rama main
  const previewImg = `https://raw.githubusercontent.com/${username}/${repo.name}/main/social-preview.png`;
  const fallbackImg = `https://raw.githubusercontent.com/${username}/${repo.name}/main/logo.png`;
  const repoUrl = repo.html_url;
  const langColor = getLangColor(repo.language);

  return `
    <a href="${repoUrl}" class="repo-card" target="_blank" rel="noopener">
      <div class="repo-img-wrap">
        <img src="${previewImg}" alt="Preview" class="repo-img" onerror="this.onerror=null;this.src='${fallbackImg}'">
      </div>
      <div class="repo-info">
        <h3 class="repo-title">${repo.name}</h3>
        <p class="repo-desc">${truncate(repo.description, 70)}</p>
        <div class="repo-meta">
          <span class="repo-stars"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
          <span class="repo-branch"><i class="fas fa-code-branch"></i> ${repo.default_branch}</span>
          <span class="repo-lang"><span class="repo-lang-dot" style="background:${langColor}"></span> ${repo.language || "Desconocido"}</span>
        </div>
      </div>
    </a>
  `;
}

fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
  .then(res => res.json())
  .then(repos => {
    if (!Array.isArray(repos)) return;
    reposList.innerHTML = repos.map(repo => repoCard(repo)).join('');
  });
