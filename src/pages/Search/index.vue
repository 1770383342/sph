<template>
  <div>
    我是搜索{{ keyword }}
    <h1>params参数是{{ $route.params.keyword }}</h1>
    <h1>query参数是{{ $route.query.k }}</h1>
  </div>
</template>

<script>
export default {
  name: "",
  props:['keyword','k']
};
</script>

<style>
</style>