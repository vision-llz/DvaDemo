export default class FetchUtils {
  static get = url =>
    new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (response && response.ok) {
            return response.json() || {data: []};
          }
          return {code: response.status, desc: '网络连接不可用，请稍后重试'};
        })
        .then(result => {
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  static post = (url, data) =>
    new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (response && response.ok) {
            return response.json() || {data: []};
          }
          return {
            code: response.status,
            desc: '网络连接不可用，请稍后重试',
          };
        })
        .then(result => {
          //Token过期退出登录
          resolve(result || '网络连接不可用，请稍后重试');
        })
        .catch(error => {
          reject(new Error(`error===>${error}`));
          console.log(error || error.desc);
        });
    });
  static test = time =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('success'), time);
    });
}
