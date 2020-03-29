<template>
  <div class="text">
    <div class="search-bar">
      <van-row>
        <van-col :span="3">
            <img :src="location" width="80%" class="search-icon" />
        </van-col>
        <van-col :span="16">
            <input type="text" class="search-input">
        </van-col>
        <van-col :span="5">
            <van-button type="mini">搜索</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            location:require('../../assets/images/location.png')
        }
    }
};
</script>

<style scoped>
 .search-bar {
     height: 2.2rem;
     
     background-color: #e5017d;
     line-height: 2.2rem;
 }
 .search-input {
     height: 1.3rem;
     background-color: #e5017d;
     border:none;
     border-bottom: 1px solid #fff;
 }
 .search-icon {
     padding-top: .2rem;
 }
</style>