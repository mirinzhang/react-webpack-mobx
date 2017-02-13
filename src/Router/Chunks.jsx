/**
 * Created by Min on 2017/2/9.
 * Require App Chunk Files
 */
export const main = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Main').default);
    }, 'main');
};

export const intro = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Intro').default);
    }, 'intro');
};

export const todo = (location, callback) => {
    require.ensure([], (require) => {
        callback(null, require('../Components/Todo').default);
    }, 'todo');
};
