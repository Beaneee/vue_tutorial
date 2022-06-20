<template>
    <div>
        <input type="search" v-model="searchText" @keyup="checkEnter($event)"/>
        <input type="search" v-model="searchText" @keyup.enter="doSearch"/>
        <button @click="doSearch">조회</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      searchText: '',
    }
  },
  methods: {
    doSearch () {
      console.log(this.searchText)
    },
    checkEnter(event) {
      if(event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>
