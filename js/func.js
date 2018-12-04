const ym = '';
const methods = {

};

//-----------------------------------------------------------
//成功
function success(msg) {
    this.$message(msg);
}
//警告
function warn(msg) {
    this.$message({
        message: msg,
        type: 'success'
    });
}
//消息
function msg(msg) {
    this.$message({
        message: msg,
        type: 'warning'
    });
}
//错误
function error(msg) {
    this.$message.error(msg);
}
