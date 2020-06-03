<template>
  <div v-loading="loading" class="request-container">
    <el-select v-model="valueOptionId" placeholder="Select">
      <el-option
        v-for="item in listYear"
        :key="item.value"
        :label="item.season + ' ' + item.year"
        :value="item.id"
        class="arrange-item-select"/>
    </el-select>
    <div class="content">
      <span class="title">Upload data for semester :</span>
      <div class="large-12 medium-12 small-12 cell mt-3 request-container__wrapper">
        <div class="upload-btn-wrapper">
          <button class="btn">Select File</button>
          <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
        </div>
        <span v-if="nameFile !== ''" class="name-file">{{ nameFile }}</span>
        <el-button type="primary" class="ml-2" :disabled="!hasFile" @click="submitFile">
          Submit file
        </el-button>
      </div>
      <span class="type-file" v-if="!isFileExcel">*Select excel file</span>
    </div>
    <div class="content">
      <span class="title">Decision support tool for timetabling:</span>
      <span class="title" style="padding-left: 70px">SELECT MODEL</span>
      <el-select v-model="valueModel" placeholder="Select" class="arrange-item-select">
        <el-option
          v-for="item in listModel"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          class="arrange-item-select"/>
      </el-select>

      <div class="content-input">

        <div class="content-input-1">
          <div class="mt-1">
            <label class="title">Mutation rate</label>
            <el-input-number v-model="mutationRate"   :min="0" :max="1" precision="2" step="0.01"></el-input-number>
          </div>
          <div class="mt-1 border-bottom">
            <label class="title">Population size</label>
            <el-input-number v-model="populationSize"   :min="50"  precision="0"></el-input-number>
          </div>
          <div class="mt-2">
            <label class="title">Hard Constraint Coefficient</label>
            <el-input-number v-model="hardConstraintCoff" :min="0" :max="1" precision="2" step="0.01"></el-input-number>
          </div>
          <div class="mt-2 border-bottom">
            <label class="title">Soft Constraint Coefficient</label>
            <el-input-number v-model="softConstraintCoff" :min="0" :max="1" precision="2" step="0.01" ></el-input-number>
          </div>

          <div class="mt-2">
            <label class="title">Slot Coefficient</label>
            <el-input-number v-model="slotCoff" :disabled="valueModel === 1"  :min="0" :max="1" precision='2' step="0.01"></el-input-number>
          </div>
          <div class="mt-2 border-bottom">
            <label class="title">Distance Coefficient</label>
            <el-input-number v-model="distanceCoff" :disabled="valueModel === 1"  :min="0" :max="1" precision=2 step="0.01"></el-input-number>
          </div>
          <div class="mt-2">
            <label class="title">Satisfaction Sum Coefficient</label>
            <el-input-number v-model="satisfactionSumCoff" :disabled="valueModel === 1"  :min="0" :max="1" precision=2 step="0.01"></el-input-number>
          </div>
          <div class="mt-2">
            <label class="title">Standard Coefficient</label>
            <el-input-number v-model="stdCoff" :disabled="valueModel === 1"  :min="0" :max="1" precision=1 step="0.01"></el-input-number>
          </div>
        </div>

        <div class="content-input-2">
          <div class="mt-1">
            <label class="title">Tournament size</label>
            <el-input-number v-model="tournamentSize"   :min="1"  precision="2"></el-input-number>
          </div>
          <div class="mt-1 border-bottom">
            <label class="title">Convergence Check Range</label>
            <el-input-number v-model="convergenceCheckRange"   :min="1" precision="0"></el-input-number>
          </div>

          <div class="mt-3">
            <label class="title">Parttime Coefficient</label>
            <el-input-number v-model="parttimeCoff"   :min="0" :max="1"  precision="2" step="0.01"></el-input-number>
          </div>

          <div class="mt-3 border-bottom">
            <label class="title">Fulltime Coefficient</label>
            <el-input-number v-model="fulltimeCoff"  :min="0" :max="1" precision="2" step="0.01"></el-input-number>
          </div>

          <div class="mt-2">
            <label class="title">Subject Coefficient</label>
            <el-input-number v-model="subjectCoff" :disabled="valueModel === 1"  :min="0" :max="1" precision=2 step="0.01" ></el-input-number>
          </div>
          <div class="mt-2 border-bottom">
            <label class="title">Number Of Class Coefficient</label>
            <el-input-number v-model="numberOfClassCoff" :disabled="valueModel === 1" :min="0" :max="1" precision=2 step="0.01"></el-input-number>
          </div>
          <div class="mt-2">
            <label class="title">Generation Step</label>
            <el-input-number v-model="stepGen" :min="1" precision=0 ></el-input-number>
          </div>

        </div>
      </div>
      <p></p>
      <span v-if="isRunning" class="titleRunning">Running arrange.....</span>
      <span v-if="!isRunning && listGeneration.length >0" class="titleSuccess"> Arrange timetable successfully !</span>
      <p></p>
      <div>
        <el-table
          v-loading="loadingGeneration"
          :data="listGeneration"
          element-loading-text="Loading"
          border
          fit
          stripe
        >
          <el-table-column label="Generation">
            <template slot-scope="{row}"><span class="link-type">{{ row.generation }}</span></template>
          </el-table-column>
          <el-table-column label="Best Fitness">
            <template slot-scope="{row}"><span class="link-type">{{ row.bestFitness }}</span></template>
          </el-table-column>
          <el-table-column label="Average Fitness">
            <template slot-scope="{row}"><span class="link-type">{{ row.avgFitness }}</span></template>
          </el-table-column>
          <el-table-column label="Number of Violation">
            <template slot-scope="{row}"><span class="link-type">{{ row.numberOfViolation }}</span></template>
          </el-table-column>
          <el-table-column label="Action" align="center" width="300">
            <template slot-scope="{ row }">
              <el-button type="primary" size="mini" @click="previewGeneration(row)">
                View timetable
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <el-pagination
        background
        :current-page.sync="currentPage"
        :page-sizes="pageSizes"
        :total="totalCount"
        layout="total, prev, pager, next"
        @current-change="handleCurrentChange"
        class="pagination-generation"
      />
       <p></p>
        <el-button type="{isRunning ? primary : danger" @click="actionArrange()">
          {{ !isRunning ? 'Start arrange' : 'Stop' }}
        </el-button>


    <el-dialog :visible.sync="dialogDetailGeneration" class="dialog-detail-generation">
      <span class="title" >Generation :{{this.selected.generation}}</span>
      <div class="">
        <el-button type="primary" @click="setAsDefault()">
          Set as default
        </el-button>
        <div class="sort-lecturer">
          <label class="title">Search by lecturer</label>
          <el-select v-model="valueTeacher" placeholder="Select" filterable multiple>
            <el-option
              v-for="item in listTeach"
              :key="item"
              :label="item"
              :value="item"
              class="arrange-item-select"/>
          </el-select>
        </div>


        <TableCustom :list-slot-data="listDetailGeneration" :header="slot" group-by="lecturer" />
      </div>
    </el-dialog>

  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ListRadio from '@/components/ListRadio'
