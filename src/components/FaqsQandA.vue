<template>
  <section>
    <div class="container">
      <div class="row">
        <h1 class="section-title">{{ faqs.header }}</h1>
        <hr class="section-hr">
      </div>
      <div class="row">
        <ul class="qsAndAs-wrapper">
          <li
            v-for="qAndA in faqs.qsAndAs"
            :key="qAndA.q"
          >
            <div class="question">{{ qAndA.q }}</div>
            <div class="answer">{{ qAndA.a }}</div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import content from "@/services/content.js";

export default {
  name: "FaqsQandA",
  data() {
    return {
      faqs: content.page.faqs
    };
  }
};
</script>

<style lang="less">
.qsAndAs-wrapper {
  max-width: 700px;
  margin-top: 20px;

  li {
    margin-bottom: 40px;
  }

  .question {
    font-size: 18px;
    line-height: 26px;
    font-weight: 700;
  }

  .answer {
    font-size: 16px;
    line-height: 22px;
    padding-top: 10px;
  }
}
</style>
