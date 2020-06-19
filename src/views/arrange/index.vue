<template>
  <div v-loading="loading" class="arrange">
    <div class="arrange-header">
      <el-select v-model="optionId" placeholder="Select">
        <el-option
          v-for="item in listYear"
          :key="item.value"
          :label="item.season + ' ' + item.year"
          :value="item.id"
          class="arrange-item-select"
        />
      </el-select>
      <el-select
        v-model="valueTeacher"
        filterable
        multiple
        style="margin-left: 20px;"
        placeholder="Select Teacher"
      >
        <!-- search components -->
        <el-option
          v-for="item in dataListLecturer"
          :key="item.shortName"
          :label="item.shortName"
          :value="item.shortName"
        />
      </el-select>

      <el-select
        v-model="valueClass"
        filterable
        multiple
        style="margin-left: 20px;"
        placeholder="Select Class"
      >
        <el-option
          v-for="item in dataListClass"
          :key="item.id"
          :label="item.name"
          :value="item.name"
        />
      </el-select>
      <el-select
        v-model="valueRoom"
        filterable
        multiple
        style="margin-left: 20px;"
        placeholder="Select Room"
      >
        <el-option
          v-for="item in dataListRoom"
          :key="item.id"
          :label="item.name"
          :value="item.name"
        />
      </el-select>
      <el-select
        v-model="valueSubject"
        filterable
        multiple
        style="margin-left: 20px;"
        placeholder="Select Subject"
      >
        <el-option
          v-for="item in dataListSubject"
          :key="item.id"
          :label="item.code"
          :value="item.code"
        />
      </el-select>
      <!--      <el-select-->
      <!--        filterable-->
      <!--        v-model="valueStatus"-->
      <!--        multiple-->
      <!--        style="margin-left: 20px;"-->
      <!--        placeholder="Select Status">-->
      <!--        &lt;!&ndash; search components &ndash;&gt;-->
      <!--        <el-option-->
      <!--          v-for="item in listStatus"-->
      <!--          :key="item.value"-->
      <!--          :label="item.label"-->
      <!--          :value="item.value">-->
      <!--        </el-option>-->
      <!--      </el-select>-->
      <el-button type="primary" :disabled="yearSelected[0] && !yearSelected[0].hasData" @click="getDataListSlot">Search</el-button>

    </div>
    <span v-if="yearSelected[0] && !yearSelected[0].hasData" class="title-warning">Don't have data for this semester! Please go to <span
      style="font-weight: 700"
    >DSTT</span> for import data !</span>
    <div v-if="yearSelected[0] && yearSelected[0].hasData" class="arrange-content">
      <div v-loading="loading" class="arrange-content-detail">
        <div>
          <p class="title">Timetable Modify</p>
          <p class="arrange-content_nameObject">Subject <span class="name-subject" style="margin-left: 8px">{{ dataDetail.subjectCode }}</span></p>
          <p class="arrange-content_nameObject">Room  <span class="name-subject" style="margin-left: 20px">{{ dataDetail.room }}</span></p>

          <div class="wrapper-input">
            <span class="title-name">Lecturer</span>
            <el-select
              v-model="modelLecturer"
              filterable
              placeholder="Select Lecturer"
              class="content-input"
              :disabled="!isEdit"
            >
              <el-option
                v-for="item in dataListTeacherDetail"
                :key="item.id"
                :label="item.shortName"
                :value="item.shortName"
              />
            </el-select>
          </div>

          <div class="button">
            <el-button :disabled="!isEdit" type="primary" @click="saveCalendar">Edit</el-button>
          </div>
          <p class="title">Swap timetable</p>
          <div class="wrapper-input">
            <span class="title-name">Lecturer Swap</span>
            <el-select
              v-model="idTimetableSwap"
              filterable
              placeholder="Select Lecturer "
              class="content-input"
              :disabled="!isEdit"
            >
              <el-option

                v-for="item in lecturerForSwap"
                :key="item.id"
                :label="item.lecturerShortName"
                :value="item.id"
              />
            </el-select>
          </div>
          <div class="button">
            <el-button type="primary" :disabled="!isEdit || dataDetail.lecturerShortName === ' NOT_ASSIGN'" @click="swap('LECTURER')">
              Swap Lecturer
            </el-button>
          </div>
          <div class="wrapper-input">
            <span class="title-name">Room Swap</span>
            <el-select
              v-model="idTimetableSwap"
              filterable
              placeholder="Select Room "
              class="content-input"
              :disabled="!isEdit"
            >
              <el-option

                v-for="item in roomForSwap"
                :key="item.id"
                :label="item.room"
                :value="item.id"
              />
            </el-select>
          </div>

          <div class="button">
            <el-button type="primary" :disabled="!isEdit " @click="swap('ROOM')">
              Swap Room
            </el-button>
          </div>
          <p class="title">Request Confirm
            <el-tooltip placement="bottom" effect="light">
              <div slot="content">Select teacher in search section to send request confirm.<br><u>Note:</u> Only available for status. <strong>DRAFT</strong></div>
              <i class="el-icon-info" />
            </el-tooltip></p>
          <div class="button">
            <el-button type="primary" :disabled="isDisableConfirm()" @click="addConfirm">Request Lecturer Confirm
            </el-button>
          </div>
        </div>
      </div>

      <div class="arrange-table">
        <div class="group-by">
          <label>Group By :</label>
          <el-select v-model="groupBy" style="width: 100px" placeholder="Select">
            <el-option value="lecturer" class="arrange-item-select">Lecturer</el-option>
            <el-option value="room" class="arrange-item-select">Room</el-option>
          </el-select>
          <div class="wrapper-color">
            <span class="final">Final</span>
            <span class="public">Public</span>
            <span class="reject">Reject</span>
            <span class="draft">Draft</span>
          </div>
          <el-button type="primary" class="ml-20" @click="showViewAll">View All Expected</el-button>

          <el-button type="primary" class="ml-20 mt-20" @click="exportFile('line')">Export group by file import </el-button>
          <el-button type="primary" class="ml-20 mt-20" @click="exportFile('lecturer')">Export group by lecturer</el-button>
        </div>
        <TableCustom
          :listSlotData="listSlot"
          :header="slot"
          :groupBy="groupBy"
          :dataSwap="dataSwap"
          @dataEdit="getDataItemArrange"
        />
      </div>

    </div>

    <el-dialog title="View All Expected" :visible.sync="dialogViewAll" class="view-all">
      <p style="color: #304156;font-weight: 700">Search by lecturer :</p>
      <el-select v-model="lecturerExpected" placeholder="Select" class="filter_expected" filterable multiple>
        <el-option
          v-for="item in listLecturerExpected"
          :key="item"
          :label="item"
          :value="item"
          class="arrange-item-select"
        />
      </el-select>

      <el-tabs type="border-card">
        <el-tab-pane label="SLOT">
          <TableCustom :list-slot-data="listSlotExpectedView" :header="slot" />
        </el-tab-pane>
        <el-tab-pane label="SUBJECT">
          <TableCustom :list-slot-data="listSubjectExpectedView" :header="dataListSubject.map(x=>x.code)" />
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
import TableCustom from '@/components/TableCustom'

