class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  //    display profile ui
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
         <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <a href="${
                user.html_url
              }" target="_blank" class="btn btn-primary btn-block mb-4">Ver Perfil</a>
            </div>
            <div class="col-md-9">
               <span class="mb-2 badge badge-primary">Public Repos: ${
                 user.public_repos
               }</span>
               <span class="mb-2 badge badge-secondary">Public Gists: ${
                 user.public_gists
               }</span>
               <span class="mb-2 badge badge-success">Seguidores: ${
                 user.followers
               }</span>
               <span class="mb-2 badge badge-info">Seguindo: ${
                 user.following
               }</span>
               <br></br>
               <ul class="list-group">
                  <li class="list-group-item">Empresa: ${user.company}</li>
                  <li class="list-group-item">Website/Blog: ${user.blog}</li>
                  <li class="list-group-item">Localização: ${user.location}</li>
                  <li class="list-group-item">Membro Desde: ${user.created_at.substring(
                    0,
                    10
                  )}</li>
               <ul>
            </div>
         </div>
      </div>
      <h3 class="page-heading mb-3">Últimos Repositórios</h3>
      <div id="repos"></div>
    `;
  }

  //   show user repos
  showRepos(repos) {
    let output = "";
    repos.forEach((repo) => {
      output += `
         <div class="card card-body mb-2">
            <div class="row">
            <div class="col-md-6">
               <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div> 
            <div class="col-md-6">
            <span class="mb-2 badge badge-primary">Starts: ${repo.stargazers_count}</span>
            <span class="mb-2 badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="mb-2 badge badge-success">Forks: ${repo.forks_count}</span>
            </div> 
            </div>
         </div>
       `;
    });
    //  output repos
    document.getElementById("repos").innerHTML = output;
  }

  //   show alert message
  showAlert(message, className) {
    //   Clear any remaining alerts
    this.clearAlert();
    // create div
    const div = document.createElement("div");
    //  add classes
    div.className = className;
    //  add text
    div.appendChild(document.createTextNode(message));
    // get a parent

    const container = document.querySelector(".searchContainer");
    // get search box
    const search = document.querySelector(".search");
    // insert alert
    container.insertBefore(div, search);

    //  timeOut after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  //   clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //   clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
