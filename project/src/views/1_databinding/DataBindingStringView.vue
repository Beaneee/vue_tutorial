<template>
  <div>
    <!-- string data binding -->
    <h1>{{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: 'John Doe',
      message: 'Welcome',
      arr: [],
      obj: {}
    }
  }
}
</script>
<style scoped>

</style>
