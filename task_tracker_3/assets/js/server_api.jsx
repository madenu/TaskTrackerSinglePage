import store from './store'

class Server {
  request_tasks() {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.responseType = 'json'
    xmlhttp.open('GET', '/api/v1/tasks', true)
    xmlhttp.onload = () => {
      console.log('request_tasks()')
      console.log(xmlhttp.response.data)
    }
    xmlhttp.send()
  }

  request_users() {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.responseType = 'json'
    xmlhttp.open('GET', '/api/v1/users', true)
    xmlhttp.onload = () => {
      console.log('request_users()')
      console.log(xmlhttp.response.data)
    }
    xmlhttp.send()
  }

  submit_post(data) {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    xmlhttp.open('POST', '/json-handler')
    xmlhttp.onload = () => {
      console.log('submit_post()')
      console.log(xmlhttp.response.data)
    }
    // TODO clean up line below
    xmlhttp.send(JSON.stringify(data))
  }
}

export default new Server()
