export default {
  // 将字符串以逗号为分隔符分割成数组
  formatData (arr, key) {
    return arr.filter(item => {
      if (item[key]) {
        item[key] = item[key].split(',');
      }

      return item
    })
  }
}
