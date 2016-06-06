<template>
  <ul class="filter-bar">
    <li class="filter-item" @click="showPanel('train_types')">
      车次类型
      <i class="icon-sec"></i>
    </li>
    <li class="filter-item" @click="showPanel('from_stations')">
      出发站
      <i class="icon-sec"></i>
    </li>
    <li class="filter-item">
      更多
      <i class="icon-sec"></i>
    </li>
  </ul>

  <div v-if="show_panel === 'train_types'" class="filter-layer">
    <div class="panel">
      <h3>
        <span class="no" @click="hidePanel">取消</span>
        <span class="ok" @click="filterBy">确定</span>
      </h3>
      <ul>
        <li v-for="it of train_types" :class="active_key === it.key ? 'active' : ''" @click="active(it.key)">
          <span>{{it.name}}</span>
        </li>
      </ul>
    </div>
  </div>

  <div v-if="show_panel === 'from_stations'" class="filter-layer">
    <div class="panel">
      <h3>
        <span class="no" @click="hidePanel">取消</span>
        <span class="ok" @click="filterBy">确定</span>
      </h3>
      <ul>
        <li v-for="it of from_stations" :class="active_key === it.key ? 'active' : ''" @click="active(it.key)">
          <span>{{it.name}}</span>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
export default {
  props: ['train_types', 'from_stations'],

  data() {
    return {
      show_panel: '',
      active_key: '',
    }
  },

  methods: {
    showPanel(panel) {
      this.show_panel = panel
    },
    hidePanel() {
      this.show_panel = ''
    },
    active(key) {
      this.active_key = key
    },
    filterBy() {
      this.$dispatch('filter-by', this.active_key);

      this.hidePanel()
    }
  }
}
</script>

<style>
.filter-bar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 36px;
  line-height: 36px;
  background-color: #fcfcfc;
  width: 100%;
  text-align: center;
  z-index: 1;
}
.filter-item {
  flex: 1;
  border-left: 1px solid #d2d2d2;
  border-top: 1px solid #d2d2d2;
}
.filter-item:first-child {
  border-left: 0;
}

.filter-layer {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.filter-layer .panel{
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 36px;
}
.filter-layer h3{
  margin: 0;
  font-size: 16px;
  padding: .5em 1em;
}
.filter-layer .no{}
.filter-layer .ok{
  float: right;
  color: #00b358;
}

.filter-layer ul {}
.filter-layer ul li {
  position: relative;
  line-height: 44px;
  border-top: 1px solid #e5e5e5;
  padding: 0 1em;
}
.filter-layer ul li.active {
  color: #00b358;
}
.filter-layer ul li.active.active::after {
  content: "";
  width: 14px;
  height: 6px;
  border-bottom: 2px solid #00b358;
  border-left: 2px solid #00b358;
  position: absolute;
  top: 50%;
  right: 8px;
  margin-top: -4px;
  -webkit-transform: rotate(-45deg) translateY(-50%);
  transform: rotate(-45deg) translateY(-50%);
}
</style>
