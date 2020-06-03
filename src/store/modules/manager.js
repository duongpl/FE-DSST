import { getListUser, updateUser, addUser, deleteUser, changeHOD, changeStatus } from '@/api/table'

const state = {
  listUser: []
}

const mutations = {
  LIST_USER: (state, data) => {
    state.listUser = data
  },
  UPDATE_USER: (state, data) => {
    state.listUser = data
  },
  ADD_USER: (state, data) => {
    state.listUser = data
  },
  DELETE_USER: (state, data) => {
    state.listUser = data
  },
  CHANGE_HOD: (state, data) => {
    state.listUser = data
  },
  CHANGE_STATUS: (state, data) => {
    state.listUser = data
  }
}

const actions = {
  getListUser({ commit }, data) {
    return new Promise((resolve, reject) => {
      getListUser(data).then(response => {
        commit('LIST_USER', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  updateUser({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateUser({ data }).then(response => {
        commit('UPDATE_USER', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  addUser({ commit }, data) {
    return new Promise((resolve, reject) => {
      addUser({ data }).then(response => {
        commit('ADD_USER', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  deleteUser({ commit }, data) {
    return new Promise((resolve, reject) => {
      deleteUser({ data }).then(response => {
        commit('DELETE_USER', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  changeHOD({ commit }, data) {
    return new Promise((resolve, reject) => {
      changeHOD({ data }).then(response => {
        commit('CHANGE_HOD', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  updateUserLocalStorage({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateUser({ data }).then(response => {
        commit('UPDATE_USER', response)
        localStorage.setItem('infoUser', JSON.stringify(response))
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  changeStatus({ commit }, data) {
    return new Promise((resolve, reject) => {
      changeStatus({ data }).then(response => {
        commit('CHANGE_STATUS', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

