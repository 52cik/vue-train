<template>
  <ul class="sort-bar">
    <li class="sort-item" @click="sortBy('from_time')">
      出发时间
      <i class="icon-sort" :class="cls_from_time"></i>
    </li>
    <li class="sort-item" @click="sortBy('use_time')">
      耗时
      <i class="icon-sort" :class="cls_use_time"></i>
    </li>
    <li class="sort-item" @click="sortBy('min_price')">
      价格
      <i class="icon-sort" :class="cls_min_price"></i>
    </li>
    </ul>
</template>

<script>
export default {
  data () {
    return {
      cls_from_time: 'up',
      cls_use_time: '',
      cls_min_price: '',

      sort_key: 'from_time',
      sort_order: 1,
    }
  },

  methods: {
    sortBy(sort_key) {
      if (this.sort_key === sort_key) {
        this.sort_order = -this.sort_order; // 倒序
      } else {
        this.sort_order = 1;
      }

      this.sort_key = sort_key;

      // 操作 class
      this.cls_from_time = this.cls_use_time = this.cls_min_price = '';
      this['cls_' + sort_key] = this.sort_order == 1 ? 'up' : 'down';

      this.$dispatch('sort-by', this.sort_key, this.sort_order);
    }
  }
}
</script>

<style>
.sort-bar {
  display: flex;
  width: 100%;
  height: 36px;
  line-height: 36px;
  background-color: #fff;
  top: 50px;
  left: 0;
  position: fixed;
  border-bottom: 1px solid #EAEAEA;
  text-align: center;
}

.sort-item {
  flex: 1;
  cursor: pointer;
}
</style>
