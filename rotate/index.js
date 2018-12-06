// 计算两点连接线相对于x正半轴的旋转角度
const rotate = (startPoint = [0, 0], endPoint = [0, 0]) => {
  let x = endPoint[0] - startPoint[0];
  let y = endPoint[1] - startPoint[1];
  let r = Math.atan2(Math.abs(x), Math.abs(y)) * 180 / Math.PI;
  if (x === 0) {
    return y === 0 ? 0 : (y > 0 ? -90 : 90);
  }
  if (y === 0) {
    return x > 0 ? 0 : -180;
  }
  return x > 0 ? (y > 0 ? r - 90 : 90 - r) : (y > 0 ? -(90 + r) : 90 + r);
};

module.exports.default = module.exports = rotate;