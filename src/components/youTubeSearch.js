import axios from 'axios';

const key = 'AIzaSyBl7kRhB0f_ysnLAHQEnEPlIiOcfkvf-0A';

export const searchYouTube = searchTerm => {
  console.log('utils', searchTerm);

  // return axios({
  //   method: 'get',
  //   url: 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=' +  key + '&part=' + searchTerm,
  // })
  // .then(response => resolve(console.log(response)));

  function searchByKeyword(searchTerm) {
    var results = YouTube.Search.list('id,snippet', {q: searchTerm, maxResults: 25});
    for(var i in results.items) {
      var item = results.items[i];
      Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
    }
    console.log(results);
  }
};
