var path = require('path');

module.exports = {
    entry: "./client/applications/index.tsx",
    output: {
        filename: "./stq_/scripts/bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss", ".css"],
        modules: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    devtool:"source-map",
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: 'css-loader'
            },                        
            {
                test: /\.js$/,
                use: "source-map-loader",
                enforce: 'pre',
            }   
        ],
    },
    
}
