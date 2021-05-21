<template>
  <div class="home">
    <div class="header"></div>
    <div class="main flex-box">
      <div class="main-item flex-item-2">
        <box-container>
          1
        </box-container>
      </div>
      <div class="main-item flex-item-2">
        <box-container>
          2
        </box-container>
      </div>
      <div class="main-item flex-item-2">
        <box-container>
          3
        </box-container>
      </div>
      <div class="main-item flex-item-2">
        <box-container>
          4
        </box-container>
      </div>
      <div class="main-item flex-item-7">5
      </div>
      <div class="main-item flex-item-1">
        <box-container>
          6
        </box-container>
      </div>
      <div class="main-item flex-item-7">
        <box-container>
          7
        </box-container>
      </div>
    </div>
  </div>
</template>

<script>
import userScreenData from '@/hooks/screenData'
import BoxContainer from '@/components/BoxContainer'
export default {
  name: "Home",
  setup () {
    const screenData = userScreenData()

    return {
      ...screenData
    };
  },
  components: {
    BoxContainer
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-image: url("../assets/back.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .main {
    padding: 73px 46px 63px 46px;
    height: 100%;

    .main-item {
      padding: 0 25px;
    }
  }
}
</style>
