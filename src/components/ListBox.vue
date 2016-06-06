<template>
  <sort-bar @sort-by="sortBy"></sort-bar>
  <filter-bar :train_types="train_types" :from_stations="from_stations" @filter-by="filterBy"></filter-bar>

  <ul class="list-box">
    <list-item
      v-for="item of list | orderBy sort_key sort_order | filterBy filter_key in filter_field"
      track-by="train_number"
      :item="item">
    </list-item>
  </ul>
</template>

<script>
import ListItem from './ListItem'
import SortBar from './SortBar'
import FilterBar from './FilterBar'

export default {
  props: ['list', 'train_types', 'from_stations'],

  data() {
    return {
      sort_key: 'from_time',
      sort_order: 1,

      filter_key: '',
      filter_field: [
        'train_type', // 列车类型
        'from_station' // 出发站
      ],
    }
  },

  methods: {
    sortBy(key, order) { // 排序
      this.sort_key = key;
      this.sort_order = order;
    },

    filterBy(filter_key) { // 过滤
      this.filter_key = filter_key;
    }
  },

  components: {
    ListItem,
    SortBar,
    FilterBar,
  }
}
</script>

<style>
.list-box {
}
</style>
