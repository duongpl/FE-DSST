import { getListReport, addReport, approveReport } from '@/api/report'

const state = {
  listReport: []
}

const mutations = {
  LIST_REPORT: (state, data) => {
    state.listReport = data
  },
  ADD_REPORT: (state, data) => {
    state.listReport = data
  },
  APPROVE_REPORT: (state, data) => {
    state.listReport = data
  }
}

const actions = {
  getListReport({ commit }, data) {
    return new Promise((resolve, reject) => {
      getListReport({ data }).then(response => {
        commit('LIST_REPORT', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  addReport({ commit }, data) {
    return new Promise((resolve, reject) => {
      addReport({ data }).then(response => {
        commit('ADD_REPORT', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  approveReport({ commit }, data) {
    return new Promise((resolve, reject) => {
      approveReport({ data }).then(response => {
        commit('APPROVE_REPORT', response)
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

