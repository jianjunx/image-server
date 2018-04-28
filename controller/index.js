const { uploadFile } = require("../utils/upload");
const path = require("path");

const filterUrl = url => {
  let _url = url.split("/");
  for (let i = 0, len = _url.length; i < len; i++) {
    if (!_url[i]) _url.splice(i, 1);
  }
  return _url.join("/");
};


const loadImage = async (ctx, next) => {
  const fileType = filterUrl(ctx.url);
  // 上传文件请求处理
  let serverFilePath = path.join(__dirname, "../static");
  // 上传文件事件
  const data = await uploadFile(ctx, {
    fileType,
    path: serverFilePath
  });
  ctx.body = { code: 200, msg: "上传成功", data };
};

module.exports = {
  loadImage
};