import TableCustom from '@/components/TableCustom'
import { MessageBox, Message } from 'element-ui'

export default {
  components: {
    ListRadio,
    TableCustom
  },
  data() {
    return {
      slot: ['M1', 'M2', 'M3', 'E1', 'E2', 'E3', 'M4', 'M5', 'E4', 'E5'],
      file: '',
      valueOptionId: '',
      listYear: '',
      loading: false,
      nameFile: '',
      yearSelected: {},
      typeFile: '',
      listReport: [],
      dialogFormexpected: false,
      expectedSubjects: [],
      expectedSlots: [],
      expectedNote: {},
      dataExpectedEdit: {
        expectedSubjects: [],
        expectedSlots: [],
        expectedNote: {}
      },
      isEdit: false,
      currentRow: {},
      hasFile: false,
      isFileExcel: true,
      listGeneration: [],
      loadingGeneration: false,
      listDetailGeneration: [],
      listFull:[],
      dialogDetailGeneration: false,
      currentPage: 1,
      pageSize: 5,
      totalCount: 0,
      pageSizes: {
        type: Array,
        default() {
          return [10, 20, 30, 50]
        }
      },
      isRunning: Boolean,
      limit: 10,
      startInterval: '',
      idSetDefault: '',
      selected: '',
      listTeach: [],
      valueTeacher: [],
      listDetailGenerationTemp: [],
      mutationRate: 1.0,
      populationSize: 100,
      tournamentSize: 3,
      convergenceCheckRange: 70,
      hardConstraintCoff: 0.7,
      softConstraintCoff: 0.3,
      parttimeCoff: 0.5,
      slotCoff: 0.35,
      subjectCoff: 0.35,
      numberOfClassCoff: 0.3,
      stepGen:10,
      stdCoff: 0,
      satisfactionSumCoff: 1.0,
      distanceCoff: 0,
      consicutiveClassCoff: 0,
      fulltimeCoff: 0.5,

        valueModel:0,
        listModel:[
            {
                label: 'Linear Scalarization',
                value: 0
            },
            {
                label: 'Compromise Programming',
                value: 1
            }
        ]
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  watch: {

      valueOptionId() {
          this.yearSelected = this.listYear.filter(i => i.id === this.valueOptionId)
          this.hasFile = false
          this.nameFile = ''

          this.getListGeneration()
      },

    isRunning() {
      if (this.isRunning) {
        this.startInterval = setInterval(this.getListGeneration, 3000)
        console.log('aaa', this.startInterval)

        this.$store.dispatch('request/startInterval', this.startInterval)
      } else {
        clearInterval(this.startInterval)
      }
    },

    valueTeacher() {
      this.listDetailGeneration = this.listFull;
      this.listDetailGeneration = this.listDetailGeneration.filter(item => {
        if (this.valueTeacher.length === 0) {
          return true
        } else {

          return this.valueTeacher.includes(item.room)
        }
      })
    },


    fulltimeCoff() {
      this.parttimeCoff = 1 - this.fulltimeCoff
    },
    parttimeCoff() {
      this.fulltimeCoff = 1 - this.parttimeCoff
    },
    hardConstraintCoff() {
      this.softConstraintCoff = 1 - this.hardConstraintCoff
    },
    softConstraintCoff() {
      this.hardConstraintCoff = 1 - this.softConstraintCoff
    },
    stdCoff() {
      this.satisfactionSumCoff = 1 - this.stdCoff
    },
    satisfactionSumCoff() {
      this.stdCoff = 1 - this.satisfactionSumCoff
    }
  },

  created() {
    this.getYear()
    this.getListGeneration()

    this.infoUser = JSON.parse(localStorage.getItem('infoUser'))
  },
  methods: {
    submitFile() {
      const formData = new FormData()
      formData.append('file', this.file)

      const data = {
        formData: formData,
        headers: {
          semesterId: this.valueOptionId,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      }

      const messageIsNow = "<p style='color: red'>"+this.yearSelected[0].season.toUpperCase() +' '+ this.yearSelected[0].year +' already have data, do you want upload new data ?</p>'
      const messageIsNotNow = 'Do you want upload data for '+ this.yearSelected[0].season +' '+ this.yearSelected[0].year +' không?'
      const message = this.yearSelected[0].now && this.yearSelected[0].hasData ? messageIsNow : messageIsNotNow

      this.$confirm(message, 'Warning', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
          dangerouslyUseHTMLString:true,
        type: 'warning'
      }).then(() => {
        this.loading = true
        this.$store.dispatch('request/uploadFile', data).then((data) => {
          this.loading = false
          this.nameFile = ''
          this.$notify({
            title: 'Success',
            message: 'Submit file success',
            type: 'success',
            duration: 2000
          })
        }).catch(() => {
          this.loading = false
        })
      })
    },


    handleDataExpectedEdit() {

    },


    getYear() {
      this.loading = true
      this.$store.dispatch('expected/getListYear').then((data) => {
        this.listYear = this.$store.state.expected.listYear
        this.listYear.forEach(element => {
          if (element.now) {
            this.valueOptionId = element.id
          }
        })
        this.yearSelected = this.listYear.filter(i => i.id === this.valueOptionId)

        this.getListGeneration()


      }).catch(() => {
        this.loading = false
      })
    },

    handleFileUpload() {
      this.file = this.$refs.file.files[0]
      this.nameFile = this.file.name
      this.typeFile = this.nameFile.slice(this.nameFile.length - 5, this.nameFile.length)

      if (this.typeFile === '.xlsx') {
        this.isFileExcel = true
        this.hasFile = true
      } else {
        this.isFileExcel = false
        this.hasFile = false
      }
    },

    getListGeneration() {
      this.loadingGeneration = true
      const postData = {
        page: this.currentPage,
        limit: 10
      }
      this.$store.dispatch('request/getListGeneration', postData).then(() => {
        this.listGeneration = this.$store.state.request.listGeneration.results
        this.totalCount = this.$store.state.request.listGeneration.totalCount
        this.isRunning = this.$store.state.request.listGeneration.running
        this.loadingGeneration = false
        this.loading=false;
      }).catch(() => {
        this.loadingGeneration = false
        this.loading=false;
      })
    },
    sort(list) {
      list.sort(function (a, b) {
        const nameA = a.toUpperCase()
        const nameB = b.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
    },
    previewGeneration(row) {
      this.listTeach=[]
      this.selected = row
      this.dialogDetailGeneration = true
      this.listDetailGeneration = row.timetableEdit
      this.listFull = this.listDetailGeneration;
      this.listDetailGeneration.forEach(element => {
        this.listTeach.push(element.room)
      })
    },

    startArrange() {
        var data ={}
        if(this.valueModel === 0) {
            data = {
                postData: {
                    modelType:this.valueModel,
                    mutationRate: parseFloat(this.mutationRate.toFixed(2)),
                    populationSize: parseFloat(this.populationSize),
                    tournamentSize: parseFloat(this.tournamentSize.toFixed(2)),
                    convergenceCheckRange: parseFloat(this.convergenceCheckRange),
                    stepGeneration: this.stepGen,
                    cofficient: {
                        hardConstraintCoff: parseFloat(this.hardConstraintCoff.toFixed(2)),
                        softConstraintCoff: parseFloat(this.softConstraintCoff.toFixed(2)),
                        parttimeCoff: parseFloat(this.parttimeCoff.toFixed(2)),
                        slotCoff: parseFloat(this.slotCoff.toFixed(2)),
                        subjectCoff: parseFloat(this.subjectCoff),
                        numberOfClassCoff: parseFloat(this.numberOfClassCoff.toFixed(2)),
                        stdCoff: parseFloat(this.stdCoff.toFixed(2)),
                        satisfactionSumCoff: parseFloat(this.satisfactionSumCoff.toFixed(2)),
                        distanceCoff: parseFloat(this.distanceCoff.toFixed(2)),
                        fulltimeCoff: parseFloat(this.fulltimeCoff.toFixed(2))

                    }
                },
                queryParam: {
                    semesterId: this.valueOptionId
                }
            }
        } else {
              data = {
                postData: {
                    modelType:this.valueModel,
                    mutationRate: parseFloat(this.mutationRate.toFixed(2)),
                    populationSize: parseFloat(this.populationSize),
                    tournamentSize: parseFloat(this.tournamentSize.toFixed(2)),
                    convergenceCheckRange: parseFloat(this.convergenceCheckRange),
                    stepGeneration: this.stepGen,
                    cofficient: {
                        hardConstraintCoff: parseFloat(this.hardConstraintCoff.toFixed(2)),
                        softConstraintCoff: parseFloat(this.softConstraintCoff.toFixed(2)),
                        parttimeCoff: parseFloat(this.parttimeCoff.toFixed(2)),
                        fulltimeCoff: parseFloat(this.fulltimeCoff.toFixed(2))
                    }

                },
                queryParam: {
                    semesterId: this.valueOptionId
                }
            }
        }
      const sum = this.slotCoff + this.subjectCoff + this.numberOfClassCoff + this.distanceCoff
      if (sum !== 1) {
        Message({
          message: 'Sum of SlotCoefficient,SubjectCoefficient,NumberOfClassCoefficient and DistanceCoefficient must be equal 1 !',
          type: 'error',
          duration: 5 * 1000
        })
      } else {
        this.isRunning = true
        this.loading = true
        this.$store.dispatch('request/startArrange', data).then(() => {
          this.loading = false
        }).catch(() => {
          this.isRunning = false
          this.loading = false
          this.loadingGeneration = false
        })
      }
    },

    stopArrange() {
      this.loading = true
      clearInterval(this.startInterval)
      this.getListGeneration()
      this.$store.dispatch('request/stopArrange', {}).then(() => {
        this.isRunning = false
        this.loading = false
      }).catch(() => {
        this.loadingGeneration = false
      })
    },

    actionArrange() {
      if (!this.isRunning) {
        this.startArrange()

      } else {
        this.stopArrange()
      }
    },

    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      this.getListGeneration()
    },

    setAsDefault() {
      this.$confirm('Set default timetable for '+this.yearSelected[0].season +' '+ this.yearSelected[0].year, 'Confirm', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.loading = true
        this.dialogDetailGeneration = false
        const postData = {
          runId: this.selected.id,
          semesterId: this.valueOptionId
        }
        this.$store.dispatch('request/setAsDefault', postData).then(() => {
          this.$notify({
            title: 'Success',
            message: 'Set default Successfully',
            type: 'success',
            duration: 2000
          })
          this.loading = false
        }).catch(() => {
          this.loading = false
        })
      })
    }
  }
}
</script>

<style lang="scss">
.request {
  &-container {
    .el-input__inner {
      text-transform: capitalize;
    }
    .el-select-dropdown__item {
      text-transform: capitalize;
    }

    margin: 30px;
    .content-input {

      display: flex;

      .title {
        width: 165px;
        display: inline-block;
        color: black;
      }

      .content-input-1 {
        width: 45%;
        .title {
          color: black;
          line-height: 3;
          font-weight: 600;
          font-size: 13px;
          width: 250px;
        }
      }

      .border-bottom {
        border-bottom: 1px solid #dadada;
        margin-bottom: 19px;
        padding-bottom: 15px;
      }

      .content-input-2 {
        width: 45%;
        margin-left: 50px;
        .title {
          color: black;
          line-height: 3;
          font-weight: 600;
          font-size: 13px;
          width: 250px;
        }
      }

      .mt-1 {
        margin-top: 10px;
        display: flex;
      }
      .mt-2 {
        margin-top: 10px;
        display: flex;
      }
      .mt-3 {
        margin-top: 10px;
        display: flex;
      }
    }

    .sort-lecturer {
      display: inline-block;
      margin: 0 20px 30px;
    }

    .pagination-generation {
      text-align: left;
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: -5px;

      .el-pager {
        li {
          min-width: 34px;
          line-height: 32px;
          height: 32px;
        }
      }

      &.el-pagination button {
        line-height: 32px;
        height: 32px;
      }
    }

    .el-dialog {
      width: 90%;
    }

    .dialog-detail-generation {
      .title {
        color: #0089ff;
        font-weight: 700;
      }
      .el-dialog {
        width: 70%;
      }
    }
    .el-table th {
      background: #f5f5f5;
    }
    .content {
      border: 1px solid #d2d2d2;
      padding: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
      border-radius: 4px;
      box-shadow: 0px 0px 4px -1px #d2d2d2;
      .select-model{
        padding-left: 30px;
      }

      .title {
        color: #0089ff;
        // width: auto;
        // padding-bottom: 40px;
        font-weight: 700;
      }
      .titleRunning {
        font-size: 1.5em;
        color: red;
        width: auto;
        font-weight: 700;
      }
      .titleSuccess {
        font-size: 1.5em;
        color: green;
        width: auto;
        font-weight: 700;
      }
    }

    .type-file {
      display: block;
      margin-top: 10px;
      font-size: 12px;
      color: red;
    }

    .upload-btn-wrapper {
      position: relative;
      overflow: hidden;
      display: inline-block;
    }

    .btn {
      border: 1px solid #cacaca;
      color: gray;
      background-color: white;
      padding: 11px 20px;
      border-radius: 8px;
      font-size: 14px;
    }

    .upload-btn-wrapper input[type=file] {
      font-size: 100px;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
    }

    .name-file {
      margin: 0 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 260px;
    }

    .ml-2 {
      margin-left: 20px;
    }

    &__wrapper {
      display: flex;
      align-items: center;
      margin-top: 20px;
    }
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.manager-radio {
  .list-radio__main--lever-header{
    width: 68px;
  }

  .list-radio__main--lever-item {
    width: 68px;
  }

  .list-radio__main--lever-wrapper {
    padding-left: 100px
  }

  .list-radio .list-subject-content_name {
    width: 100px;
  }

  &-container {
    margin: 30px;
  }

  &-item-select {
    text-transform: capitalize;
  }

  &-header {
    display: flex;

    .button {
      margin-left: 20px;
      display: inherit;
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
          width: 340px;
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

.dashboard-editor-container {
  border: 1px solid #d2d2d2;
  padding: 20px;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 4px -1px #d2d2d2;
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }

  .title {
    color: #0089ff;
    font-weight: 700;
  }

}
@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
