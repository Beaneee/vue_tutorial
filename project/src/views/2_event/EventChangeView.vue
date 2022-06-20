<template>
    <div>
        <select name="" id="" @change="changeCity($event)" v-model="selectedCity">
            <option value=""></option>
            <option v-for="city in cityList" :key='city.code' :value='city.code'>{{city.title}}</option>
        </select>
        <select name="" id="">
            <option :value="dong.dongcode" :key="dong.dongcode" v-for="dong in selectedDongList">
                {{dong.dongTitle}}
            </option>
        </select>
    </div>
</template>
<script>
export default {
  data () {
    return {
      selectedCity: '',
      cityList: [
        { code: '02', title: '서울' },
        { code: '031', title: '경기' },
        { code: '064', title: '제주' }
      ],
      dongList: [
        { code: '02', dongcode: '1', dongTitle: '서울 1동' },
        { code: '02', dongcode: '2', dongTitle: '서울 2동' },
        { code: '02', dongcode: '3', dongTitle: '서울 3동' },
        { code: '02', dongcode: '4', dongTitle: '서울 4동' },
        { code: '031', dongcode: '1', dongTitle: '경기 1동' },
        { code: '031', dongcode: '2', dongTitle: '경기 2동' },
        { code: '031', dongcode: '3', dongTitle: '경기 3동' },
        { code: '031', dongcode: '4', dongTitle: '경기 4동' },
        { code: '064', dongcode: '1', dongTitle: '제주 1동' },
        { code: '064', dongcode: '2', dongTitle: '제주 2동' },
        { code: '064', dongcode: '3', dongTitle: '제주 3동' },
        { code: '064', dongcode: '4', dongTitle: '제주 4동' }
      ],
      selectedDongList: []
    }
  },
  methods: {
    changeCity (event) {
      console.log(event.target.value)
      this.selectedDongList = this.dongList.filter(dong => dong.code === this.selectedCity)
    }
  }
}
</script>
