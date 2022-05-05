export default {
  props : {
    isShowed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog () {
      this.$emit("update:isShowed", false)
    }
  },
  mounted () {

  }
}