<template>
    <el-input v-if="show === false" :class="class" :type="type" :placeholder="placeholder" v-model="value">
        <template v-slot:[solt]>
            <el-icon :size="size" :color="color">
                <component :is="icon"></component></el-icon>
        </template>

        <template #append v-if=" type == 'captcha'">
            <div class="captcha" >
                <img :src="src" @click="getimage" style="margin-top: 10px;">
            </div>
        </template >
    </el-input>

    <el-input v-else="show === true"  show-password :class="class" :type="type" :placeholder="placeholder" v-model="value">
        <template v-slot:[solt]>
            <el-icon :size="size" :color="color">
                <component :is="icon"></component></el-icon>
        </template>

        
    </el-input>
  
</template>
  
<script lang="ts" >
import { getCaptcha } from '@/api/api'

export default {
    props: ['placeholder','size','color','icon','type','class','solt','input'],
    data(){
        return {
            value: '',
            show: false,
            src: ''
        }
    },
    mounted() {
        this.show = this.type =='password' ? true:false
        this.value = this.input 
        if(this.type == 'captcha'){
            this.getimage()
        }
    },
    methods:{
        getimage(){
            getCaptcha([]).then((res)=>{
                this.src =  res.data.data.verifyCodeBase64
            })
        }
    }

}
</script>

<style>

/* 登录页 */
.login-container .login_input .el-input-group__append{
    width: 150px;
}

.login-container .el-input__wrapper{
    background-color: rgb(0, 0, 0, 1);
}

.login-container .el-input{
    border: 0px;
}

.login-container .el-input__inner{
    color: #ffffff;
}
</style>
