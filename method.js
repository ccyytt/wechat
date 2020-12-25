var params = require("./config");
var axios = require("axios");
const getAccessToken = async function () {
  return await axios
    .get(`https://api.weixin.qq.com/cgi-bin/token`, {
      params,
    })
    .then((res) => res.data);
};
const createMenu = function (access_token) {
  const menu = {
    "button": [
      {
        "type": "click",
        "name": "点我点我",
        "key": "v001",
      },
    ],
  };
  axios
    .post(
      `https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${access_token}`,
      menu
    )
};
const getUserInfo = function(access_token, openid, lang='zh_CN') {
    return await axios.get('https://api.weixin.qq.com/cgi-bin/user/info', {
        params: {
            access_token, openid, lang
        }
    })
}
exports.getAccessToken = getAccessToken;
exports.createMenu = createMenu;
exports.getUserInfo = getUserInfo;
