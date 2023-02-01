export default {
  // 将字符串以逗号为分隔符分割成数组
  formatData (arr, key) {
    return arr.filter(item => {
      if (item[key]) {
        item[key] = item[key].split(',');
      }

      return item
    });
  },

  // 将JSON字符串对象转换成数组
  jsonToArr (str) {
    return JSON.parse(str);
  },

  // 将字符串以逗号为分隔符转换成数组
  strToArr (str) {
    return str.split(',');
  },

  // 将字符串的逗号全部替换成空格
  replaceToSpace (str) {
    return str.replace(/,/g, ' ');
  }
}
