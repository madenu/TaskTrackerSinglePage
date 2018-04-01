import store from './store'

class Server {
  request_tasks() {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open('GET', '/api/v1/tasks', false)
    xmlhttp.onload = () => {
      console.log('request_tasks()')
      store.dispatch({
        type: "TASKS_UPDATE",
        tasks: JSON.parse(xmlhttp.responseText).data
      })
    }
    xmlhttp.send()
  }

  request_users() {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open('GET', '/api/v1/users', false)
    xmlhttp.onload = () => {
      console.log('request_users()')
      store.dispatch({
        type: "USERS_UPDATE",
        users: JSON.parse(xmlhttp.responseText).data
      })
    }
    xmlhttp.send()
  }

  submit_task(data) {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open('POST', '/json-handler')
    xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    xmlhttp.onload = () => {
      console.log('submit_post()')
      console.log(JSON.parse(xmlhttp.response.data))
    }
    // TODO clean up line below
    xmlhttp.send(JSON.stringify(data))
  }
}

export default new Server()
