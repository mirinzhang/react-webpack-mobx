/**
 * Created by Min on 2016/12/12.
 * Require App Chunk Files
 */
export const app = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('../Components/App').default);
  }, 'app');
};

export const intro = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('../Components/Intro').default);
  }, 'intro');
};

export const todo = (location, callback) => {
  require.ensure([], (require) => {
    callback(null, require('../Components/Todos').default);
  }, 'todo');
};
