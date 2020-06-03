<template>
  <div v-loading="loading" class="report">
    <div class="header-container">
    </div>
    <div class="report-header">
      <span class="title" >Select Term :</span>
      <p></p>
      <el-select v-model="valueOptionId" class="pad" placeholder="Select">
        <el-option
          v-for="item in listYear"
          :key="item.value"
          :label="item.season + ' ' + item.year"
          :value="item.id"
          class="report-item-select"
        />
      </el-select>
      <el-button style="margin-left:5px " v-if="userInfo.role.roleName !== 'ROLE_ADMIN'" type="primary" @click="handleCreate">Create new report</el-button>
      <el-select
        v-if="userInfo.role.roleName === 'ROLE_ADMIN'"
        filterable
        v-model="valueEmail"
        style="margin-left: 20px;"
        placeholder="Select Email">
        <el-option
          label="All Email"
          value="">
        </el-option>
        <el-option
          v-for="item in dataListEmail"
          :key="item.id"
          :label="item.title"
          :value="item.value">
        </el-option>
      </el-select>
      <p></p>

      <el-table
        style="box-shadow: 0px 0px 4px -1px #d2d2d2;"
        :data="listReport"
        element-loading-text="Loading"
        border
        fit
        stripe
        highlight-current-row
        class="table-report"
      >
        <el-table-column label="Purpose" sortable>
          <template slot-scope="{row}">{{ row.content }}</template>
        </el-table-column>
        <el-table-column label="Created Date"  align="center" width="150">
          <template slot-scope="{row}">{{ format_date(row.createdDate) }}</template>
        </el-table-column>
        <el-table-column v-if="userInfo.role.roleName === 'ROLE_ADMIN'" label="Created By">
          <template slot-scope="{row}" class="email">{{ row.lecturer.email }}</template>
        </el-table-column>
        <el-table-column label="Process note">
          <template slot-scope="{row}">{{ row.replyContent }}</template>
        </el-table-column>
        <el-table-column label="Status" align="center" width="150">
          <template slot-scope="{row}">
            <el-tag :type="row.status">
              {{ row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column v-if="userInfo.role.roleName === 'ROLE_ADMIN'" label="Action" align="center" width="150">
          <template slot-scope="{row}">
            <el-button v-if="row.status === 'PENDING'" type="primary" size="mini" @click="reply(row)">
              Reply
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
    <el-dialog title="Purpose" :visible.sync="dialogFormAdd">
      <el-form ref="dataFormAdd" :model="form" :rules="rules" label-position="left" label-width="80px">
        <el-form-item>
          <el-col :span="24">
            <el-form-item prop="purpose">
              <el-input v-model="form.purpose" type="textarea" :rows="5" />
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormAdd = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="addData()">
          Add
        </el-button>
      </div>
    </el-dialog>

    <el-dialog title="Reply" :visible.sync="dialogFormReply">
      <el-form ref="dialogFormReply" :model="formReply" :rules="rules" label-position="left" label-width="80px">
        <el-form-item>
          <el-col :span="24">
            <el-input v-model="formReply.purpose" type="textarea" :rows="5" :disabled="true" />
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="24">
            <el-form-item prop="reply">
              <el-input v-model="formReply.reply" type="textarea" :rows="5" />
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormReply = false">
          Cancel
        </el-button>
        <el-button type="danger" @click="changeReport('REJECTED')">
          Reject
        </el-button>
        <el-button type="primary" @click="changeReport('APPROVED')">
          Approved
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'Report',
  components: {
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
      loading: false,
      property: 'Blank',
      valueOptionId: '',
      userInfo: JSON.parse(localStorage.getItem('infoUser')),
      idYear: '',
      listYear: [],
      infoUser: {},
      listReport: [],
      dialogFormAdd: false,
      dialogFormReply: false,
      form: {
        purpose: ''
      },
      formReply: {
        id: '',
        purpose: '',
        reply: ''
      },
      rules: {
        purpose: [{ required: true, message: 'Purpose is required.', trigger: 'change' }],
        reply: [{ required: true, message: 'Reply is required.', trigger: 'change' }]
      },
      valueEmail: '',
      dataListEmail: [
        {
          value: '',
          title: 'All Email'
        }
      ],
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
    }
  },

  computed: {
    ...mapGetters([
      'name'
    ])
  },

  watch: {
    valueOptionId() {
      this.getListReport()
    },
    valueEmail() {
      this.getListReport(this.valueEmail)
    }
  },

  created() {
    this.getYear()
  },

  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format('YYYY/MM/DD')
      }
    },
    handleChange(value) {
    },

    getYear() {
      this.$store.dispatch('expected/getListYear').then((data) => {
        this.listYear = this.$store.state.expected.listYear
        this.listYear.forEach(element => {
          if (element.now) {
            this.valueOptionId = element.id
             this.getListEmail()
          }
        })
        this.getListReport()

      }).catch(() => {
        this.loading = false
      })
    },
       getListEmail() {
      if (this.userInfo.role.roleName !== 'ROLE_ADMIN') {
        var paramQuery = {
          'criteria': {
            'semester': {
              'id': this.valueOptionId
            },
            'lecturer': {
              'googleId': this.userInfo.googleId, //user đang đăng nhập
              'email': this.valueEmail
            },
          },
          'sortField': 'status',
          'ascending': true
        }
      } else {
        var paramQuery = {
          'criteria': {
            'semester': {
              'id': this.valueOptionId
            },
            'lecturer': {
              'department': this.userInfo.department,
              'email': this.valueEmail
            }
          },
          'sortField': 'status',
          'ascending': true
        }
      }
        this.$store.dispatch('report/getListReport', paramQuery).then(() => {
        var data = this.$store.state.report.listReport.results
        const newData = data.map((item, index) => {
          return item.lecturer;
        });
        const unique = [...new Set(newData.map(item => item.email))];
        const newDataa = unique.map((item, index) => {
          return {
            title: item,
            value: item
          };
        });
        this.dataListEmail = newDataa;
      }).catch(() => {
      })
    },
    getListReport(email) {
      this.loading = true
      if (this.userInfo.role.roleName !== 'ROLE_ADMIN') {
        var paramQuery = {
          page: email ? 0 : this.currentPage,
          limit: this.limit,
          'criteria': {
            'semester': {
              'id': this.valueOptionId
            },
            'lecturer': {
              'googleId': this.userInfo.googleId,//user đang đăng nhập
              'email': this.valueEmail
            },
          },
          'sortField': 'status',
          'ascending': false
        }
      } else {
        var paramQuery = {
          page: email ? 0 : this.currentPage,
          limit: this.limit,
          'criteria': {
            'semester': {
              'id': this.valueOptionId
            },
            'lecturer': {
              'department': this.userInfo.department,
              'email': this.valueEmail
            }
          },
          'sortField': 'status',
          'ascending': false
        }
      }
      this.$store.dispatch('report/getListReport', paramQuery).then(() => {
        this.listReport = this.$store.state.report.listReport.results
        this.total = this.$store.state.report.listReport.totalCount
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    handleCreate() {
      this.dialogFormAdd = true
    },
    addData() {
      this.form.purpose = this.form.purpose.trim()
      this.$refs['dataFormAdd'].validate((valid) => {
        const postData = {
          'content': this.form.purpose.trim()
        }

        if (valid && this.form.purpose.trim()) {
            this.dialogFormAdd = false
            this.loading = true
            this.$store.dispatch('report/addReport', postData).then(() => {
              this.$notify({
                title: 'Success',
                message: 'Update Successfully',
                type: 'success',
                duration: 2000
              })
              this.getListReport()
            })

        }
      })
    },
    reply(row, status) {
      this.dialogFormReply = true
      this.formReply.purpose = row.content
      this.formReply.id = row.id
    },
    changeReport(status) {
      this.formReply.reply = this.formReply.reply.trim()
      this.$refs['dialogFormReply'].validate((valid) => {
        const postData = {
          'id': this.formReply.id,
          'replyContent': this.formReply.reply,
          'status': status
        }
        if (valid ) {
          this.dialogFormReply = false
          this.$store.dispatch('report/approveReport', postData).then(() => {
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
            this.getListReport()
          })
        }
      })
    },
     handleSizeChange(val) {
      this.limit = val
      this.getListReport()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getListReport()
    }
  }
}
</script>

<style lang="scss">
.report {
  .report-header {
    .el-input__inner {
      text-transform: capitalize;
    }
  }

  .report-item-select {
    text-transform: capitalize;
  }
  &-item-select {
    text-transform: capitalize;
  }
  .pad {
    margin-bottom: 24px;
  }
  .title {
    color: #00adff;
    text-transform: uppercase;
    font-weight: 600;
    width: 500px;
    display: inline-block;
  }
  .el-table th {
    background: #f5f5f5;
  }
  .el-tag.el-tag--APPROVED {
    background-color: #e7faf0;
    border-color: #d0f5e0;
    color: #13ce66;
  }
  .el-tag.el-tag--REJECTED {
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: red;
  }
  .el-tag.el-tag--PENDING {
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: #909399;
  }
}
.pagination-container {
  background: #fff;
  padding: 32px 16px;
}
.pagination-container.hidden {
  display: none;
}
</style>
