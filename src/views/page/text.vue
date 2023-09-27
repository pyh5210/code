<template>
    <el-text :class="class" :tag="tag" :truncated="truncated" > {{ solt }} </el-text>
</template>

<script lang="ts">

export default {
    props:['tag','truncated', 'solt','class']
}
</script>

<style>
.login-container .word{
    font-size: 28px;
    width: 100%;
    text-align: center;
    color: #fff;
}
</style>