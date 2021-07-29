<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
      <a-input v-decorator="['userName', { rules: [{ required: true, message: '用户名不能为空哦!' }] }]" placeholder="userName">
        <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25);" />
      </a-input>
    </a-form-item>
    <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
      <a-input v-decorator="['userPass', { rules: [{ required: true, message: '密码不能为空哦!' }] }]" type="password" placeholder="userPass">
        <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25);" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button :loading="loading" block type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field])
}
export default {
  props: {
    loading: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "horizontal_login" })
    }
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields()
    })
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched("userName") && getFieldError("userName")
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched("password") && getFieldError("userPass")
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // 自定义事件输出表单
          this.$emit("finsh", values)
        }
      })
    },
  },
}
</script>

<style></style>
