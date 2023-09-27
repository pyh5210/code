<template>
    <el-button :tag="tag"></el-button>
</template>

<script lang="ts">
export default {
    props:['tag', 'truncated', 'solt','class']
}

</script>