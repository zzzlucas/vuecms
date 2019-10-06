<template>
  <div class="photoinfo">
    <h1>{{msg.title}}</h1>
    <div class="photomsg">
      <span>发表时间：{{msg.add_time | dateFormat }}</span>
      <span>点击：{{msg.click}}次</span>
    </div>
    <hr />
    <ul>
      <li>
        <vue-preview :slides="photoinfo"></vue-preview>
        <!-- <vue-preview :slides="photoinfo" @close="handleClose" ></vue-preview> -->
      </li>
    </ul>
    <p class="infocontent" v-html="msg.content"></p>

    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      msg: {},
      photoinfo: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumimages();
  },
  methods: {
    getThumimages() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.photoinfo = result.body.message;
          this.photoinfo.forEach(element => {
            element.w = 600;
            element.h = 400;
            element.msrc = element.src;
          });
        }
      });
    },
    getPhotoInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.msg = result.body.message[0];
        }
      });
    }
  },
  components: {
    // 注册 评论子组件
    "cmt-box": comment
  }
};
</script>

<style lang="scss">
.photoinfo {
  padding: 3px;
  h1 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .photomsg {
    display: flex;
    justify-content: space-between;
  }
  span {
    font-size: 13px;
    color: #777;
  }
  ul {
    list-style: none;
    padding: 10px;
    li {
      img {
        width: 30%;
        margin: 5px;
        box-shadow: 0 0 8px #999;
      }
    }
  }
  .infocontent {
    font-size: 13px;
    color: #333;
    span {
      color: #333;
    }
  }
}
</style>