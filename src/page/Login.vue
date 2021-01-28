<template>
  <div>
    <div>登录页</div>
    <div>
      <el-input v-model="userName" placeholder="请输入用户名"></el-input>
      <el-input v-model="userPwd" placeholder="请输入密码"></el-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({ components: {} })
export default class Login extends Vue {
  private userName: string = "";
  private userPwd: string = "";
  @Watch("userName")
  private validateName(userName: string): void {
    console.log(userName, 111);
  }
  @Watch("userPwd")
  private validatePwd(userPwd: string): void {
    console.log(userPwd, 222);
  }
}
</script>

<style scoped lang="scss">
</style>
