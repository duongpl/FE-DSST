/* eslint-disable vue/no-parsing-error */
<template>
  <div class="manager">
    <div style="width: 80%;margin: auto">
      <el-button type="primary" @click="handleCreate">Add new department's lecturer</el-button>
      <p></p>
      <el-select v-model="valueOptionStatus" class="pad" placeholder="Select">
        <el-option
          v-for="item in listStatus"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          class="report-item-select"
        />
      </el-select>
      <el-select
        filterable
        v-model="valueEmail"
        style="margin-left: 20px;"
        placeholder="Select Email">
        <el-option
          v-for="item in dataListEmail"
          :key="item.id"
          :label="item.title"
          :value="item.value">
        </el-option>
      </el-select>
      <p></p>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      :stripe="isActive"
      highlight-current-row
      :row-class-name="tableRowClassName"
      style="box-shadow: 0px 0px 4px -1px #d2d2d2;"
    >
      <el-table-column  width="200" label="Email">
        <template   slot-scope="{row}"><span @click="info(row)" class="link-type">{{ row.email }}</span></template>
      </el-table-column>
      <el-table-column width="200" label="Full Name">
        <template slot-scope="{row}">{{ row.fullName }}</template>
      </el-table-column>
      <el-table-column label="Short Name">
        <template slot-scope="{row}">{{ row.shortName }}</template>
      </el-table-column>
      <el-table-column label="Expected" align="center">
        <template v-if="row.login" slot-scope="{row}">
          <el-tag v-if="row.fillingExpected && row.status === 'ACTIVATE'" class="text-success link-type" @click="infoexpected(row)">
            Completed
          </el-tag>
          <el-tag v-if="!row.fillingExpected && row.status === 'ACTIVATE'" class="text-danger link-type" @click="infoexpected(row)">
            Uncompleted
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Status" align="center">
        <template slot-scope="{row}" v-if="row.status === 'ACTIVATE'">
          <el-tag v-if="row.login" class="text-success">
            Logged in
          </el-tag>
          <el-tag v-if="!row.login" class="text-danger">
            Unlogged in
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Action" align="center" width="300">
        <template slot-scope="{row,$index}">
          <el-button v-if="row.login && row.status === 'ACTIVATE'"  type="primary" size="mini" @click="handleHOD(row)">
            Transfer position
          </el-button>
          <el-button v-if="!row.login || row.status === 'DEACTIVATE'" size="mini" type="danger" @click="handleDelete(row, $index)">
            Remove
          </el-button>
          <el-button v-if="row.login && row.status === 'DEACTIVATE'" size="mini" type="success" @click="changStatus(row, 'ACTIVATE')">
            Activate
          </el-button>
          <el-button v-if="row.login && row.status === 'ACTIVATE'" size="mini" type="info" @click="changStatus(row, 'DEACTIVATE')">
            Deactivate
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
       <el-pagination
        background
        :current-page.sync="currentPage"
        layout="total, sizes, prev, pager, next"
        :page-sizes="pageSizes"
        :total="total"
        v-bind="$attrs"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        class="pagination-generation"
      />
    </div>
    </div>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" class="edit">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="200px" style="width: 400px; margin-left:50px;">
        <el-form-item label="Lecturer Name" prop="fullName">
          <el-input v-model="temp.fullName" />
        </el-form-item>
        <el-form-item label="Phone Number" prop="phone" >
          <el-input v-model="temp.phone" />
        </el-form-item>
        <el-form-item label="Short Name" prop="shortName">
          <el-input v-model="temp.shortName" />
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <span>{{temp.email}}</span>
        </el-form-item>
        <el-form-item label="Position" prop="headOfDepartment">
          <span>{{temp.headOfDepartment ? 'Head of Department' : 'Lecturer'}}</span>
        </el-form-item>
        <el-form-item label="Department" prop="department">
          <span>{{temp.department}}</span>
        </el-form-item>
        <el-form-item label="Full-time" prop="fullTime">
          <el-checkbox v-model="temp.fullTime"></el-checkbox>
        </el-form-item>
        <el-form-item label="Min of class quota" prop="quotaClass">
          <el-input-number v-model="temp.quotaClass" :min="0" :max="10"></el-input-number>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="updateData()">
          Edit
        </el-button>
      </div>
    </el-dialog>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormAdd" class="add">
      <el-form ref="dataFormAdd" :rules="emailAddRule" :model="emailAdd" label-position="left" label-width="80px">
        <el-form-item label="Email" prop="email">
          <el-input v-model="emailAdd.email" type="email" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormAdd = false">
          <Cancel>Cancel</Cancel>
        </el-button>
        <el-button type="primary" @click="addData()">
          Add
        </el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogFormexpected" class="manager-radio-dialog">
    <div class="manager-radio">
      <span class="title">View expected of {{currentRow.email}}</span>
      <p></p>
    <div class="manager-radio-header">

      <el-select v-model="valueOption" placeholder="Select">
        <el-option
          v-for="item in listYear"
          :key="item.value"
          :label="item.season + ' ' + item.year"
          :value="item.id"
          class="manager-radio-item-select"
        />
      </el-select>
    <p></p>

      <div v-if="expectedSubjects.length > 0" class="button">
        <el-button v-if="!isEdit" type="primary" @click="editExpected">Edit</el-button>
        <el-button v-if="isEdit" type="primary" @click="saveExected">Save</el-button>
        <div v-if="yearSelected[0]">
        <el-button class="reUseButton" v-if="!yearSelected[0].now && this.$store.state.expected.dataExpected.canReuse "
                   type="primary" @click="reuseExpected">Reuse Expected
        </el-button>
        </div>
      </div>

    </div>
      <div v-if="yearSelected[0]">
        <p></p>
      <span v-if="yearSelected[0].now && this.$store.state.expected.dataExpected.id === 0" class="title">{{currentRow.fullName}} no expectations in this term,select other term to reuse or create new ! </span>
      <span v-if="!yearSelected[0].hasData" class="title-warning">Don't have data for this semester!</span>
      </div>
      <div v-if="yearSelected[0]">
      <div v-if="yearSelected[0].hasData" class="manager-radio_content">
      <div class="manager-radio_wrap" v-loading="listLoadingRadio">
          <div class="manager-radio_subject">
            <span class="title">SUBJECT / PREFERENCE LEVEL</span>
            <ListRadio :data-subjects="expectedSubjects" :is-edit="isEdit" :is-subject="true" @changeValueRadio="handleDataExpectedEdit" />
          </div>
          <div class="manager-radio_time">
            <span class="title">SLOT / PREFERENCE LEVEL</span>
            <ListRadio :data-subjects="expectedSlots" :is-edit="isEdit" :is-subject="false" @changeValueRadio="handleDataExpectedEdit" />
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
      <div class="manager-radio_content-footer">
        <div class="manager-radio_content-footer-item">
          <span class="title-item">Number of class (Maximum 10)</span>
          <el-input-number v-model="expectedNote.expectedNumOfClass" :min="1" :max="10" :disabled="!isEdit" @change="handleChange" />
        </div>

        <div class="manager-radio_content-footer-item">
          <span class="title-item">Note</span>
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
      </div>
    </el-dialog>
  </div>
