export default (() => {
  window.gconfig = {};
  +(function (global) {
    // 本地开发打开的路径以及端口
    global.linkUrl = 'http://z005.kmtongji.com/';
    // if (process.env.NODE_ENV === 'production') { // 生产环境用不同的接口地址
    //   global.linkUrl = 'http://localhost:3000';
    // }
    // 系统一二级菜单
    global.nav = [
      {
        id: 600110230,
        name: '功能列表',
        icon: 'book',
        url: '',
        children: [
          {
            id: 600110232, name: '注册用户', url: '/table', icon: 'user',
          },
        ],
      },
    ];
  }(window.gconfig));
})()

export const prefix = global.gconfig.linkUrl
export const timeout = 6000
