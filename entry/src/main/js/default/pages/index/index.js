import fetch from '@system.fetch'
import router from '@system.router';


export default {
  data: {
    title: "这是什么1",
    todolist: [
        {
          title: '刷题',
          date: '2021-12-31 10:00:00',
        }, {
             title: '看电影',
             date: '2021-12-31 20:00:00',
           }
    ],
  },
  onInit() {
    this.title = this.title + '123'
    console.info(4)
  },
  doTest() {
    console.info(12345)
    fetch.fetch({
      url: 'http://127.0.0.1:4523/mock/379821/table/list',
      success: function (response) {
        console.info("fetch success");
      },
      fail: function () {
        console.info("fetch fail");
      }
    });
  },
  searchChange(e) {
    console.info(e)
  },
  goToOther() {
    router.push({
      uri:"pages/welcome/welcome"
    })
  }
}
