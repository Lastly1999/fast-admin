module.exports = {
    // 部署应用时的基本 URL
    // publicPath: process.env.NODE_ENV === "production" ? "192.168.60.110:8080" : "192.168.60.110:8080",
    
    // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
    outputDir: "dist",

    // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
    lintOnSave: process.env.NODE_ENV !== "production",

    // 是否使用包含运行时编译器的 Vue 构建版本
    runtimeCompiler: true,

    // Babel 显式转译列表
    transpileDependencies: [],

    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: true,

    // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）
    crossorigin: "",

    // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
    // integrity: false,

    // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
    // 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
    configureWebpack: {},

    // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
    chainWebpack: () => {},

    // 所有 webpack-dev-server 的选项都支持
    devServer: {
        port:3306
    },

    // 是否为 Babel 或 TypeScript 使用 thread-loader
    parallel: require("os").cpus().length > 1,

    // 向 PWA 插件传递选项
    pwa: {},

    // 可以用来传递任何第三方插件选项
    pluginOptions: {},
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    // If you are using less-loader@5 please spread the lessOptions to options directly
                    // elementui theme config
                    modifyVars: {
                        "link-color": "#1DA57A",
                        "border-radius-base": "2px",
                        "menu-dark-submenu-bg": "#2d2e42",
                        "layout-header-background": "#2d2e42",
                        "menu-dark-item-active-bg": "#386be1",
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
}
