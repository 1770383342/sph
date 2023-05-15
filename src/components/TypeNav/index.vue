<template>
  <div class="type-nav">
    <div class="container" @mouseleave="leaveIndex" @mouseenter="enterShow">
      <h2 class="all">全部商品分类</h2>
      <!-- 过渡动画 -->
      <transition name="sort">
        <div class="sort" v-show="show">
          <!-- 利用事件委派和路由的编程式导航实现跳转和参数传递 -->
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              :class="{ cur: currentIndex == index }"
            >
              <h3 @mouseenter="changeIndex(index)">
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                  >{{ c1.categoryName }}</a
                >
              </h3>
              <!-- 二三级分类 -->
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == index ? 'block' : 'none' }"
              >
                <div
                  class="subitem"
                  v-for="c2 in c1.categoryChild"
                  :key="c2.categoryId"
                >
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 引入lodash，实现节流，防抖
// 按需引入
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      // 存储用户鼠标移动到哪一个分类
      currentIndex: -1,
      // 默认的显示状态
      show: true,
    };
  },
  // 组件挂在完毕：可以向服务器发请求
  mounted() {
    this.show = true;
    if (this.$route.name !== "home") {
      this.show = false;
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => {
        // console.log(state);
        return state.home.categoryList;
      },
    }),
  },
  methods: {
    // 鼠标进入修改currentIndex属性
    // 节流
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }, 50),
    leaveIndex() {
      this.currentIndex = -1;
      // 当鼠标移出时，search页面隐藏商品分类列表
      if (this.$route.name !== "home") {
        this.show = false;
      }
    },
    // 当鼠标移入时，展示商品分类列表
    enterShow() {
      if (this.$route.name !== "home") {
        this.show = true;
      }
    },
    goSearch(event) {
      // 如果标签的身上拥有categoryName属性则为a标签
      let { categoryname, category1id, category2id, category3id } =
        event.target.dataset;
      if (categoryname) {
        // 整理路由跳转参数
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        // 置空参数防止数据出错
        query.category1Id = "";
        query.category2Id = "";
        query.category3Id = "";
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else if (category3id) {
          query.category3Id = category3id;
        }
        // 判断：如果路由跳转的时候，带有params参数也需要传入
        if (this.$route.params) {
          location.params = this.$route.params;
          // 整理完参数
          location.query = query;
          // console.log(location);
          this.$router.push(location);
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;
            cursor: pointer;
            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                    cursor: pointer;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
    // 过渡动画样式
    // 过渡动画开始状态（进入）
    .sort-enter {
      height: 0px;
    }
    // 过渡动画的结束状态
    .sort-enter-to {
      height: 461px;
    }
    // 定义动画时间，速率
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>