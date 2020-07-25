function isEmpty(obj) {
    const verify = Object.entries(obj).length;

    if (verify == 0) {
        return true;
    }

    return false;
}

module.exports = isEmpty;