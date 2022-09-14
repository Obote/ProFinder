const CLIENT_ID = 'bbab048510dbf7d133f6';
const cLIENT_SECRET = 'f66bddced9966669cfd45759dea138d8c3f03acc';

async function getUser(name){
    const res = await fetch(`https://api.github.com/users/${name}?
    client_id=${CLIENT_ID}&client_secret=${cLIENT_SECRET}`);
    const profile = await res.json();
    return profile;
}

document.querySelector('#search').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.querySelector('#findByUsername').value;

    const profile = await getUser(username);

    console.log(profile);
});