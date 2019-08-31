import FetchUtils from '../service/fetch';

export default {
  namespace: 'home',
  state: {
    count: 0,
  },
  //同步操作
  reducers: {
    update(state, {payload}) {
      // let oldCount = payload.count;
      // let newCount = oldCount + 1;
      // console.log('newCount', newCount);
      return {...state, ...payload};
    },
  },
  //异步操作
  effects: {
    *change({payload}, {put, call}) {
      // const result = yield call(FetchUtils.get, 'www.baidu.com');
      const result = yield call(FetchUtils.test, 10);
      console.log('result', result);
      let count = payload.count;
      if (payload.action === 'add') {
        count = count + 1;
      } else {
        count = count - 1;
      }
      if (result) {
        yield put({
          type: 'update',
          payload: {
            count: count,
          },
        });
      }
    },
  },
};
