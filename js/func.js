const ym = 'http://admin.myh.com/apis/backend/';
const methods = {
    'login': 'login/login',
    'isLogin': 'login/isLogin',
};
let that;

//-----------------------------------------------------------
function url(m) {
    return ym + m + '?source=PC'
}

//验证
function verify(data) {
    if(data.code == 1) {
        return data.info==null?data.data:data.info;
    }else{
        error(data.info)
        return false
    }
}

//成功
function success(msg) {
    that.$message({
        message: msg,
        type: 'success'
    });
}
//警告
function warn(msg) {
    that.$message({
        message: msg,
        type: 'warning'
    });
}
//消息
function msg(msg) {
    this.$message(msg);
}
//错误
function error(msg) {
    that.$message.error(msg);
}
