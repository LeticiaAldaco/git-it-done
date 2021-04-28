var getUserRepos = function(user) {
// format the github api url
var apiUrl = "https://api.github.com/users/" + user + "/repos";

    fetch(apiUrl).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data);
    });
    console.log("outside");
};

getUserRepos("leticiaaldaco");