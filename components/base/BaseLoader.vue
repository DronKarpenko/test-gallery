<template>
  <div class="loader">
    <span
      class="loader__item"
      :class="{ loader__item_indents: indents }"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'BaseLoader',

  props: {
    indents: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>

.loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;

  .loader__item {
    width: 48px;
    height: 48px;
    border: 5px solid #AD9B87FF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    &_indents {
      width: 24px;
      height: 24px;
      border-width: 3px;
    }
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
