<template>
  <div class="home">
    <div class="header">
      <img src="@/assets/title.png" class="headTitle"/>
    </div>
    <div class="main flex-box">
      <div class="main-item flex-item-2">
        <box-container>
          <div class="case-wra bg-img">
            <list :title="'案件信息'"/>
          </div>
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
import List from '@/components/List'
export default {
  name: "Home",
  setup () {
    const screenData = userScreenData()

    return {
      ...screenData
    };
  },
  components: {
    BoxContainer,
    List
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-image: url("../assets/back.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  .header {
    float: left;
    width: 100%;
    height: 220px;
    background-image: url("../assets/top.png");
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .headTitle {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .main {
    padding: 73px 46px 63px 46px;
    height: calc( 100% - 220px );
    .main-item {
      padding: 0 25px;
    }
  }

  // 案件信息
  .case-wra {
    width: 691px;
    height: 622px;
    background-image: url("../assets/caseInfo.png");
  }
}
</style>
