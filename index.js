function getTeamHTLM(team) {
  return `<tr>
      
 <td>${team.promotion}</td>
 <td>${team.members}</td>
 <td>${team.name}</td>
 <td><a href="${team.url}">open</a>
 </td>
 <td>x e</td>
</tr>`;
}

function displayTeams(teams) {
  // var teamsHTML = "";
  // teams.forEach(function (team) {
  //   teamsHTML += getTeamHTLM(team);
  // });

  var teamsHTML = teams.map(getTeamHTLM);

  document.querySelector("table tbody").innerHTML = teamsHTML.join(";");
}

function loadTeams() {
  fetch("data/teams.json")
    .then(function (r) {
      return r.json();
    })
    .then(function (teams) {
      displayTeams(teams);
    });
}

loadTeams();
