module.exports = function(response) {
    return new Promise(function(fullfill, reject) {
        return fullfill(response);
    });
}
