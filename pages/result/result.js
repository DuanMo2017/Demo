// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picturePath:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      picturePath:options.path
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  takePicture: function () {
    var _this = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都
      success: function (res) {
        const tempFilePath = res.tempFilePaths[0]
        _this.setData({
          picturePath: tempFilePath
        })
        wx.uploadFile({
          url: 'http://localhost:8080/uploadPicture',
          filePath: tempFilePath,
          name: 'file',
          success(response){
            let data = JSON.parse(response.data)
            console.log(JSON.parse(response.data))
            _this.setData({msg: data.flowerName})
          }
        })
      },
    })
  },
  queryMsg:function(){
    var _this = this
    wx.request({
      url: 'http://localhost:8080/discriminate',
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(response){
       
        console.log(response.data.flowerName)
         
      }
    })
  }
  
})