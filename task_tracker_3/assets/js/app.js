// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in 'brunch-config.js'.
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from 'config.paths.watched'.
import 'phoenix_html'

// Import local files
//
// Local files can be imported directly using relative
// paths './socket' or full ones 'web/static/js/socket'.

// TODO Use a websocket to broadcast over open browser windows
// import socket from './socket'
import store from './store'
import server_api from './server_api'
import task_tracker_init from './components/task_tracker'
(() => {
  server_api.request_tasks()
  server_api.request_users()
  task_tracker_init(store)
})()
