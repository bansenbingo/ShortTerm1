// pages/question/question.js
Page({
  data:{
    tap:0
  },

//问题1（吃早餐/午餐/晚餐/加餐）
  breakfast(e) {
    this.setData({
      tap: this.data.tap + 1,
      bre:100
    })	
  },
  lunch(e) {
    this.setData({
      tap: this.data.tap + 1,
      bre:-100
    })	
  },
  dinner (e) {
    this.setData({
      tap: this.data.tap + 1,
      bre:-100
    })
  },
  additioinal() {
  
  },

//问题2（中式/非中式）
  chinese(e){
    this.setData({
      tap: this.data.tap + 1,
      cuisine:100
    })	
  },
  western(){
    this.setData({
      tap: this.data.tap + 1,
      cuisine:-100
    })	
  },

//问题3（主食/副食/都可以）
  maincourse(){
    this.setData({
      tap: this.data.tap + 1,
      main:100
    })
  },
  notmain(){
    this.setData({
      tap: this.data.tap + 1,
      main:-100
    })
  },
  any_main(){
    this.setData({
      tap: this.data.tap + 1,
      main:0
    })
  },
//问题4（热的/冷的/都可以）
  hot(){
    this.setData({
      tap: this.data.tap + 1,
      temp:100
    })
  },
  cold(){
    this.setData({
      tap: this.data.tap + 1,
      temp:-100
    })
  },
  any_temp(){
    this.setData({
      tap: this.data.tap + 1,
      temp:0
    })
  },

//问题5（清淡/重口/适中）

   
  /**
   * 页面的初始数据
   */


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})