<template>
  <div class="list-module">
    <div class="title-con list-title bg-img">{{title}}</div>
    <div class="list-con">
      <ul>
        <li class="item-info flex-box">
          <span class="name">这里是案件名称1</span>
          <span>已整改</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    title: String
  },
  setup (props, ctx) {

  }
}
</script>

<style lang="scss" scoped>
  .list-module {
    width: 100%;
    height: 100%;
    padding: 0 30px;
    .title-con {
     background-image: url('../../assets/moduleName.png');
    }
    .list-con {
      padding-top: 12px;
      .item-info {
        justify-content: space-between;
        padding: 18px 3px;
        .name {
          max-width: 90%;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
</style>