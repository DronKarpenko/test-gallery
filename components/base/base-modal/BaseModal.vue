<script setup>
const emit = defineEmits(['close'])

function close() {
  emit('close')
}
</script>

<template>
  <div class="base-modal">
    <div class="base-modal__actions">
      <slot name="actions" />
      <div
       class="base-modal__close"
       @click="close"
      >
        <svg class="base-modal__close-icon">
          <use href="#icon-close" />
        </svg>
      </div>
    </div>

    <div class="base-modal__container">
      <div
       class="base-modal__content"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'base-modal';
</style>
