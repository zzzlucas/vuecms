<template>
  <div>
    <div class="goods-list">
      <div class="goods-item" v-for="item in msg" :key="item.id" @click="goDetail(item.id)">
        <img :src="item.img_url" alt />
        <h1 class="title">{{item.title}}</h1>
        <div class="info">
          <p class="price">
            <span class="now">{{item.sell_price}}</span>
            <span class="old">{{item.market_price}}</span>
          </p>
          <p class="sell">
            <span>热卖中</span>
            <span>剩{{item.stock_quantity}}件</span>
          </p>
        </div>
      </div>
    </div>
    <mt-button style="margin-bottom:60px" type="danger" size="large"  @click="getNewpage">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 1,
      msg: []
    };
  },
  created() {
    this.getgoods();
  },
  methods: {
    getgoods() {
      this.$http.get("api/getgoods?pageindex=" + this.number).then(function(result){
        if (result.body.status === 0) {
          this.msg = this.msg.concat(result.body.message);
        }
      });
    },
    getNewpage() {
      this.number++;
      this.getgoods();
    },
    goDetail(id) {
      
      console.log(this);
      this.$router.push({ name: "goodsinfo", params: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
// .gaaaa {
//   height: 300px;
// }
// .goooo {
//   height: auto;
// }
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>