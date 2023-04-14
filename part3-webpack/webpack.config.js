const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // 指定入口文件
    entry:"./src/index.ts",

    
    output:{
        
        // 指定打包文件所在目录
        path:path.resolve(__dirname,'dist'),
        
        // 打包后的文件名称
        filename:"bundle.js",

        //清除打包后的文件
        clean:true

    },

    // 指定webpack打包时要使用的模块
    module:{

        // 指定要加载的规则
        rules:[
            {
                // test指定的是规则生效的文件
                test:/\.ts$/,
                // 要使用的loader
                use:"ts-loader",
                // 要排除的文件
                exclude:/node_modules/
            }
        ]
    },
    mode:"production",
    
    plugins:[
        new HtmlWebpackPlugin({
            template:"./dist/index.html"
        })
    ],

    // 用来设置引用模块
    resolve:{
        extensions:['.ts','.js']
    }
};