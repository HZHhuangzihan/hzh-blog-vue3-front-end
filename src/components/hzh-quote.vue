<template>
  <div class="hzh-quote"><slot></slot></div>
</template>

<script>
export default {
    name: "HzhQuote"
}
</script>

<style>
.hzh-quote {
    border-left: 3px solid #002FA7;
    background-color: #fbfbfb;
    padding: 15px 20px;
    border-radius: 3px;
}
</style>