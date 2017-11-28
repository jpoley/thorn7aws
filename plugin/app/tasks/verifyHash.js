module.exports = function(hash) {
    return new Promise(function(fullfill, reject) {
        const result = {
            matched: 1,
            level: "high",
            provider: "google"
        };
        return fullfill(result);
    });
}
