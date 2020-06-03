import { getListSlot, getDataRoom, getDataLecturer, dataListClass, saveCalendar, dataListSubject, getDataTeacherDetail, getDataClassDetail, addConfirm, swapData } from '@/api/arrange'

const state = {
  dataListSlot: [],
  dataListRoom: [],
  dataListLecturer: [],
  dataListClass: [],
  dataListSubject: [],
  dataListClassDetail: [],
  dataListTeacherDetail: []
}

const mutations = {
  LIST_SLOT: (state, data) => {
    state.dataListSlot = data
  },

  LIST_ROOM: (state, data) => {
    state.dataListRoom = data
  },

  LIST_LECTURER: (state, data) => {
    state.dataListLecturer = data
  },

  LIST_CLASS: (state, data) => {
    state.dataListClass = data
  },
  LIST_SUBJECT: (state, data) => {
    state.dataListSubject = data
  },
  LIST_CLASS_DETAIL: (state, data) => {
    state.dataListClassDetail = data
  },
  LIST_TEACHER_DETAIL: (state, data) => {
    state.dataListTeacherDetail = data
  },
  ADD_CONFIRM: (state, data) => {
    state.dataListTeacherDetail = data
  }
}

const actions = {
  getListSlot({ commit }, data) {
    return new Promise((resolve, reject) => {
      getListSlot({ data }).then(response => {
        commit('LIST_SLOT', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  getDataRoom({ commit }, data) {
    return new Promise((resolve, reject) => {
      getDataRoom({ data }).then(response => {
        commit('LIST_ROOM', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  getDataLecturer({ commit }, data) {
    return new Promise((resolve, reject) => {
      getDataLecturer({ data }).then(response => {
        commit('LIST_LECTURER', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  getDataClass({ commit }, data) {
    return new Promise((resolve, reject) => {
      dataListClass({ data }).then(response => {
        commit('LIST_CLASS', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  saveCalendar({ commit }, data) {
    return new Promise((resolve, reject) => {
      saveCalendar({ data }).then(response => {
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  getDataSubject({ commit }, data) {
    return new Promise((resolve, reject) => {
      dataListSubject({ data }).then(response => {
        commit('LIST_SUBJECT', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  getDataTeacherDetail({ commit }, data) {
    return new Promise((resolve, reject) => {
      getDataTeacherDetail({ data }).then(response => {
        commit('LIST_TEACHER_DETAIL', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  getDataClassDetail({ commit }, data) {
    return new Promise((resolve, reject) => {
      getDataClassDetail({ data }).then(response => {
        commit('LIST_CLASS_DETAIL', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  addConfirm({ commit }, data) {
    return new Promise((resolve, reject) => {
      addConfirm({ data }).then(response => {
        commit('ADD_CONFIRM', response)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  swapData({ commit }, data) {
    return new Promise((resolve, reject) => {
      swapData({ data }).then(response => {
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

