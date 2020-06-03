<template>
  <div v-loading="loading" element-loading-text="Loading" class="expected">
    <span class="title">Select Term :</span>
    <p></p>
    <div class="expected-header">
      <el-select v-model="valueOption" placeholder="Select">
        <el-option
          v-for="item in listYear"
          :key="item.value"
          :label="item.season + ' ' + item.year"
          :value="item.id"
          class="expected-item-select"
        />
      </el-select>
      <div v-if="expectedSubjects.length > 0" class="button">
        <el-button v-if="!isEdit" type="primary" @click="editExpected">Edit</el-button>
        <el-button v-if="isEdit" type="primary" @click="saveExected">Save</el-button>
      </div>
      <el-button class="reUseButton" v-if="!yearSelected[0].now && this.$store.state.expected.dataExpected.canReuse && yearSelected[0].hasData "
                 type="primary" @click="reuseExpected">Reuse Expected
      </el-button>
    </div>
    <span v-if="yearSelected[0] && yearSelected[0].now && this.$store.state.expected.dataExpected.id === 0 && yearSelected[0].hasData" class="title">
You have no expectations in this term,select other term to reuse or create new ! </span>
    <span v-if="yearSelected[0] && yearSelected[0].now && this.$store.state.expected.dataExpected.id !== 0 && yearSelected[0].hasData" class="title-done">

You have filled out expected for this term  ! </span>
    <span v-if="yearSelected[0] && !yearSelected[0].hasData" class="title-warning">Don't have data for this semester! Please go to <span
      style="font-weight: 700">DSTT</span> for import data !</span>

    <div v-if="yearSelected[0].hasData" class="expected_content">
      <div class="expected_wrap">
        <div class="expected_subject">
          <span class="title">Subject / Preference Level : </span>
          <ListRadio :data-subjects="expectedSubjects" :is-edit="isEdit" :is-subject="true"
                     @changeValueRadio="handleDataExpectedEdit"/>
        </div>
        <div class="expected_time">
          <span class="title">Slot / Preference Level : </span>
          <ListRadio :data-subjects="expectedSlots" :is-edit="isEdit" :is-subject="false"
                     @changeValueRadio="handleDataExpectedEdit"/>
          <div class="note">
            <div class="note-wrapper">
              <div class="main-content">
              <span class="title-content"> Note</span>
              <span class="content"><span class="title">M1:</span> slot 1 Mon,Tue,Fri</span>
              <span class="content"><span class="title">M2:</span> slot 2 Mon,Tue,Fri</span>
              <span class="content"><span class="title">M3:</span> slot 3 Mon,Tue,Fri</span>
              <span class="content"><span class="title">E1:</span> slot 4 Mon,Tue,Fri</span>
              <span class="content"><span class="title">E2:</span> slot 5 Mon,Tue,Fri</span>
              <span class="content"><span class="title">E3:</span> slot 6 Mon,Tue,Fri</span>
              <span class="content"><span class="title">M4:</span> slot 1,2 Tue | 1 Thursday</span>
              <span class="content"><span class="title">M5:</span> slot 3 Tue | 2,3 Thursday</span>
              <span class="content"><span class="title">E4:</span> slot 4,5 Tue | 1 Thursday</span>
              <span class="content"><span class="title">E5:</span> slot 6 Tue | 5,6 Thursday</span>
            </div>
            <div class="content-number">
              <span class="title">0,1,2,3,4,5:</span>
              <span class="content">- Level of Lecturer's preference for slot/ subject.</span>
              <span class="content">- The higher number, the higher preference.</span>
              <span class="content">- Select 0 if Lecturer cannot teach this subject / slot.</span>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="expected_content-footer">
        <div class="expected_content-footer-item">
          <span class="title">Number of class (1-10)</span>
          <el-input-number v-model="expectedNote.expectedNumOfClass" :min="1" :max="10" :disabled="!isEdit"
                           @change="handleChange"/>
        </div>

