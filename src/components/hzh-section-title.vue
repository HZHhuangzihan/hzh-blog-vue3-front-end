<template>
    <h1 class="hzh-section-title"><slot></slot></h1>  
</template>

<script>
export default {
    name: "HzhSectionTitle"
}
</script>

<style>
h1.hzh-section-title {
    color: #757575;
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 15px;
    border-bottom: 1px dashed #ececec;
}
</style>