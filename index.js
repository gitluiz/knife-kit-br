(function ($) {
    let knife = {}
    knife.isEmpty = function (value, isProperts) {
        isProperts = isProperts === undefined ? false : isProperts;
        if (value === null) {
            return true;
        }
        if (value === undefined) {
            return true;
        }
        if (value instanceof Date) {
            return false;
        }
        if (value instanceof RegExp) {
            return false;
        }
        var type = typeof value;
        switch (type) {
            case 'object':
                if (isProperts) {
                    for (var prop in value) {
                        if (!knife.isEmpty(value[prop])) {
                            return false;
                        }
                    }
                    return true;
                }
                return Object.keys(value).length == 0 ? true : false;
            case 'function':
                if (value instanceof Array) {
                    return value.length === 0 || value === [] ? true : false;
                } else {
                    return false;
                }
            case 'number':
                return false;
            case 'boolean':
                return false;
            case 'string':
                if (value.length > 0) {
                    return false;
                }
                return true;
            default:
                return false;
                break;
        }
    }
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return knife
        })
    } else if (typeof module === 'object' && module.exports) {
        module.exports = knife
    } else {
        $.knife = knife
    }

}(this));