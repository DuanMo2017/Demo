课程详情页 getConf接口：

1. showCourseSheet：是否显示选课单；
2. showCreateOrderSheet：跳转至哪个订单详情页？
   1. 新接口——>confirmOrder.
   2. 旧接口——>
      1. 联报订单：submitLinkOrder;
      2. 普通订单：submitOrder;

新老接口的一些区别：

1. 参数传递：老接口带参跳转，新接口和选课单的部分参数放到localStorage(尚未重构完，所以参数传递有点乱，最后争取都放local里);
2. 选择优惠券：老接口跳转到新的页面，付款金额由前端计算；新接口弹窗显示可用优惠券，每次选择都会请求后台接口计算付款金额；