export default {
  name: 'Arrange',
  components: {
    TableCustom
  },

  data() {
    return {
      slot: ['M1', 'M2', 'M3', 'E1', 'E2', 'E3', 'M4', 'M5', 'E4', 'E5'],
      loading: true,
      optionId: '',
      listYear: [],
      listSlot: [],
      dataDetail: {},
      dataListRoom: [],
      dataListClass: [],
      dataListLecturer: [],
      dataListSubject: [],
      modelRoom: '',
      valueTeacher: [],
      valueClass: [],
      valueRoom: [],
      valueSubject: [],
      modelClass: '',
      modelLecturer: '',
      modelSubject: '',
      isEdit: false,
      dataListTeacherDetail: [],
      // dataListClassDetail: [],
      listTeacherConfirm: [],
      groupBy: 'lecturer',
      dataSwap: [],
      isSwap: false,
      listId: [],
      lecturerForSwap: [],
      roomForSwap: [],
      idTimetableSwap: '',
      listStatus: [
        {
          'label': 'FINAL',
          'value': 'FINAL'
        },
        {
          'label': 'PUBLIC',
          'value': 'PUBLIC'
        },
        {
          'label': 'REJECT',
          'value': 'REJECT'
        },
        {
          'label': 'DRAFT',
          'value': 'DRAFT'
        }
      ],
      valueStatus: '',
      listSlotExpectedView: [],
      listSubjectExpectedView: [],
      listSlotExpectedViewTemp: [],
      listSubjectExpectedViewTemp: [],
      // eslint-disable-next-line no-dupe-keys,vue/no-dupe-keys
      dataListSubject: [],
      yearSelected: [],
      dialogViewAll: false,
      lecturerExpected: [],
      listLecturerExpected: [],
      listFull: []
    }
  },

  watch: {
    lecturerExpected() {
      this.listSlotExpectedView = this.listSlotExpectedViewTemp.filter(item => {
        if (this.lecturerExpected.length === 0) {
          return true
        } else {
          return this.lecturerExpected.includes(item.lecturerName)
        }
      })
      this.listSubjectExpectedView = this.listSubjectExpectedViewTemp.filter(item => {
        if (this.lecturerExpected.length === 0) {
          return true
        } else {
          return this.lecturerExpected.includes(item.lecturerName)
        }
      })
    },
    groupBy() {
      this.getDataListSlot()
    },
    valueTeacher() {
      // eslint-disable-next-line no-unused-vars
      const heightHeader = document.querySelector('.arrange-header').offsetWidth
      this.listTeacherConfirm = this.dataListLecturer.filter(item => {
        return this.valueTeacher.includes(item.shortName)
      })
    },
    optionId() {
      this.yearSelected = this.listYear.filter(i => i.id === this.optionId)
      if (!this.yearSelected[0].hasData) {
        return
      }
      // eslint-disable-next-line no-sequences
      this.lecturerExpected = [],
      this.getDataListSubject()
      this.getDataListRoom()
      this.getDataListClass()
      this.getDataListLecturer()
      this.getDataListSlot()

      this.getListSlotExpForView()
      this.getListSubjectExpForView()
    }
  },

  created() {
    this.infoUser = JSON.parse(localStorage.getItem('infoUser'))
    this.getYear()
  },

  methods: {
    getYear() {
      this.loading = true
      this.$store.dispatch('expected/getListYear').then((data) => {
        this.listYear = this.$store.state.expected.listYear
        this.listYear.forEach(element => {
          if (element.now) {
            this.optionId = element.id
          }
        })
        this.yearSelected = this.listYear.filter(i => i.id === this.optionId)
        if (!this.yearSelected[0].hasData) {
          return
        }
        this.getDataListLecturer()
        this.getDataListSlot()
        this.getDataListSubject()
        this.getDataListRoom()
        this.getDataListClass()

        this.getListSlotExpForView()
        this.getListSubjectExpForView()
      }).catch(() => {
        this.loading = false
      })
    },

    getDataListSubject() {
      const data = {
        params: {
          semesterId: this.optionId
        },
        postData: {}
      }
      this.$store.dispatch('arrange/getDataSubject', data).then((data) => {
        this.dataListSubject = this.$store.state.arrange.dataListSubject
      }).catch(() => {
        this.loading = false
      })
    },
    getListForSwap() {
      const newArray = this.listSlot.flatMap(x => x.timetable)
      this.lecturerForSwap = newArray.filter(i => i.slot === this.dataDetail.slot && i.lecturerShortName !== ' NOT_ASSIGN' &&
          i.lecturerShortName !== this.dataDetail.lecturerShortName)
    },
    getListForSwapRoom() {
      const newArray = this.listSlot.flatMap(x => x.timetable)
      this.roomForSwap = newArray.filter(i => i.slot === this.dataDetail.slot && i.room !== 'NOT_ASSIGN' &&
              i.room !== this.dataDetail.room)
    },
    swap(type) {
      const lecturerPublic = []
      const newArray = this.listSlot.flatMap(x => x.timetable)
      const timetableDetail = newArray.filter(x => x.id === this.idTimetableSwap)[0]

      if (timetableDetail.timetableStatus !== 'DRAFT') {
        lecturerPublic.push(timetableDetail.lecturerShortName)
      }
      if (this.dataDetail.timetableStatus !== 'DRAFT') {
        lecturerPublic.push(this.dataDetail.lecturerShortName)
      }
      const data = {
        postData: [this.dataDetail.id, this.idTimetableSwap],
        params: {
          type: type
        }

      }
      if (lecturerPublic.length > 0 && type === 'LECTURER') {
        this.$confirm('Timetable status  of lecturer <strong> \' ' + lecturerPublic + '\'</strong> is not <span style="color: #409EFF;"> DRAFT</span>,  you must send request again after edit. Do you still want edit?', 'Warning', {
          confirmButtonText: 'YES',
          cancelButtonText: 'NO',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async() => {
          this.$store.dispatch('arrange/swapData', data).then(() => {
            this.getListForSwap()
            this.getListForSwapRoom()
            this.resetModifier()
            this.$notify({
              title: 'Success',
              message: 'Swap Successfully',
              type: 'success',
              duration: 2000
            })
          })
        })
      } else {
        this.$store.dispatch('arrange/swapData', data).then(() => {
          this.getListForSwap()
          this.getListForSwapRoom()
          this.resetModifier()
          this.$notify({
            title: 'Success',
            message: 'Swap Successfully',
            type: 'success',
            duration: 2000
          })
        })
      }
    },

    resetModifier() {
      this.idTimetableSwap = ''
      this.modelLecturer = ''
      this.modelRoom = ''
      this.getDataListSlot()
      this.isEdit = false
      this.getDataListLecturer()
    },
    saveCalendar() {
      const postData = {
        id: this.dataDetail.id,
        lecturerShortName: this.modelLecturer,
        room: this.modelRoom
      }
      const lecturerPublic = []
      const timetable = this.dataListTeacherDetail.filter(x => x.shortName === this.modelLecturer && x.timetableStatus !== 'DRAFT' && x.shortName !== 'NOT_ASSIGN')
      if (timetable.length > 0) {
        lecturerPublic.push(timetable[0].shortName)
      }
      if (this.dataDetail.timetableStatus !== 'DRAFT') {
        lecturerPublic.push(this.dataDetail.lecturerShortName)
      }

      if (lecturerPublic.length > 0) {
        this.$confirm('Timetable status  of lecturer <strong> \' ' + lecturerPublic + '\'</strong> is not <span style="color: #409EFF;"> DRAFT</span>' +
          ' ,  you must send request again after edit. Do you still want edit?', 'Warning', {
          confirmButtonText: 'YES',
          cancelButtonText: 'NO',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        })
          .then(async() => {
            this.loading = true
            this.$store.dispatch('arrange/saveCalendar', postData).then((data) => {
              this.resetModifier()

              this.$notify({
                title: 'Success',
                message: 'Update Successfully',
                type: 'success',
                duration: 2000
              })
              this.isEdit = false
            }).catch(() => {
              this.loading = false
            })
          })
      } else {
        this.loading = true
        this.$store.dispatch('arrange/saveCalendar', postData).then((data) => {
          this.resetModifier()
          this.$notify({
            title: 'Success',
            message: 'Update Successfully',
            type: 'success',
            duration: 2000
          })
          this.isEdit = false
        }).catch(() => {
          this.loading = false
        })
      }
    },

    getDataListSlot() {
      this.loading = true
      const data = {
        postData: {
          criteria: {
            'timetable.semester': {
              id: this.optionId
            },
            subject: {
              department: this.infoUser.department
            },

            'timetable': {
              'temp': false
            }

          },
          inCriteria: {
            room: {
              name: this.valueRoom
            },
            className: {
              name: this.valueClass
            },
            lecturer: {
              shortName: this.valueTeacher
            },
            subject: {
              code: this.valueSubject
            }
          }
        },

        queryParam: {
          groupBy: this.groupBy,
          semesterId: this.optionId
        }
      }

      this.$store.dispatch('arrange/getListSlot', data).then((data) => {
        this.listSlot = this.$store.state.arrange.dataListSlot
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },

    getDataListRoom() {
      const data = {
        params: {
          semesterId: this.optionId
        },
        postData: {}
      }
      this.$store.dispatch('arrange/getDataRoom', data).then((data) => {
        this.dataListRoom = this.$store.state.arrange.dataListRoom
      }).catch(() => {
        this.loading = false
      })
    },

    getDataListLecturer() {
      const postData = {
        postData: {
          criteria: {
            'login': true,
            'status': 0,
            department: this.infoUser.department
          }
        },
        params: {
          semesterId: this.optionId
        }
      }
      this.$store.dispatch('arrange/getDataLecturer', postData).then((data) => {
        this.dataListLecturer = this.$store.state.arrange.dataListLecturer.results
        this.dataListLecturer.unshift({
          id: null,
          shortName: 'NOT_ASSIGN'
        })
      }).catch(() => {
        this.loading = false
      })
    },

    getDataListClass() {
      const data = {
        params: {
          semesterId: this.optionId
        },
        postData: {}
      }
      this.$store.dispatch('arrange/getDataClass', data).then((data) => {
        this.dataListClass = this.$store.state.arrange.dataListClass
        // this.$router.push({ path: this.redirect || '/' })
      }).catch(() => {
        this.loading = false
      })
    },

    // getDataListClassDetail() {
    //   const data = {
    //     params: {
    //       timetableDetailId: this.dataDetail.id
    //     },
    //     postData: {
    //       criteria: {
    //         status: 0,
    //         login: true
    //       }
    //     }
    //   }
    //   this.$store.dispatch('arrange/getDataClassDetail', data).then((data) => {
    //     this.dataListClassDetail = this.$store.state.arrange.dataListClassDetail
    //     this.dataListClassDetail.unshift({
    //       id: null,
    //       name: 'NOT_ASSIGN'
    //     })
    //   }).catch(() => {
    //     this.loading = false
    //   })
    // },

    getDataListTeacherDetail() {
      const data = {
        params: {
          timetableDetailId: this.dataDetail.id
        },
        postData: {
          criteria: {
            status: 0,
            login: true
          }
        }
      }
      this.$store.dispatch('arrange/getDataTeacherDetail', data).then((data) => {
        this.dataListTeacherDetail = this.$store.state.arrange.dataListTeacherDetail
        this.dataListTeacherDetail.unshift({
          id: null,
          shortName: 'NOT_ASSIGN'
        })
      }).catch(() => {
        this.loading = false
      })
    },

    getDataItemArrange(itemSlot) {
      this.isEdit = true
      this.dataDetail = itemSlot
      this.modelRoom = itemSlot.room
      this.modelLecturer = itemSlot.lecturerShortName
      this.getListForSwap()
      this.getListForSwapRoom()
      this.getDataListTeacherDetail()
      this.idTimetableSwap = ''
      // this.getDataListClassDetail()
    },
    addConfirm() {
      this.$confirm('Do you want send request confirm to :<strong> \'' + this.listTeacherConfirm.map(x => x.shortName) + '\'</strong> ?', 'Warning', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        dangerouslyUseHTMLString: true,
        type: 'warning'
      })
        .then(async() => {
          const data = {
            params: {
              semesterId: this.optionId
            },
            postData: {
              abc: this.listTeacherConfirm.map(x => x.id)
            }
          }
          this.$store.dispatch('arrange/addConfirm', data).then(() => {
            this.resetModifier()
            this.$notify({
              title: 'Success',
              message: 'Request Confirm Successfully',
              type: 'success',
              duration: 2000
            })
          })
        })
    },
    isDisableConfirm() {
      const isNotDraft = this.listTeacherConfirm.filter(i => {
        if (i.timetableStatus !== 'DRAFT') {
          return true
        }
      })
      if (this.valueTeacher.length === 0 || this.valueTeacher.includes('NOT_ASSIGN') || isNotDraft.length > 0) {
        return true
      }
      return false
    },
    getListSlotExpForView() {
      const paramQuery = {
        semesterId: this.optionId,
        groupBy: 'slot'

      }
      this.$store.dispatch('expected/listExpectedForView', paramQuery).then((data) => {
        this.listSlotExpectedView = this.$store.state.expected.listExpected
        this.listSlotExpectedViewTemp = this.$store.state.expected.listExpected
      })
    },
    getListSubjectExpForView() {
      const paramQuery = {
        semesterId: this.optionId,
        groupBy: 'subject'

      }
      this.$store.dispatch('expected/listExpectedForView', paramQuery).then((data) => {
        this.listSubjectExpectedView = this.$store.state.expected.listExpected
        this.listSubjectExpectedViewTemp = this.$store.state.expected.listExpected
      })
    },
    showViewAll() {
      this.listLecturerExpected = []
      this.dialogViewAll = true
      this.listSlotExpectedViewTemp.forEach(element => {
        this.listLecturerExpected.push(element.lecturerName)
      })
    },
    exportFile(groupBy) {
      const data = {
        params: {
          semesterId: this.optionId,
          groupBy: groupBy
        }
      }

      this.$store.dispatch('request/exportFile', data).then((data) => {
        this.loading = false
        const url = window.URL.createObjectURL(new Blob([this.$store.state.request.fileExport]))
        const link = document.createElement('a')
        link.href = url
        const fileName = this.yearSelected[0].season + ' ' + this.yearSelected[0].year + '.xls'
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
        this.$notify({
          title: 'Success',
          message: 'Export file success',
          type: 'success',
          duration: 2000
        })
      }).catch(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss">
  .arrange {
    display: block;

    .table-custom {
      margin-top: 20px;
    }

    .view-all {
      .el-dialog {
        width: 80%;
      }
      .filter_expected{
        margin-bottom: 20px;
      }
    }
    .arrange-content_nameObject{
        display: block;
     }
    .name-subject {
      padding-left: 25px;
    }

    .content-input {
      width: calc(100% - 95px);
    }

    .button {
      margin-top: 15px;

      .el-button {
        width: 100%;
      }
    }

    .title {
      padding-top: 5px;
      margin: 0;
      padding-bottom: 10px;
      border-bottom: 1px solid #949494;
      font-weight: 700;
      text-align: center;
      text-transform: capitalize;
      color: #304156;
    }

    .wrapper-input {
      margin-top: 20px;

      .title-name {
        width: 90px;
        font-weight: 700;
        display: inline-block;
      }
    }

    &-content {
      display: flex;
      margin-top: 160px;
      position: relative;

      &-detail {
        width: 280px;
        border: 1px solid #afaeae;
        padding: 20px;
        padding-top: 10px !important;
        margin-right: 20px;
        border-radius: 4px;
        margin-top: -48px;
      }

      &_nameObject {
        font-weight: 700;
        display: inline-block;
        margin-bottom: 0;
      }
    }

    &-item-select {
      text-transform: capitalize;
    }
    .title-warning {
      color: red;
      text-transform: uppercase;
      font-weight: 500;
      width: 800px;
      display: inline-block;
      padding-top: 120px;
    }
    &-header {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
      border: 1px solid #dadada;
      padding-top: 10px;
      padding-left: 10px;
      border-radius: 15px;
      box-shadow: 0px 0px 5px #dadada;
      background-color: #fff;
      position: fixed;
      top: 50px;
      width: auto;
      margin-right: 20px;
      z-index: 9;

      .el-select {
        margin-bottom: 10px;
        max-height: 70px;
      }

      .el-select__tags {
        max-height: 55px;
        overflow: auto;
      }

      ::-webkit-scrollbar {
        width: 0px;
      }

      .el-select {
        margin-bottom: 10px;
      }

      .el-button {
        margin-left: 20px;
        height: 39px;
      }

      .el-input {
        width: 385px;
      }

      .el-input__inner {
        text-transform: capitalize;
      }
    }

    &-edit {
      width: 25%;
      margin-right: 20px;
    }

    &-table {
      /*display: flex;*/
      /*flex-wrap: wrap;*/
      width: calc(100% - 280px);
      overflow: auto;
      height: calc(100vh - 40px);
      right: 0;
      position: absolute;
      padding-left: 10px;

      .group-by {
        width: 100%;
        /*margin-top: 20px;*/
        /*margin-bottom: 5px;*/
        /*position: fixed;*/
        /*top: 180px;*/
        display: block;

        background: #fff;
        z-index: 999;
        /*padding-bottom: 10px;*/
        /*padding-top: 20px;*/

        .ml-20 {
          margin-left: 20px;
        }

        .mt-20 {
          margin-top: 20px;
        }

        .wrapper-color {
          display: inline-block;

          .final,
          .public,
          .reject,
          .draft {
            position: relative;
            margin-left: 20px;
            margin-left: 60px;

            &::before {
              content: "";
              position: absolute;
              top: 0;
              width: 20px;
              height: 17px;
              left: -25px;
            }
          }

          .final {
            &::before {
              background-color: #13ce66;

            }
          }

          .public {
            &::before {
              background-color: orange;
            }
          }

          .draft {
            &::before {
              background-color: #409EFF;
            }
          }

          .reject {
            &::before {
              background-color: red;
            }
          }
        }

        .el-input__inner {
          text-transform: capitalize;
        }

        .el-select {
          margin-left: 10px;
        }
      }

      &_content {
        width: 100px;
        border-right: 1px solid #b3b2b2;
        border-top: 1px solid #b3b2b2;
        border-bottom: 1px solid #b3b2b2;

        &:nth-child(1) {
          border-left: 1px solid #b3b2b2;
        }

        .arrange-table_main {
          &:last-child {
            border-bottom: none;
          }

          &:nth-child(odd) {
            background: #ececec;
          }
        }
      }

      &_header {
        border-bottom: 1px solid #b3b2b2;
        width: 100%;
        display: block;
        text-align: center;
        font-weight: 600;
        background: #304156;
        color: #fff;
        padding: 10px;

        .el-input__inner {
          text-transform: capitalize;
        }
      }

      &_main {
        border-bottom: 1px solid #b3b2b2;
        cursor: pointer;
        padding: 10px;
      }
    }
  }
</style>
