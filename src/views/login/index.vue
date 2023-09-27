<script setup lang="ts">
import InputView from '@/views/page/input.vue'
import TextView from '@/views/page/text.vue'
</script>

<template>
  <div class="login-container">
    <el-form class="login_from" style="width: 350px;">

      <TextView class="word" tag="b" truncated="false" size="30"  solt="vue3-element-admin"/>

      <InputView solt="prefix" class="login_input" placeholder="admin" size:="20" color="#ffffff" icon="Avatar"  input="sss"/>

      <InputView solt="prefix" class="login_input" placeholder="password" size:="20" color="#ffffff" icon="Lock" type="password"/>

      <InputView solt="prefix" class="login_input" placeholder="" size:="20" color="#ffffff" icon="CircleCheckFilled" type="captcha" />
      
    </el-form>
  </div>
</template>

<script lang="ts">
export default {
  components: {
    InputView,
    TextView
  }
}

</script>

<style>
.login-container{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}
</style>