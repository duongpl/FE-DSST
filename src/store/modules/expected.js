import defaultSettings from '@/settings'
import { getListYear, getDataExpected, saveDataExpected, reuseExected, listExpectedForView } from '@/api/expected'

const { showSettings, fixedHeader, sidebarLogo } = defaultSettings

const state = {
  showSettings: showSettings,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  listYear: [],
  dataExpected: [],
  dataExpectedEdit: {},
  listExpected: []
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },

  LIST_YEAR: (state, data) => {
    state['listYear'] = data
  },

  DATA_EXPECTED: (state, data) => {
    state['dataExpected'] = data
  },

  SAVE_EXPECTED_EDIT: (state, data) => {
    state['dataExpectedEdit'] = data
  },

  REUSE_EXECTED: (state, data) => {
    state['dataExpected'] = data
  },
  LIST_EXPECTED_VIEW: (state, data) => {
    state.listExpected = data
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },

  getListYear({ commit }, data) {
    return new Promise((resolve, reject) => {
      getListYear({}).then(response => {
        commit('LIST_YEAR', response)
        // setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  getDataExpected({ commit }, data) {
    return new Promise((resolve, reject) => {
      getDataExpected({ data }).then(response => {
        commit('DATA_EXPECTED', response)
        // setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  listExpectedForView({ commit }, data) {
    return new Promise((resolve, reject) => {
      listExpectedForView({ data }).then(response => {
        commit('LIST_EXPECTED_VIEW', response)
        // setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  saveDataExpected({ commit }, data) {
    return new Promise((resolve, reject) => {
      saveDataExpected({ data }).then(response => {
        commit('SAVE_EXPECTED_EDIT', data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  reuseExected({ commit }, data) {
    console.log('xxxxx')

    return new Promise((resolve, reject) => {
      reuseExected({ data }).then(response => {
        commit('REUSE_EXECTED', data)
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

