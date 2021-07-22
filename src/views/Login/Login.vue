<template>
    <div class="login">
        <Elements />
        <div class="login-form fade-in-left">
            <h1 class="form-title">welCome fast-admin!</h1>
            <LoginForm @finsh="submit" />
        </div>
    </div>
</template>

<script>
import { userLogin } from "@/services/user/user"
import { alertMsg, notifiMsg } from "@/utils/antd"
export default {
    name: "login",
    components: {
        LoginForm: () => import("./components/LoginForm.vue"),
        Elements: () => import("./components/Element/Element.vue"),
    },
    data() {
        return {
            spinning: false,
        }
    },
    methods: {
        async submit(valus) {
            const { data, status, msg } = await userLogin(valus)
            if (status) {
                this.$router.push("/manage")
                notifiMsg("success", `欢迎回来！${data.userName}`)
                this.$store.dispatch("saveUserRoleInfo", {
                    userRoleId:data.roleInfo
                })
                return
            }
            alertMsg("warning", msg)
        },
    },
}
</script>
<style lang="less">
@import url("./login.less");
</style>
