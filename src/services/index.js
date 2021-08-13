import axios from 'axios'

export const api = {
  getImage() {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY',
        timeout: 20000
      })
        .then((response) => {
          if (response.data.meta.status === 200) resolve({ status: 'success', data: response.data.data })
          else reject({ status: 'failure', message: response.data.meta.msg })
        })
        .catch((error) => {
          reject({ status: 'failure', message: error.message })
        })
    })
  }
}