<!--        <div class="expected_content-footer-item">-->
<!--          <span class="title">Number of continuos slot (1-6)</span>-->
<!--          <el-input-number v-model="expectedNote.maxConsecutiveSlot" :min="1" :max="6" :disabled="!isEdit"-->
<!--                           @change="handleChange"/>-->
<!--        </div>-->
        <div class="expected_content-footer-item">
          <span class="title">Note</span>
          <el-input
            v-model="expectedNote.note"
            type="textarea"
            :rows="2"
            placeholder="Please input"
            :disabled="!isEdit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ListRadio from '@/components/ListRadio'
import { log } from 'util'

export default {
  name: 'Dashboard',
  components: {
    ListRadio
  },

  data() {
    return {
      loading: true,
      property: 'Blank',
      textarea: '',
      textareaNote: '',
      note: '',
      valueOption: {},
      idYear: '',
      listYear: [],
      infoUser: {},
      expectedSubjects: [],
      expectedSlots: [],
      expectedNote: {},
      dataExpectedEdit: {
        expectedSubjects: [],
        expectedSlots: [],
        expectedNote: {}
      },
      isEdit: false,
      yearSelected: {}
    }
  },

  computed: {
    ...mapGetters([
      'name'
    ])
  },

  watch: {
    valueOption() {
      console.log('2')

      this.getDataExpected()
    }
  },

  created() {
    this.getYear()
    this.infoUser = JSON.parse(localStorage.getItem('infoUser'))
  },

  methods: {
    handleChange(value) {
    },

    reuseExpected() {
      this.loading = true
      const paramQuery = {
        lecturerGoogleId: this.infoUser.googleId,
        semesterId: this.valueOption
      }
      this.$store.dispatch('expected/reuseExected', paramQuery).then((data) => {
        console.log('3')
        this.getDataExpected()
        this.$notify({
          title: 'Success',
          message: 'Update Successfully',
          type: 'success',
          duration: 2000
        })
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
            this.valueOption = element.id
          }
        })
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    sort(list) {
      list.sort(function (a, b) {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
    },
    getDataExpected() {
      this.expectedSlots = []
      this.yearSelected = this.listYear.filter(i => i.id === this.valueOption)
      if (!this.yearSelected[0].hasData) {
        return;
      }
      this.loading = true
      this.dataExpectedEdit = {
        expectedSubjects: [],
        expectedSlots: [],
        expectedNote: {}
      }
      const paramQuery = {
        lecturerId: this.infoUser.googleId,
        semesterId: this.valueOption
      }

      this.$store.dispatch('expected/getDataExpected', paramQuery).then((data) => {
        this.expectedSubjects = this.$store.state.expected.dataExpected.expectedSubjects
        if (this.$store.state.expected.dataExpected.expectedSlots) {
          const slot = ['M1', 'M2', 'M3', 'E1', 'E2', 'E3', 'M4', 'M5', 'E4', 'E5']
          const dataTemp = this.$store.state.expected.dataExpected.expectedSlots
          slot.forEach(element => {
            dataTemp.forEach(item => {
              if (element === item.name) {
                this.expectedSlots.push(item)
              }
            })
          })
        } else {
          this.expectedSlots = []
        }

        if (this.$store.state.expected.dataExpected.expectedSubjects) {
          this.expectedSubjects = this.$store.state.expected.dataExpected.expectedSubjects
          this.sort(this.expectedSubjects)
        } else {
          this.expectedSubjects = []
        }

        if (this.$store.state.expected.dataExpected.expectedNote) {
          this.expectedNote = this.$store.state.expected.dataExpected.expectedNote
        } else {
          this.expectedNote = {}
        }
        this.loading = false
        this.yearSelected = this.listYear.filter(i => i.id === this.valueOption)
      }).catch(() => {
        this.loading = false
      })
    },

    handleDataExpectedEdit(data) {
      if (data.isSubject) {
        const indexOfSubject = this.dataExpectedEdit.expectedSubjects.findIndex(item => item.name === data.value.name)
        if (indexOfSubject && indexOfSubject === -1) {
          this.dataExpectedEdit.expectedSubjects.push(data.value)
        } else {
          this.dataExpectedEdit.expectedSubjects[indexOfSubject].levelOfPrefer = data.value.levelOfPrefer
        }
      } else {
        const indexOfSlot = this.dataExpectedEdit.expectedSlots.findIndex(item => item.name === data.value.name)
        if (indexOfSlot && indexOfSlot === -1) {
          this.dataExpectedEdit.expectedSlots.push(data.value)
        } else {
          this.dataExpectedEdit.expectedSlots[indexOfSlot].levelOfPrefer = data.value.levelOfPrefer
        }
      }
    },
    saveExected() {
      this.loading = true
      this.dataExpectedEdit.expectedNote.expectedNumOfClass = this.expectedNote.expectedNumOfClass
      this.dataExpectedEdit.expectedNote.maxConsecutiveSlot = this.expectedNote.maxConsecutiveSlot
      this.dataExpectedEdit.expectedNote.note = this.expectedNote.note
      this.dataExpectedEdit.lecturer = {
        googleId: this.infoUser.googleId
      }
      this.dataExpectedEdit.semester = {
        id: this.valueOption
      }
      this.dataExpectedEdit.method = 'post'

      // hihi ok
      if (this.$store.state.expected.dataExpected.id !== 0) {
        this.dataExpectedEdit.method = 'put'
        this.dataExpectedEdit.id = this.$store.state.expected.dataExpected.id
      }

      this.$store.dispatch('expected/saveDataExpected', this.dataExpectedEdit).then((data) => {
        this.isEdit = false
        this.dataExpectedEdit = {
          expectedSubjects: [],
          expectedSlots: [],
          expectedNote: {}
        }
        this.$notify({
          title: 'Success',
          message: 'Save Successfully',
          type: 'success',
          duration: 2000
        })
        this.getDataExpected()
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    editExpected() {
      this.isEdit = true
    }
  }
}
</script>

<style lang="scss">
  .expected {
    &-container {
      margin: 30px;
    }

    .note {
      .note-wrapper {
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        padding: 15px;
        margin-top: 15px;
        display: flex;
      }
      .main-content {
        width: 40%;

        .title-content {
          display: block;
          margin-bottom: 10px;
          font-weight: 600;
          font-size: 20px;
        }

        .content {
          display: block;
          font-size: 14px;
          margin: 7px;
          .title {
            font-size: 1em;
            padding-right: 13px;
            display: inline;
            font-weight: 600;
            color: #00adff;
          }
        }
      }

      .content-number {
        width: 60%;
        padding-left: 10px;
        border-left: 1px solid #cecece;
        font-size: 14px;

        .content {
          display: block;
        }
      }
    }

    &-item-select {
      text-transform: capitalize;
    }

    &-header {
      display: flex;

      .button {
        margin-left: 20px;
      }

      .el-input__inner {
        text-transform: capitalize;
      }
    }

    &_content {
      box-shadow: 1px 0px 4px 1px #e4e4e4;
      border: 1px solid #e8e8e8;
      padding: 20px;
      margin-top: 20px;

      &-footer {
        margin-top: 20px;

        &-item {
          display: flex;
          margin-top: 20px;

          .title-item {
            width: 300px;
            display: inline-block;
          }

          .el-textarea {
            width: 400px;
          }
        }
      }
    }

    .reUseButton {
      margin-left: 10px;
    }

    .title {
      color: #00adff;
      text-transform: uppercase;
      font-weight: 600;
      width: 600px;
      display: inline-block;
      padding-top: 20px;
    }
    .title-done {
      color: #13ce66;
      text-transform: uppercase;
      font-weight: 600;
      width: 600px;
      display: inline-block;
      padding-top: 20px;
    }

    .title-warning {
      color: red;
      text-transform: uppercase;
      font-weight: 500;
      width: 800px;
      display: inline-block;
      padding-top: 20px;
    }

    &_wrap {
      display: flex;
      margin-top: 20px;
    }

    &-text {
      font-size: 30px;
      line-height: 46px;
    }

    &_time {
      width: 50%;

      .list-radio {
        margin-top: 10px;
      }
    }

    &_subject {
      margin-right: 10px;
      width: 50%;

      .list-radio {
        margin-top: 10px;
      }
    }
  }
</style>
