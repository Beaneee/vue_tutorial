<template>
    <div>
        <button @click="increaseCounter">Add 1</button>
        <button @click="decreaseCounter">Sub 1</button>
        <span>{{counter}}</span>
    </div>
</template>
<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter () {
      this.counter += 1
    },
    decreaseCounter () {
      this.counter -= 1
    }
  }
}
</script>
