import { getListcalendar,getConfirmByLecturer,updateConfirmByLecturer } from '@/api/calendarView'

const state = {
  dataListCalendar: [],
  lecturerConfirm:{},
  lecturerConfirmUpdate:{}
}

const mutations = {
  LIST_CALENDAR: (state, data) => {
    state.dataListCalendar = data
  },
  LECTURER_CONFIRM: (state, data) => {
    state.lecturerConfirm = data
  },
  UPDATE_CONFIRM: (state, data) => {
    state.lecturerConfirmUpdate = data
  }
}

const actions = {
  getListcalendar({ commit }, data) {
    return new Promise((resolve, reject) => {
      getListcalendar({ data }).then(response => {
        commit('LIST_CALENDAR', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  getLecturerConfirm({ commit }, data) {
    return new Promise((resolve, reject) => {
      getConfirmByLecturer({ data }).then(response => {
        commit('LECTURER_CONFIRM', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  updateLecturerConfirm({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateConfirmByLecturer({ data }).then(response => {
        commit('UPDATE_CONFIRM', response)
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

