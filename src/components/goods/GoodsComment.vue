<template>
  <div>
    <cmtboxxx :id="$route.params.id"></cmtboxxx>
  </div>
</template>

<script>
import cmtbox from "../subcomponents/comment.vue";

export default {
  components: {
    'cmtboxxx':cmtbox
  }
};
</script>

<style lang="scss" scoped>

</style>
