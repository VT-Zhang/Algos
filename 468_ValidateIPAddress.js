/**
 * @param {string} IP
 * @return {string}
 */
function validIPAddress(IP) {
    if (IP.indexOf('.') > 0) {
        return isIPv4(IP) ? 'IPv4' : 'Neither';
    } else {
        return isIPv6(IP) ? 'IPv6' : 'Neither';
    }
}

function isIPv4(string) {
    let array = string.split('.');
    if (array.length !== 4) {
        return false;
    }
    for (let str of array) {
        if (str.length === 0) {
            return false;
        }
        if (str.match(/[^0-9]/)) {
            return false;
        }
        if (str.length > 1 && str[0] === '0') {
            return false;
        }
        if ((+str) > 255) {
            return false;
        }
    }
    return true;
}

function isIPv6(string) {
    let array = string.split(':');
    if (array.length !== 8) {
        return false;
    }
    for (let str of array) {
        if (str.length === 0) {
            return false;
        }
        if (str.match(/[^0-9a-fA-F]/g)) {
            return false;
        }
        if (str.length > 4) {
            return false;
        }
    }
    return true;
}

console.log(validIPAddress("172.16.254.1"));
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));
console.log(validIPAddress("256.256.256.256"));
