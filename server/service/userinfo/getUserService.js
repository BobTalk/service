var getUserInfo = require('../../dao/getUserInfo/userDao');
module.exports = {
  UserInfo: function (req, res, next) {
    getUserInfo.userInfo(req.body, function (err, result) {
      if(err == null){
        res.send(result)
      }else {
        res.send("数据返回失败！")
      }

    });
  }
}