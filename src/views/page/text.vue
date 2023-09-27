<template>
    <el-text :tag="tag" :truncated="truncated" :class="class">{{ solt }}</el-text>
</template>

<script lang="ts">
export default {
    props:['tag', 'truncated', 'solt','class']
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