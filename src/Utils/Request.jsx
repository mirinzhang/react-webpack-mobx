/**
 * Code based on
 * See: https://github.com/leifoolsen/webpack2-boilerplate/blob/master/src/utils/request.js
 */

import 'whatwg-fetch';

/**
 * Construct an Error object
 * @param response
 * @returns {Error}
 */
const apiError = (response) => {
    const error = new Error(response.statusText);
    error.response = response;
    return error;
};

/**
 * Handle response error
 * @param err
 * @return {undefined} throws an error
 */
const handledResponseError = (err) => {
    let response;
    if (err.response) {
        response = err.response;
    } else {
        response = {
            statusText: err.message || '',
        };
    }

    const error = new Error(response.statusText);
    if (!response.status) {
        response.status = 500;
    }
    err.response = response;

    throw error;
};

/**
 * Check if a notwork request came back fine, and throws an error if not
 * @param {object} response a response from a network request
 * @return {object|undefined} Returns either the response, or throws an error
 */
const checkResponse = (response) => {
    if (!response.ok) {
        throw apiError(response);
    }

    return response;
};

/**
 * Parses the response according to content type
 * @param {object} response A response from a network request
 * @return {*|{type, alias, describe}}
 */
const toContentType = (response) => {
    if (response.headers.get('Content-Type').indexOf('application/json') > -1) {
        return response.json();
    }

    return response.text();
};

/**
 * Request a URL, returning a promise
 * @param {string} url
 * @param {object} [options]
 * @return {Promise}
 */
const request = (url, options) =>
    window.fetch(url, options)
        .then(checkResponse)
        .then(toContentType)
        .catch(handledResponseError);

export default request;
