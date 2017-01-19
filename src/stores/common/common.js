module.exports = {
  dealStatus(val, receiptPhoto) {
    let status;
    switch (val)
      {
      case 1:
        status="已提交";
        break;
      case 2:
        status="初审中";
        break;
      case 3:
        status="初审通过";
        break;
      case 4:
        status="初审不通过";
        break;
      case 5:
        status="已生效";
        break;
      case 6:
        status="已发货";
        break;
      case 7:
        status="已取消";
        break;
      case 8:
        if (!receiptPhoto || receiptPhoto === "" || receiptPhoto.length === 0) {
          status = "已确认收货";
        } else {
          status = "完成";
        }
        break;
    }
    return status;
  },
  payType(val) {
    let status;
    switch (val)
      {
      case 1:
        status="现金购买";
        break;
      case 2:
        status="贷款购买";
        break;
    }
    return status;
  },
  productPayReceStatus(val, payType, payoutStatus) {
    let status;
    if (payType === 1) {
      //现金购买
      switch (val)
      {
        case 1:
          status="未支付";
          break;
        case 2:
          status="未支付";
          break;
        case 3:
          status="已支付";
          break;
      }
    } else {
      //贷款购买
      if (payoutStatus === 2) {
        //贷款未放款
        status = '已支付';
      } else {
        status = '未支付';
      }
    }
    return status;
  },
};
