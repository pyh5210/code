<template>
  <div class="login-container">
    <el-form class="login_from" style="width: 350px;">

      <TextView class="word" tag="b" truncated="false" size="30"  solt="vue3-element-admin" 
        />

      <InputView 
        solt="prefix" 
        placeholder="admin" 
        size:="20" 
        color="#ffffff" 
        icon="Avatar"  
        v-model="username" 
        />

      <InputView 
        solt="prefix" 
        placeholder="password" 
        size:="20" 
        color="#ffffff" 
        icon="Lock" 
        type="password"
        v-model="password"/>

      <InputView 
        solt="prefix" 
        placeholder="" 
        size:="20" 
        color="#ffffff" 
        icon="CircleCheckFilled" 
        type="captcha" 
        v-model="captcha"/>

        <ButtonView class="login" tag="div" type="primary" solt="Login" @click="loginin"/>

    </el-form>
  </div>
</template>

<script lang="ts">
import { loginin } from '@/api/api'
import InputView from '@/views/page/input.vue'
import TextView from '@/views/page/text.vue'
import ButtonView from '@/views/page/button.vue'

export default {
  data(){
    return {
      username:'admin',
      password:'123456s',
      captcha:'',
    }
  },
  components: {
    InputView,
    TextView,
    ButtonView
  },
  methods:{
    loginin(){
      let con ={
        "username":this.username,
        "password":this.password,
      }
      loginin(con).then((res)=>{
        console.log(res)
      }).catch(()=>{
        console.log(this)
      })
        

    }
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