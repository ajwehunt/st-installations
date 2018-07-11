<template>
  <div id="header-contact-wrap">
    <address id="header-contact">
      <a :href="`tel:${info.phone}`">
        <h2>{{ header.callText }}</h2>
        <h2>{{ info.phone }}</h2>
      </a>
    </address>
  </div>
</template>

<script>
import content from "@/services/content.js";

export default {
  name: "HeaderContact",
  data() {
    return {
      info: content.info,
      header: content.component.header
    };
  }
};
</script>

<style lang="less" scoped>
#header-contact-wrap {
  display: flex;
  justify-content: center;
  height: 48px;
  width: 100%;
  background: black;
  z-index: 6;

  #header-contact {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    padding-right: 25px;
    padding-top: 8px;

    a {
      display: flex;
      margin-bottom: 14px;

      h2 {
        color: #fff;
        font-size: 18px;
        font-weight: 600;

        &:first-child {
          margin-right: 12px;
          user-select: none;
        }

        &:last-child {
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>
