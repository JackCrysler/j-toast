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
<style scoped>
.tips{
    background: rgba(0,0,0,.7);
    color: #fff;
    height: 0.9rem;
    box-sizing: border-box;
    border-radius: 0.9rem;
    font-size: 0.32rem;
    line-height: 0.9rem;
    padding: 0 0.3rem;
    margin: 5px;
}
</style>
