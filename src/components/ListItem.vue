<template>
  <li class="list-item">
    <div class="train-number">
      <div class="fl">{{item.train_number}} | 其它</div>
      <div class="fr">{{item.use_time | time}}</div>
    </div>

    <div class="train-detail">
      <div class="departure">
        <span class="departure-time">{{item.from_time}}</span>
        <span class="departure-attr"><i class="icon-circle s-icon1"></i>{{item.from_station}}</span>
        <span class="fr price">￥{{item.min_price}}起</span>
      </div>

      <div class="arrival">
        <span class="arrival-time">{{item.to_time}}</span>
        <span class="arrival-attr"><i class="icon-circle s-icon2"></i>{{item.to_station}}</span>
        <span class="fr">{{item.ticket_number}}张</span>
      </div>
    </div>

    <div class="train-info">
      <span v-for="seat of item.seats">{{seat.name}}({{seat.number}}) </span>
    </div>
  </li>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style>
.list-item {
  border: 1px solid #e5e5e5;
  margin: 8px 0;
  background-color: #fff;
  height: 110px;
}

.train-number,
.train-detail,
.train-info {
  clear: both;
  padding: 0 15px;
}

.train-number {
  height: 32px;
  line-height: 32px;
}
.train-detail .departure,
.train-detail .arrival {
  height: 26px;
  line-height: 26px;
}
.train-info {
  height: 21px;
  line-height: 21px;
}

.list-item .price {
  font-family: Arial;
  color: #fd8f01;
  font-size: 16px;
  font-weight: 600;
}

.list-item .departure-time,
.list-item .arrival-time {
  display: inline-block;
  width: 50px;
}

.list-item .s-icon1 {
  margin: 0 5px;
  border-color: #00B358;
}
.list-item .s-icon2 {
  margin: 0 5px;
  border-color: #f06463;
}

.list-item .departure-time,
.list-item .departure-attr {
  font-size: 16px;
  font-weight: 600;
}
</style>
