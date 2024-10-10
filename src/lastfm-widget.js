const API_KEY = 'c4cdf83d88e9d1666f8de61aadaa84f0';
const USERNAME = 'tittyfiddler';

const TRACKS_URL = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json`;

document.getElementById('lastfm-title').innerHTML = `Last played tracks for <span><a href='https://www.last.fm/user/${USERNAME}'>${USERNAME}</a></span>`;

fetch(TRACKS_URL)
    .then(response => response.json())
    .then(data => {
        const tracks = data.recenttracks.track;
        const tracksList = document.getElementById('tracks-list');

        tracks.forEach(async track => {
            const trackName = track.name;
            const artist = track.artist['#text'];
            const album = track.album['#text'];
            const image = track.image[0]['#text'];
            const url = track.url;
            const listItem = document.createElement('div');
            const trackInfoSpan = document.createElement('span');
            const albumArtSpan = document.createElement('span');
            const trackImage = document.createElement('img');
            const trackInfo = document.createElement('span');
            const trackLink = document.createElement('a');
            listItem.id = 'lastfm-list-item';

            if (image) {
                trackImage.src = image;
                trackImage.alt = `${album} - ${artist}`;
                albumArtSpan.appendChild(trackImage);
            } else {
                trackImage.src = 'https://lastfm.freetls.fastly.net/i/u/64s/4128a6eb29f94943c9d206c08e625904.jpg';
                trackImage.alt = 'No album art for this track';
                trackImage.style = 'width: 34px; height: 34px;';
                albumArtSpan.appendChild(trackImage);
            }
            
            trackLink.textContent = `${trackName} - ${artist}`;
            trackLink.href = url;
            trackLink.target = '_blank'; 
            trackLink.id = 'lastfm-list-text';
            trackInfo.appendChild(trackLink);
            trackInfoSpan.appendChild(trackInfo);

            listItem.appendChild(albumArtSpan);
            listItem.appendChild(trackInfoSpan);

            tracksList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        const errorMessage = document.createElement('div');
        errorMessage.textContent = 'Error fetching recently listened tracks';
        tracksList.appendChild(errorMessage);
    });
