const { createApp, ref } = Vue

  createApp({
    setup() {
    
      const message = ref('Hello vue!')
      return {
        message,
        showDiv : true
      }
    }
  }).mount('#my-app')