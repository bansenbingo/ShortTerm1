// app.js
const AV = require('/libs/av-core-min');
const adapters = require('/libs/leancloud-adapters-weapp.js');

AV.setAdapters(adapters);
AV.init({
  appId: 'Ry2BdlqaMIQuBx0gdhnQy153-gzGzoHsz',
  appKey: 'kGMYw0pMBeq1Yl0rcLemhZNc',
 
  serverURLs: "https://ry2bdlqa.lc-cn-n1-shared.com",
});
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    bre:0,
    cuisine:0,
    main:0,
    temp:0,
    taste:0
  }
})
