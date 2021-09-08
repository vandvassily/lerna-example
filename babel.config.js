module.exports = function(api){
    api.cache()

    return {
        babelrcRoot: [
            '.',
            'packages/*'
        ]
    }
}