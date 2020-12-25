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
    button: [
      {
        type: "click",
        name: "点我点我",
        可以: "v001",
      },
    ],
  };
  axios.get(" https://api.weixin.qq.com/cgi-bin/menu/create", {
    params: { access_token },
  });
};
exports.getAccessToken = getAccessToken;
exports.createMenu = createMenu;
