const ym = 'http://admin.myh.com/apis/backend/';
const methods = {
    'login': 'login/login',
};
let that;

//-----------------------------------------------------------
//成功
function success(msg) {
    that.$message(msg);
}
//警告
function warn(msg) {
    that.$message({
        message: msg,
        type: 'success'
    });
}
//消息
function msg(msg) {
    that.$message({
        message: msg,
        type: 'warning'
    });
}
//错误
function error(msg) {
    that.$message.error(msg);
}
