<template>
  <div v-if="!item.hidden" @click="changeRouter">
    <div>xxx</div>
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)" >
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}" v-if="!onlyOneChild.notShowMenu && role === onlyOneChild.meta.roles || !onlyOneChild.notShowMenu && !onlyOneChild.meta.roles">
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <!-- <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" /> -->
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {
      role: ''
    }
  },
  created() {
    this.role = JSON.parse(localStorage.getItem('infoUser')).role.roleName
  },
  methods: {
    changeRouter() {
      const status = localStorage.getItem('infoUser')
      const statusTemp = JSON.parse(status)
      const postData = {
        page: 0,
        limit: 10,
        criteria: {
          email: statusTemp.email
        }
      }
      this.$store.dispatch('user/getStatusUser', postData).then(() => {
        const status = this.$store.state.user.status
        if (status !== 'ACTIVATE') {
          this.logout()
        }
      })
    },

    async logout() {
      await this.$store.dispatch('user/logout')
      localStorage.removeItem('infoUser')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      const startInterval = this.$store.state.request.startInterval
      clearInterval(startInterval)
    },

    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
