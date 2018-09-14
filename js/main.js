$(document).ready(function(){
    $("#searchUser").on("keyup", function(e){
        let username = e.target.value;

        // GH request
        $.ajax({
            url:"https://api.github.com/users/"+username,
            data:{
                client_id:"dffd07764ea045e8017c",
                client_secret:"ba33757b78f62e6ade302089fcf1a7aeab8ec848"
            }
        }).done(function(user){
            $("#profile").html(`
            <div class="card">
            <div class="card-header">${user.name}</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-thumbnail mb-2" src="${user.avatar_url}">
                        <a class="btn btn-primary btn-block" href="${user.html_url}" target="_blank">Abrir perfil</a>
                    </div>
                    <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-primary">Followers: ${user.followers}</span>
                    <span class="badge badge-primary">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
            `);
        });
    })
});