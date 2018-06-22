<template>
    <transition name="toast">
        <div class="tips" v-if="isActive">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
export default {
  name: "toast-item",
  data() {
    return {
      isActive: false,
      _timeout: 2000
    };
  },
  props: {
    timeout: {
      type: Number
    }
  },
  mounted() {
    this.isActive = true;
    setTimeout(() => {
      this.isActive = false;
    }, this.timeout || this._timeout);
  }
};
</script>
<style lang="scss" scoped>
</style>
