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
    xmlhttp.open('POST', '/api/v1/tasks')
    xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    xmlhttp.onload = () => {
      console.log('server_api.submit_task()')
      store.dispatch({type: 'TASKS_ADD_ONE', task: JSON.parse(xmlhttp.responseText).data})
    }
    let params = {
      task: data
    }
    xmlhttp.send(JSON.stringify(params))
  }

  submit_login(data) {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open('POST', '/api/v1/token')
    xmlhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    xmlhttp.onload = () => {
      console.log('server_api.submit_task()')
      store.dispatch({type: 'SET_TOKEN', token: JSON.parse(xmlhttp.responseText)})
    }
    xmlhttp.send(JSON.stringify(data))
  }
}

export default new Server()