</template>
<script>
import ListRadio from '@/components/ListRadio'

export default {
  name: 'Dashboard',
  components: {
    ListRadio
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      list: [],
      listLoading: true,
      temp: {
        googleId: '',
        fullName: '',
        email: '',
        phone: '',
        shortName: '',
        quotaClass: '',
        fillingExpected: '',
        headOfDepartment: '',
        department: 'CF',
        fullTime: false,
        active: false
      },
      yearSelected:{},
      emailAdd: {
        email: ''
      },
      dialogFormVisible: false,
      dialogFormAdd: false,
      dialogFormexpected: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit lecturer\'s information :',
        create: 'Add new lecturer'
      },
      listStatus: [
        {
          'label': 'Activated',
          'value': 0
        },
        {
          'label': 'Deactivated',
          'value': 1
        }
      ],
      rules: {
        fullName: [{ required: true, message: 'Name is required.', trigger: 'change' }],
        shortName: [{ required: true, message: 'Short Name is required.', trigger: 'change' }],
        email: [{ type: 'email', required: true, message: 'Email is required', trigger: 'change' }],
      },
      emailAddRule: {
        email: [{ type: 'email', required: true, message: 'Email is required', trigger: 'change' }]
      },
      property: 'Blank',
      textarea: '',
      textareaNote: '',
      note: '',
      valueOption: '',
      valueOptionStatus: 0,
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
      dataListEmail: [
        {
          value: '',
          title: 'All Email'
        }
      ],
      currentRow: {},
      currentPage: 1,
      pageSize: 5,
      total: 0,
      limit: 10,
      pageSizes: {
        type: Array,
        default() {
          return [10, 20, 30, 50]
        }
      },
      valueEmail: '',
      listLoadingRadio: false,
      isActive: true
    }
  },
  watch: {
    valueOption() {
      this.getDataExpected()
    },
    valueOptionStatus() {
      this.getListEmail()
      if (this.valueOptionStatus === 0) {
        this.isActive = true

      } else {
        this.isActive = false
      }
      setTimeout(()=>{
        this.fetchData(this.valueOptionStatus, this.valueEmail)
      }, 300)
    },
    valueEmail() {
      setTimeout(()=>{
        this.fetchData(this.valueOptionStatus, this.valueEmail)
      }, 300);
    }
  },
  created() {
    this.fetchData()
    this.getListEmail()
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.status === 'DEACTIVATE') {
        return 'warning-row'
      }
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      localStorage.removeItem('infoUser')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    handleChange(value) {
    },
    getYear() {
      this.$store.dispatch('expected/getListYear').then((data) => {
        this.listYear = this.$store.state.expected.listYear
        this.listYear.forEach(element => {
          if (element.now) {
            this.valueOption = element.id
          }
        })
      }).catch(() => {
      })
    },
    changStatus(row, status) {
      const data = {
        params: {
          'status': status
        },
        'lecturerGoogleId': row.googleId
      }
      if (status === 'DEACTIVATE') {
        this.$confirm('Will remove timetable of lecturer : \'<strong>'+row.email+'</strong>\' in current semester (if exist)?', 'Warning', {
        iconColor:"red",
          dangerouslyUseHTMLString:true,
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'DEACTIVATE'
      })
        .then(async() => {
          this.callAPIChangeStatus(data)
        })
      } else {
        this.callAPIChangeStatus(data)
      }
    },
    callAPIChangeStatus(data) {
      this.$store.dispatch('manager/changeStatus', data).then(() => {
        this.fetchData()
        this.listLoading = false
        this.$notify({
          title: 'Success',
          message: 'Change status successfully',
          type: 'success',
          duration: 2000
        })
        }).catch(() => {
          this.listLoading = false
      })
    },
    getListEmail() {
      this.list = [];
      this.infoUser = JSON.parse(localStorage.getItem('infoUser'))

        var data = {
        page: 0,
        limit: this.limit,
        criteria : {
          role :{
            id : 2
          },
          department: this.infoUser.department,
          email: this.valueEmail,
          status : this.valueOptionStatus
        },
          'sortField': 'email',
          'ascending': false

      }
      this.$store.dispatch('manager/getListUser',data).then((data) => {
        var data = this.$store.state.manager.listUser.results
        this.dataListEmail = [
          {
            value: '',
            title: 'All Email'
          }
        ],
        data.forEach(element => {
          this.dataListEmail.push({
            'title': element.email,
            'value': element.email
          }
          )
        })
      }).catch(() => {
      })
    },
    fetchData(status, email) {
      this.infoUser = JSON.parse(localStorage.getItem('infoUser'))
      this.listLoading = true
      if (this.valueOptionStatus === 'ALL') {
        var data = {
          page: (email || status) ? 0 : this.currentPage,
          limit: this.limit,
          criteria : {
            role :{
              id : 2
            },
            department: this.infoUser.department,
            email: email
          },
          'sortField': 'email',
          'ascending': true
        }
      } else {
        var data = {
        page: (email || status) ? 0 : this.currentPage,
        limit: this.limit,
        criteria : {
          role :{
            id : 2
          },
          department: this.infoUser.department,
          status: this.valueOptionStatus,
          email: email
        },
          'sortField': 'email',
          'ascending': true
       }
      }
      this.$store.dispatch('manager/getListUser',data).then((data) => {
        this.list = this.$store.state.manager.listUser.results
        this.total = this.$store.state.manager.listUser.totalCount
        this.listLoading = false
      }).catch(() => {
        this.listLoading = false
      })
    },
    handleHOD(row) {
      this.$confirm('Do you really want to transfer Head of Department role to lecturer : \'<strong>'+row.email+'</strong>\' ?', 'Warning', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        dangerouslyUseHTMLString:true,
        type: 'warning',
        title:'TRANSFER ROLE'
      })
        .then(async() => {
          this.listLoading = true
          const paramQuery = {
            lecturerGoogleId: row.googleId
          }
          this.$store.dispatch('manager/changeHOD', paramQuery).then(() => {
            this.listLoading = false
            this.logout()
            const startInterval = this.$store.state.startInterval
            clearInterval(startInterval)
          }).catch(() => {
            this.listLoading = false
          })
        })
    },
    handleDelete(row, index) {
      this.$confirm('Do you really want to delete lecturer : \'<strong>'+row.email+'</strong>\' ?', 'Warning', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        dangerouslyUseHTMLString:true,
        type: 'warning'
      })
        .then(async() => {
          this.listLoading = true
          this.$store.dispatch('manager/deleteUser', row.id).then(() => {
            this.$notify({
              title: 'Success',
              message: 'Delete Successfully',
              type: 'success',
              duration: 2000
            })
            this.list.splice(index, 1)
            this.listLoading = false
          }).catch(() => {
            this.listLoading = false
          })
        })
    },
    info(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
    },
    infoexpected(row) {
      this.currentRow = row
      this.dialogFormexpected = true
      this.getYear()
      this.getDataExpected()
    },
    handleCreate() {
      this.dialogStatus = 'create'
      this.dialogFormAdd = true
    },
    updateData() {
      const regexPhoneNumber = /((0)+([0-9]{9}))/g
      this.$refs['dataForm'].validate((valid) => {
        const isValidPhone = regexPhoneNumber.test(this.temp.phone) || !this.temp.phone && !regexPhoneNumber.test(this.temp.phone)
        if (valid && isValidPhone) {
          this.$store.dispatch('manager/updateUser', this.temp).then(() => {
            this.fetchData(this.valueOptionStatus, this.valueEmail)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }

        if (!isValidPhone) {
          this.$confirm('Số điện thoại không đúng định dạng.', 'Warning', {
            confirmButtonText: 'Ok',
            cancelButtonText: 'Cancel',
            dangerouslyUseHTMLString: true,
            type: 'warning'
          })
        }
      })
    },

    addData() {
      this.$refs['dataFormAdd'].validate((valid) => {
        if (valid) {
          this.$store.dispatch('manager/addUser', this.emailAdd).then(() => {
            this.fetchData()
            this.dialogFormAdd = false
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
              this.getListEmail();
            this.emailAdd = {
              email: ''
            }
            this.$refs['dataFormAdd'].resetFields()
          }).catch((err) => {
          })
        } else {
          return false
        }
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
    sort(list) {
      list.sort(function(a, b) {
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
      this.listLoading = true;
      this.dataExpectedEdit = {
        expectedSubjects: [],
        expectedSlots: [],
        expectedNote: {}
      }
      const paramQuery = {
        lecturerId: this.currentRow.googleId,
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
        this.listLoading = false;
      }).catch(() => {
      })
    },
    reuseExpected() {

      const paramQuery = {
        lecturerGoogleId: this.currentRow.googleId,
        semesterId: this.valueOption
      }
      this.$store.dispatch('expected/reuseExected', paramQuery).then((data) => {
        this.getDataExpected()
        this.fetchData()
        this.$notify({
          title: 'Success',
          message: 'Update Successfully',
          type: 'success',
          duration: 2000
        })
      }).catch(() => {
        this.loading = false
      })
    },
    saveExected() {
      this.dataExpectedEdit.expectedNote.expectedNumOfClass = this.expectedNote.expectedNumOfClass
      this.dataExpectedEdit.expectedNote.maxConsecutiveSlot = this.expectedNote.maxConsecutiveSlot
      this.dataExpectedEdit.expectedNote.note = this.expectedNote.note
      this.dataExpectedEdit.lecturer = {
        googleId: this.currentRow.googleId
      }
      this.dataExpectedEdit.semester = {
        id: this.valueOption
      }
      this.dataExpectedEdit.method = 'post'
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
        this.getDataExpected()
        this.fetchData()
        this.$notify({
          title: 'Success',
          message: 'Update Successfully',
          type: 'success',
          duration: 2000
        })
      }).catch(() => {
      })
    },
    editExpected() {
      this.isEdit = true
    },
    handleSizeChange(val) {
      console.log('val', val)
      // this.$emit('pagination', { page: this.currentPage, limit: val })
      this.limit = val
      this.fetchData()
    },
    handleCurrentChange(val) {
      // this.$emit('pagination', { page: val, limit: this.pageSize })
      this.currentPage = val
      this.fetchData()
    }
  }
}
</script>

<style lang="scss">
.manager {
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
        font-size: 1.1em;
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

      .content {
        display: block;
      }
    }
  }
  .el-dialog {
    width: 90%;
  }

  .add {
    .el-dialog {
      width: 50%;
    }
  }

  .edit {
    .el-dialog {
      width: 50%;
    }
  }
  .link-type, .link-type:focus {
    color: #337ab7;
    cursor: pointer;
  }
  .header-container {
    div {
      padding-bottom: 24px;

    }
  }
  .el-table th {
    background: #f5f5f5;
  }
  .el-table {
    width:auto ;
  }
  .el-table tr {
    .show {
      background: #ccc;
      cursor: not-allowed;
    }

  }
  .text-success {
    background-color: #fff;
    border-color: #d0f5e0;
    color: #13ce66;
  }
  .text-danger {
    background-color: #fff;
    border-color: #e9e9eb;
    color: red;
  }
  .el-table .warning-row {
    background: #C0C0C0;
    cursor: not-allowed;
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

.pagination-container {
  background: #fff;
  padding: 23px 0px;
}
.pagination-container.hidden {
  display: none;
}
</style>
