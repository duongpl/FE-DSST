/* eslint-disable vue/no-parsing-error */
<template>
  <div class="profile">
    <h2 class="title">Lecturer Information</h2>

    <el-form ref="dataForm" :rules="rules" :model="userInfo" label-position="left" label-width="200px" style="width: 400px; margin-left:5px;">
      <el-form-item label="Lecturer Name" prop="fullName">
        <el-input v-model="userInfo.fullName" />
      </el-form-item>
      <el-form-item label="Phone Number" prop="phone">
        <el-input type="text" v-model="userInfo.phone" />
      </el-form-item>
      <el-form-item label="Short Name" prop="shortName">
        <el-input v-model="userInfo.shortName" />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <span>{{ userInfo.email }}</span>
      </el-form-item>
      <el-form-item label="Postion" prop="headOfDepartment">
        <span>{{ userInfo.role.roleName === 'ROLE_ADMIN' ? 'Head of Department' : 'Lecturer'}}</span>
      </el-form-item>
      <el-form-item label="Department" prop="department">
        <span>{{ userInfo.department }}</span>
      </el-form-item>
      <el-form-item v-if="userInfo.role.roleName === 'ROLE_ADMIN'" label="Full Time" prop="fullTime">
        <el-checkbox v-model="userInfo.fullTime"></el-checkbox>
      </el-form-item>
      <el-form-item v-if="userInfo.role.roleName === 'ROLE_ADMIN'" label="Min of class quota" prop="quotaClass">
        <el-input-number v-model="userInfo.quotaClass"min="0" :max="10"></el-input-number>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="updateData()">
        SAVE
      </el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  data() {
    return {
      list: [],
      listLoading: true,
      userInfo: JSON.parse(localStorage.getItem('infoUser')),
      rules: {
        fullName: [{ required: true, message: 'Name is required.', trigger: 'change' }],
        shortName: [{ required: true, message: 'Short Name is required.', trigger: 'change' }]
      }
    }
  },
  created() {
  },
  methods: {
    updateData() {
      const regexPhoneNumber = /((0)+([0-9]{9}))/g
      this.$refs['dataForm'].validate((valid) => {
        const isValidPhone = regexPhoneNumber.test(this.userInfo.phone) || !this.userInfo.phone && !regexPhoneNumber.test(this.userInfo.phone)
        if (valid && isValidPhone) {
          this.$store.dispatch('manager/updateUserLocalStorage', this.userInfo).then(() => {
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
    }
  }
}
</script>

<style lang="scss">
.profile {
  width: 600px;
  align: center;
  padding: 24px;
  border: 10px solid #e5e9f2;
  margin: auto;
  margin-top: 60px;
  box-shadow: 0px 0px 4px -1px #d2d2d2;
  .title {
    color: #00adff;
    text-transform: uppercase;
    font-weight: 600;
    padding-bottom:15px;
    text-align: center;
  }

}

</style>
