<template>
    <div clsss='toasts'></div>
</template>
<script>
/* global $ */
export default {
  name: 'Toasts',
  data() {
    return {
      messages: [],
    };
  },
  created() {
    // const vm = this;
    this.$bus.$on('message:bush', (message, status = 'warning') => {
      this.updateMessage(message, status);
    });
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp,
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessageWithTiming(time) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === time) {
            vm.messages.splice(i, 1);
          }
        });
      }, 5000);
    },
    closeToast(element) {
      $(`#${element}`).toast('hide');
    },
  },
};
</script>
