<template>
    <el-button 
        :class="class"
        :type="type"
        :tag="tag"
    >
    {{ solt }}
    </el-button>
</template>

<script lang="ts">
export default {
    props:['tag', 'type', 'solt','class']
}

</script>
<style>
/* 登录页 */
.login-container .login{
    width: 100%;
}
</style>