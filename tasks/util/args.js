// 处理命令行的包
import yargs from 'yargs';

const args = yargs
    /**
     * 区分生产环境和开发环境
     * 根据选项参数
     */
    .option('peoduction', {
        boolean: true,                      // 类型
        default: false,                     // 默认
        describe: 'min all scripts'         // 描述    
    })
    /**
     * 监听文件的修改后做的处理
     */    
    .option('watch', {
        boolean: true,
        default: false,
        describe: 'watch all files'
    })
    /**
     * 要不要详细的输出命令行执行日志
     */
    .option('verbose', {
        boolean: true,
        default: false,
        describe: 'log'
    })
    /**
     * JS压缩后，发生错误，通过SourceMap来定位错误和调试
     */
    .option('sourcemaps', {
        describe: 'force the creation of sroucemaps'
    })
    /**
     * 服务器端口
     */
    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })
    /**
     * 对输入的命令行以字符串进行解析
     */
    .argv

    export default args;
