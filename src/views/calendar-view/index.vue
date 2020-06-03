<template>
  <div v-loading="loading" element-loading-text="Loading" class="calendar-view">
    <div class="calendar-view-header" id="header">
      <el-select v-model="optionId" placeholder="Select Time">
        <el-option
          v-for="item in listYear"
          :key="item.value"
          :label="item.season + ' ' + item.year"
          :value="item.id"
          class="calendar-view-item-select"/>
      </el-select>
      <el-select
        :disabled="infoUser.role.roleName ==='ROLE_USER'"
        filterable
        v-model="valueTeacher"
        multiple
        style="margin-left: 20px;"
        placeholder="Select Lecturer">
        <el-option
          v-for="item in dataListLecturer"
          :key="item.id"
          :label="item.shortName"
          :value="item.shortName">
        </el-option>
      </el-select>
      <el-select
        filterable
        v-model="valueClass"
        multiple
        style="margin-left: 20px;"
        placeholder="Select Class">
        <el-option
          v-for="item in dataListClass"
          :key="item.id"
          :label="item.name"
          :value="item.name">
        </el-option>
      </el-select>
      <el-select
        filterable
        v-model="valueRoom"
        multiple
        style="margin-left: 20px;"
        placeholder="Select Room">
        <el-option
          v-for="item in dataListRoom"
          :key="item.id"
          :label="item.name"
          :value="item.name">
        </el-option>
      </el-select>
      <el-select
        filterable
        v-model="valueSubject"
        multiple
        style="margin-left: 20px;"
        placeholder="Select Subject">
        <el-option
          v-for="item in dataListSubject"
          :key="item.id"
          :label="item.code"
          :value="item.code">
        </el-option>
      </el-select>
      <el-button type="primary" @click="getListCalendar" :disabled="yearSelected[0] && !yearSelected[0].hasData">Search</el-button>
    </div>

    <div class="calendar-view-content">
      <div v-if="lecturerConfirm && lecturerConfirm.status === 'PUBLIC'" class="calendar-view-comment">
        <span>Are you satisfied with your timetable ?</span>
        <el-button type="success" icon="el-icon-check" circle @click="acceptTimetable"></el-button>
        <el-button type="danger" icon="el-icon-close" circle @click="dialogFormVisibleComment = true"></el-button>
      </div>
      <div v-if="lecturerConfirm && lecturerConfirm.status === 'DRAFT' && lecturerConfirm.confirmed ===  true" class="calendar-view-comment">
        <span v-if="yearSelected[0] && yearSelected[0].hasData">Timetable is in process re-arrange !</span>

      </div>

      <div class="calendar-view-table">
        <TableCustom :list-slot-data="dataListCalendar" :header="day" />
      </div>
    </div>

    <el-dialog :title="titleDialogFormVisibleComment" :visible.sync="dialogFormVisibleComment" class="edit">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="200px" style="width: 400px; margin-left:50px;">
        <el-input type="textarea" v-model="comment"
          placeholder="Please input"/>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleComment = false">
          Cancel
        </el-button>
        <el-button type="primary"  @click="rejectTimetable" >
          Ok
        </el-button>
      </div>
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
          valueTeacher: [],
          valueClass: [],
          valueRoom: [],
          valueSubject: [],
          day: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
          loading: true,
          dataListCalendar: [],
          optionId: '',
          listYear: [],
          listSlot: [],
          dataDetail: {},
          dataListRoom: [],
          dataListClass: [],
          dataListLecturer: [],
          dataListSubject: [],
          modelRoom: '',
          modelLecturer: '',
          infoUser: {},
          comment:null,
          lecturerConfirm: null,
          titleDialogFormVisibleComment: "Reason",
          dialogFormVisibleComment: false,
          yearSelected:[]

      }
    },
      watch: {

          optionId(){
              this.yearSelected = this.listYear.filter(i => i.id === this.optionId)
              if (!this.yearSelected[0].hasData) {
                  return;
              }
              this.getDataListSubject()
              this.getDataListRoom()
              this.getDataListClass()
              this.getDataListLecturer()
              this.getLecturerConfirm()
          }
      },

    created() {
      this.infoUser = JSON.parse(localStorage.getItem('infoUser'))
      this.valueTeacher.push(this.infoUser.shortName);

      this.getYear()

  },
  methods: {
    getListCalendar() {
      // if(!this.valueTeacher.includes(this.infoUser.shortName) && !this.infoUser.role.roleName === 'ROLE_USER') {
      //   this.valueTeacher.push(this.infoUser.shortName);
      // }
      if((this.lecturerConfirm.status ==='DRAFT' || !this.lecturerConfirm)  && this.infoUser.role.roleName === 'ROLE_USER'){
        this.dataListCalendar = []
        return;
      }
      this.loading = true
      const postData = {
        criteria: {
          'timetable.semester': {
            'id': this.optionId
          },
            "timetable":{
                "temp": false
            },
          'subject' : {
            'department': this.infoUser.department
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
      }
      this.$store.dispatch('calendarView/getListcalendar', postData).then((data) => {
        this.dataListCalendar = this.$store.state.calendarView.dataListCalendar
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
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
                return;
            }
          this.getDataListSubject()
          this.getDataListRoom()
          this.getDataListClass()
          this.getDataListLecturer()
          this.getLecturerConfirm()
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
              // this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
              this.loading = false
          })
      },
      getLecturerConfirm() {
          const data = {
              params: {
                  semesterId: this.optionId
              }
          }
          this.$store.dispatch('calendarView/getLecturerConfirm', data).then((data) => {
              this.lecturerConfirm = this.$store.state.calendarView.lecturerConfirm;
              this.getListCalendar()
              this.loading = false
          }).catch(() => {
              this.loading = false
          })
      },
      acceptTimetable(){
          const data = {
              postData: {
                  id: this.lecturerConfirm.id,
                  status: 'FINAL'
              }
          }
          this.$store.dispatch('calendarView/updateLecturerConfirm', data).then((data) => {
              this.lecturerConfirm = this.$store.state.calendarView.lecturerConfirmUpdate;
            this.$notify({
              title: 'Success',
              message: 'Confirm Successfully',
              type: 'success',
              duration: 2000
            })


          }).catch(() => {
              this.loading = false
          })

      },
      rejectTimetable(){
          const data = {
              postData: {
                  id: this.lecturerConfirm.id,
                  status: 'REJECT',
                  reason: this.comment
              }
          }
          this.$store.dispatch('calendarView/updateLecturerConfirm', data).then((data) => {
              this.lecturerConfirm = this.$store.state.calendarView.lecturerConfirmUpdate;
              this.dialogFormVisibleComment = false
            this.$notify({
              title: 'Success',
              message: 'Confirm Successfully',
              type: 'success',
              duration: 2000
            })

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
            },
        }
      this.$store.dispatch('arrange/getDataLecturer', postData).then((data) => {
        this.dataListLecturer = this.$store.state.arrange.dataListLecturer.results
        // this.$router.push({ path: this.redirect || '/' })
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
      }
    }
  }
</script>

<style lang="scss">
  .calendar-view {
    display: block;

    .table-custom {
      font-size: 14px;

      &__main--lever-header {
      }

      &__main--lever-header, &__main--lever-item {
        width: 115px;
      }
    }

    &-content {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 20px;
      padding-top: 160px;

      &-detail {
        width: 30%;
        border: 1px solid #afaeae;
        padding: 20px;
        margin-right: 20px;
        border-radius: 4px;
      }
    }

    &-comment {
      width: 100%;
      text-align: center;
      margin-bottom: 20px;

      span {
        position: relative;

        &::before {

          content: "";
          width: 10px;
          height: 10px;
          position: absolute;
          top: 4px;
          background: green;
          left: -15px;
          border-radius: 50%
        }
      }
    }

    &-item-select {
      text-transform: capitalize;
    }

    &-header {
      text-align: center;
      border: 1px solid #dadada;
      padding-top: 10px;
      border-radius: 15px;
      box-shadow: 0px 0px 5px #dadada;
      background-color: #fff;
      position: fixed;
      top: 50px;
      width: auto;
      margin-right: 20px;

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
      display: flex;

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
