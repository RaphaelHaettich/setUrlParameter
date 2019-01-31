const setParam = (urlQueryString, newParam, encodedValue, encodedKey) => {
    const updateRegex = new RegExp('([\?&])' + encodedKey + '[^&]*');
    const removeRegex = new RegExp('([\?&])' + encodedKey + '=[^&;]+[&;]?');

    if (typeof encodedValue === 'undefined' || encodedValue === null || encodedValue === '') {
        return urlQueryString.replace(removeRegex, "$1").replace(/[&;]$/, '');
    } 
    if (urlQueryString.match(updateRegex) !== null) {
        return urlQueryString.replace(updateRegex, "$1" + newParam);
    } 
    if (urlQueryString=="") {
        return '?' + newParam;
    } 
    return urlQueryString + '&' + newParam;
};

const setUrlParameter = (url, key, value) => {
    const encodedKey = encodeURIComponent(key);
    const encodedValue = encodeURIComponent(value);

    const baseUrl = url.split('?')[0];
    const newParam = encodedKey + '=' + encodedValue;

    const urlQueryString = url.split('?')[1] == undefined ?
        '' :
        '?' + url.split('?')[1];

    const params = urlQueryString ? 
        setParam(urlQueryString, newParam, encodedValue, encodedKey) :
        '?' + newParam;

    if (params === '?') {
        return '';
    }

    return baseUrl + params;
};

module.exports = setUrlParameter;