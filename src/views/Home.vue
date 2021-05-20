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
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/back.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .main {
    padding: 4.1vh 3vh 3.3vh 3vh;
    height: 100vh;

    .main-item {
      padding: 0 2vh;
    }
  }
}
</style>
