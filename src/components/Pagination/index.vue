<template>
  <div class="pagination">
    <button>上一页</button>
    <button>1</button>
    <button>...</button>
    <button>3</button>
    <button>4</button>
    <button>{{ pageNo }}</button>
    <button>6</button>
    <button>7</button>
    <button>...</button>
    <button>{{ totlePage }}</button>
    <button>下一页</button>

    <button style="margin-left: 30px">共 {{ totle }} 条</button>
  </div>
</template>
  
  <script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "totle", "continues"],
  computed: {
    // 总页数
    totlePage() {
      // 向上取整
      return Math.ceil(this.totle / this.pageSize);
    },
    // 计算出连续的页码的起始的数字与结束的数字[连续的页码至少是5]
    startNumAndEndNum() {
      let start = 0,
        end = 0;
      // 连续的页码数字5[就是至少5页]，如果出现不正常的现象[就是不够五条]
      //   不正常现象，连续页码没有总页码多
      if (this.continues > this.totlePage) {
        start = 1;
        end = this.totlePage;
      } else {
        // 正常现象[连续页码5，总页数大于5]
        start = this.pageNo - parseInt(this.continues / 2);
        end = this.pageNo + parseInt(this.continues / 2);
        // 出现不正常现象时纠正[start数字出现负数或者0]
        if (start < 1) {
          start = 1;
          end = this.continues;
        }
        // 出现不正常现象时纠正[end数字出现大于总页数]
        if (end > this.totlePage) {
          end = this.totlePage;
          start = this.totlePage - this.continues + 1;
        }
      }
      return { start, end };
    },
  },
};
</script>
  
  <style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
  