const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');
//---------------------------------------------

async function get_user_details(username) {

    const data = await fetch(APIURL + username);
                 // waits until the request completes...
                 //  Because the await keyword is present, the asynchronous function is paused until the request completes.
    
    const parsed_data = await data.json();
                            //.json of Response interface takes a Response stream and reads it to completion. 
                            //It takes JSON as input and parse it to a JavaScript object

    console.log(parsed_data);

    const data_in_html = `<div class="card-bg">
    <img src="${parsed_data.avatar_url}" alt="${parsed_data.name}" class="avatar">
       <ul>
       <h1>${parsed_data.login}</h1>
       <li><p>avatar_url: ${parsed_data.avatar_url}</p></li>
        <li><p>url: ${parsed_data.url}</p></li>
       <li> <p>html_url: ${parsed_data.html_url}</p></li>
       <li><p>Public Repos: ${parsed_data.public_repos}</p></li>
       <li><p>User ID: ${parsed_data.id}</p></li>
       <li><p>Created at: ${parsed_data.created_at}</p></li>
       <li><p>Updated at: ${parsed_data.updated_at}</p></li>
        </ul>
    </div>`;
    main.innerHTML = data_in_html;
}
get_user_details("");   

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const user_entered_name = search.value;
    if (user_entered_name) {
        get_user_details(user_entered_name);   
        // search.value = ''  //to empty the input field
    }

});
