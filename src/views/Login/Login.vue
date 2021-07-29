<template>
  <div class="login">
    <Elements />
    <div class="login-form fade-in-left">
      <h1 class="form-title">welCome fast-admin!</h1>
      <LoginForm @finsh="submit" :loading="formLoading" />
    </div>
  </div>
</template>

<script>
import { userLogin } from "@/services/user/user"
import { notifiMsg } from "@/utils/antd"
export default {
  name: "login",
  components: {
    LoginForm: () => import("./components/LoginForm.vue"),
    Elements: () => import("./components/Element/Element.vue"),
  },
  data() {
    return {
      spinning: false,
      formLoading: false
    }
  },
  methods: {
    /**
     * 登录提交
     */
    async submit(valus) {
      this.formLoading = true
      const { data, status } = await userLogin(valus)
      if (status) {
        this.$store.dispatch("saveUserRoleInfo", {
          userRoleId: data.roleInfo,
        })
        notifiMsg("success", `欢迎回来！${data.userInfo.userName}`)
        this.$router.push("/manage/home")
      }
      this.formLoading = false
    },
  },
}
</script>
<style lang="less">
@import url('./login.less');
</style>
