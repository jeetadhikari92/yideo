import axios from 'axios'

const KEY = 'AIzaSyAKjpuehp3FlNp9sqPOALuqFUQzsyxEHqg'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
})