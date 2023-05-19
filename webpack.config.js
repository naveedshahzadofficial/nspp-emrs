const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
            '@Layouts': path.resolve('resources/js/Layouts'),
            '@Components': path.resolve('resources/js/Components'),
        },
    },
};
