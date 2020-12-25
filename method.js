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
  console.log(access_token);
  axios
    .post(
      `https://api.weixin.qq.com/cgi-bin/menu/create?access_token=${access_token}`,
      menu
    )
    .then((res) => console.log(res));
};
exports.getAccessToken = getAccessToken;
exports.createMenu = createMenu;
