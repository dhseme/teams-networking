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
  console.warn("display", teams);

  // var teamsHTML = "";
  // teams.forEach(function (team) {
  //   teamsHTML += getTeamHTLM(team);
  // });

  var r = teams.map(function (team) {
    return getTeamHTLM(team);
  });

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
