import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import expected from './modules/expected'
import manager from './modules/manager'
import report from './modules/report'
import arrange from './modules/arrange'
import calendarView from './modules/calendar-view'
import request from './modules/request'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    expected,
    manager,
    arrange,
    calendarView,
    report,
    request
  },
  getters
})

export default store
