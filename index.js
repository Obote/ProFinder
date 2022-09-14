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

    showProfile(profile);
    console.log(profile);
}); 

function showProfile(profile){
    document.querySelector('.profile').innerHTML = ` 
    <img
    src="${profile.avatar_url}"
  />
  <p class="name">${profile.name}</p>
  <p class="username login">${profile.login}</p>
  <p class="bio">
  ${profile.bio}
  </p> 

  <div class="followers-stars">
    <p>
      <ion-icon name="people-outline"></ion-icon>
      <span class="followers">${profile.followers}</span> followers
    </p>
    <span class="dot">·</span>
    <p><span class="following">${profile.following}</span> following</p>
  </div>

  <p class="company">
    <ion-icon name="business-outline"></ion-icon>
    ${profile.company}
  </p>
  <p class="location">
    <ion-icon name="location-outline"></ion-icon>${profile.location}
  </p>`;
}