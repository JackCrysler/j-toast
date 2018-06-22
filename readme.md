# 说明

    这是一个基于VUE的极简plugin，做提示信息功能，版本0.0.1。
    开发基于移动端布局，如果要支持PC端布局，建议自行修改scss样式。
    环境依赖：webpack,VUE,scss(当然你可以手动换成css引用)

## 使用

    import Vue from 'vue'
    import Toast from 'toast'
    Vue.use(Toast,options)

    template:

        <Toast></Toast>或者<Toast ref='toa'></Toast>

    javascript:

        1. this.$toastBus.$emit('toast','这里是提示信息')
        2. this.$refs.toa.active('这里是提示信息')

### options

    type:object

    目前只支持timeout配置

    {
        timeout:3000  自动关闭时间
    }