export default function (Vue) {
  Vue.filter('rmb', (value) => {
    if (typeof (value) !== 'undefined') {
      let result = '';
      if (typeof (value) === 'string') {
        value = parseFloat(value);
      }
      const strs = value.toFixed(2).toString().split(".");
      if (value) {
        while (strs[0].length > 3) {
          result = `,${strs[0].slice(-3)}${result}`;
          strs[0] = strs[0].slice(0, strs[0].length - 3);
        }
        if (strs[0]) {
          result = `${strs[0]}${result}`;
        }
      } else {
        result = '0';
      }
      return `${result}.${strs[1]}元`;
    }
  });
  Vue.filter('string', (value) => {
    if (value === null || value === undefined) {
      return '';
    }
    return `${value}`;
  });
  Vue.filter('date', (value) => {
    if (!value) {
      return '';
    }
    const date = new Date(value);
    const year = date.getFullYear();
    let m = date.getMonth()+1;
    const month = m<10?'0'+m:m;
    const day = date.getDate()<10?'0'+date.getDate():date.getDate();
    const Hour = date.getHours()<10?'0'+date.getHours():date.getHours();
    const Minute = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
    const Second = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
    return `${year}-${month}-${day} ${Hour}:${Minute}:${Second}`;
  });
  Vue.filter('date2', (value) => {
    if (!value) {
      return '';
    }
    const date = new Date(value);
    const year = date.getFullYear();
    let m = date.getMonth()+1;
    const month = m<10?'0'+m:m;
    const day = date.getDate()<10?'0'+date.getDate():date.getDate();
    return `${year}-${month}-${day}`;
  });
}
