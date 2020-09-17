// init github
const github = new GitHub();
// init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// search input event listener

searchUser.addEventListener("keyup", (e) => {
  // get input text
  const userText = e.target.value;
  if (userText !== "") {
    //  make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // show alert
        ui.showAlert("Usuário não Encontrado", "alert alert-danger");
      } else {
        // show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear profile
    ui.clearProfile();
  }
});
