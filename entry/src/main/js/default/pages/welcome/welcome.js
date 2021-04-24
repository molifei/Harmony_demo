import prompt from '@system.prompt';
import router from '@system.router';

export default {
  showBox() {
    prompt.showToast({
      message: '显示',
      duration: 2000,
    });
  },
  goToHome() {
    router.push({
      uri: "pages/index/index",
      params: {
        data1: 'message',
        data2: {
          data3: [123, 456, 789]
        },
      },
    });
  }
}