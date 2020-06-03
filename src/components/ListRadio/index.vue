<template>
  <div class="list-radio">
    <div class="list-radio__main">
      <ul class="list-radio__main--lever-wrapper">
        <li v-for="oneLever in lever" :key="oneLever" class="list-radio__main--lever-header">
          {{ oneLever }}
        </li>
      </ul>
      <div class="list-subject">
        <div v-for="subject in dataSubjects" :key="subject.name" class="list-subject-content">
          <span class="list-subject-content_name">{{ subject.name }}</span>
          <ul class="list-radio__main--lever">
            <li v-for="oneLever in lever" :key="oneLever" class="list-radio__main--lever-item" @click="changeValue(subject)">
              <el-radio v-model="subject.levelOfPrefer" :label="oneLever" value="oneLever.value" :disabled="!isEdit">Option B</el-radio>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListRadio',
  props: [
    'dataSubjects',
    'isSubject',
    'isEdit'
  ],
  data() {
    return {
      lever: [0, 1, 2, 3, 4, 5],
      radio: '1',
      subject: [

      ],
      currentRow: null
    }
  },
  methods: {
    changeValue(value) {
      const dataChange = {
        isSubject: this.isSubject,
        value: value
      }
      this.$emit('changeValueRadio', dataChange)
    },
    handleCurrentChange(data) {
      this.currentRow = data
    }
  }
}
</script>

<style lang="scss">
.list-radio {
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding-left: 20px;

  &__main--lever {
    display: flex;
    list-style: none;
    padding: 0;
    text-align: right;

    .el-radio__inner {
      border: 2px solid #c8c8c9;
    }

    &-header {
      width: 70px;
      text-align: right;
      padding-right: 5px;
    }

    &-wrapper {
      padding-left: 100px;
      display: flex;
      list-style: none;
    }

    &-item {
      width: 70px;

      .el-radio__inner::after {
        width: 7px;
        height: 7px;
      }

      .el-radio__inner {
        width: 20px;
        height: 20px;
      }

      .is-disabled {
        .el-radio__inner {
          background-color: #e6e7e8;
          border-color: #c5c5c5;
        }
      }

      .el-radio__label {
        display: none;
      }
    }
  }

  .list-subject-content_name {
    color: #00adff;
    font-weight: 700;
    width: 100px;
    display: block;
  }

  .list-subject-content {
    display: flex;
    align-items: center;
  }
}

</style>
