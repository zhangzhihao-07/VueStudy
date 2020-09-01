const app = new Vue({
  el: '#app',
  data: {
    list:[
      {
        id: 1,
        name: '第1本书',
        price: 100,
        count: 1
      },
      {
        id: 2,
        name: '第2本书',
        price: 120,
        count: 1
      },
      {
        id: 3,
        name: '第3本书',
        price: 130,
        count: 1
      },
      {
        id: 4,
        name: '第4本书',
        price: 140,
        count: 1
      },
    ],

  },
  methods: {
    // getPrice(price) {
    //   return '￥' + price.toFixed(2);
    // }
    add(index) {
      // console.log(index);
      this.list[index].count++;
    },
    unadd(index) {
      // console.log(index);
        this.list[index].count--;
    },
    reMove(index) {
      this.list.splice(index,1)
    }
  },
  computed: {
    sumPrice() {
      //普通的for循坏
      // let sum = 0;
      // for(let i=0; i<this.list.length; i++){
      //   sum += this.list[i].price * this.list[i].count;
      // }
      // return sum;

      // 第二种方式
      // let sum = 0;
      // for(let i in this.list) {
      //   sum += this.list[i].price * this.list[i].count;
      // }
      // return sum;

      //第三种方式
      let sum = 0;
      for(let i of this.list) {
        sum += i.price * i.count;
      }
      return sum;

    }
    
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  }
})
