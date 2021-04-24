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
    toggle_list: [
        {
          "id": "1001",
          "name": "Living room",
          "checked": true
        },
        {
          "id": "1002",
          "name": "Bedroom",
          "checked": false
        },
        {
          "id": "1003",
          "name": "Second bedroom",
          "checked": false
        },
        {
          "id": "1004",
          "name": "Kitchen",
          "checked": false
        },
        {
          "id": "1005",
          "name": "Study",
          "checked": false
        },
        {
          "id": "1006",
          "name": "Garden",
          "checked": false
        },
        {
          "id": "1007",
          "name": "Bathroom",
          "checked": false
        },
        {
          "id": "1008",
          "name": "Balcony",
          "checked": false
        },
    ],
    idx: '',
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
        console.info(response)
        console.info("fetch success");
      },
      fail: function (e) {
        console.info(e)
        console.info("fetch fail");
      }
    });
  },
  searchChange(e) {
    console.info(e)
  },
  goToOther() {
    router.push({
      uri: "pages/welcome/welcome"
    })
  },
  allClick(arg) {
    this.idx = arg
  },
  allChange(e) {
    if (e.checked === true) {
      for (var i = 0; i < this.toggle_list.length; i++) {
        if (this.toggle_list[i].id === this.idx) {
          this.toggle_list[i].checked = true
        } else {
          this.toggle_list[i].checked = false
        }
      }
    }
  }
}
