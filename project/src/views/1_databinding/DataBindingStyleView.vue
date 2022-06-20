<template>
    <div>
        <div :style="style1">스타일 바인딩: red, 30px</div>
        <div :style="style2">스타일 바인딩: green, 30px</div>
        <button @click="style1.color ='blue'">클릭</button>
    </div>

</template>
<script>
export default {
  data () {
    return {
      style1: {
        color: 'red',
        fontSize: '30px'
      },
      style2: {
        color: 'green',
        fontSize: '30px'
      }
    }
  }
}
</script>
