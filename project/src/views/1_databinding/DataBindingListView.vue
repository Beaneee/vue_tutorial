<template>
    <div>
        <div>
            <select name="" id="">
                <option :value="city.code" :key="city.code" v-for="city in cities">
                    {{city.title}}
                </option>
            </select>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>제품번호</th>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>주문수량</th>
                        <th>합계</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="drink.drinkId" v-for="drink in drinkList">
                        <td>{{drink.drinkId}}</td>
                        <td>{{drink.drinkName}}</td>
                        <td>{{drink.price}}</td>
                        <td><input type="number" name="" id="" v-model="drink.qty"></td>
                        <td>{{drink.price * drink.qty}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '경기', code: '031' },
        { title: '부산', code: '051' },
        { title: '제주', code: '064' }
      ],
      drinkList: [
        {
          drinkId: '1',
          drinkName: '코라콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '2',
          drinkName: '코라콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '3',
          drinkName: '코라콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '4',
          drinkName: '코라콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '5',
          drinkName: '코라콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '6',
          drinkName: '코라콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '7',
          drinkName: '코라콜라',
          price: 700,
          qty: 1
        }
      ]
    }
  }
}
</script>
