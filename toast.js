/**
 *  @actionName Toast
 *  功能：提示横条，可以自动隐藏
 * 
 *  @callback active ,显示提示消息
 *      @param msg string
 *      @param options config
 *  
 *  @instance $toastBus, toast组件专用的全局bus 
 * 
 *  @event toast, 显示提示信息 
 */

import './toast.css'
import ToastItem from './toast.vue'
let Toast = {
  install(Vue, options) {
    const toastBus = new Vue({});

    Object.defineProperty(Vue.prototype, "$toastBus", {
      value: toastBus
    })

    //全局组建
    Vue.component('Toast', {
      template: `
      <div class="toast">
        <ToastItem v-for="(x,i) in msg" :key="i.toString()" :timeout="options.timeout">{{x}}</ToastItem>                 
      </div>
      `,
      data() {
        return {
          msg: [],
          options
        }
      },
      components: {
        ToastItem
      },
      methods: {
        active(msg, options) {
          if (options) {
            this.timeout = options.timeout
          }

          this.msg.push(msg);
        }
      },
      mounted() {
        toastBus.$on('toast', (msg) => {
          this.active(msg)
        })
      }
    })
  }
}

export default Toast
