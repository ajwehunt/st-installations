<template>
  <div id="fb-plugin-loader">
    <div class="fbloader-top"></div>
    <div class="fbloader-header">
      <div>
        <div class="fbloader-logo"></div>
        <div class="fbloader-title">
            <div class="fbloader-h1"></div>
            <div class="fbloader-date"></div>
        </div>
      </div>
      <div class="fbloader-logo-small"></div>
    </div>
    <div class="fbloader-p">
      <div class="fbloader-p-line"></div>
      <div class="fbloader-p-line"></div>
      <div class="fbloader-p-line"></div>
      <div class="fbloader-p-line"></div>
      <div class="fbloader-p-line"></div>
      <div class="fbloader-p-line-half"></div>
    </div>
    <div class="fbloader-image"></div>
  </div>
</template>

<script>
export default {
  name: "HomeSocialFbloader"
};
</script>

<style lang="less" scoped>
#fb-plugin-loader {
  height: 100%;
  width: 100%;
  z-index: 4;
  background-color: aquamarine;
  position: absolute;

  div {
    background-color: #f3f3f3;
  }

  .fbloader-top {
    width: 100%;
    height: 70px;
  }

  .fbloader-header {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    .fbloader-logo {
      height: 50px;
      width: 50px;
    }

    .fbloader-logo-small {
      height: 20px;
      width: 20px;
    }
  }

  .fbloader-p {
    display: flex;

    .fbloader-p-line {
      height: 14px;
      width: 100%;
      padding: 0 10px;
    }
  }

  .fbloader-header,
  .fbloader-title,
  .fbloader-p {
    background: none;
  }
}
</style>
