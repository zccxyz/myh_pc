const ym = 'https://www.myhkj.cn/apis/backend/';
//const ym = 'http://admin.test.com/apis/backend/';

const methods = {
    'login': 'login/login',
    'isLogin': 'login/isLogin',
    'manager': 'Member/manager',
    'delMember': 'Member/DelMember',
    'editMember': 'Member/editMember',
    'delCheckedMember': 'Member/delCheckedMember',
    'get_member_list': 'Member/get_member_list',
    'upload': 'Commodity/upload',
    'getAllGoods': 'Commodity/getAllGoods',
    'logout': 'Center/logout',
    'getClassify': 'Goods/getClassify',
    'editAll': 'Goods/editAll',
    'addAll': 'Goods/addAll',
    'del': 'Goods/del',
    'addVip': 'Member/addvip',
    'addArrive': 'Arrive/AddArrive',
    'leave': 'Arrive/leave',
    'mergeBuy': 'buy/mergeBuy',
    'getPayDetail': 'buy/get_pay_detail',
    'getDetails': 'Consume/getDetails',
    'entry': 'Consume/entry',
    'isLeave': 'Consume/isLeave',
};
let that;

//-----------------------------------------------------------
function url(m) {
    return ym + m + '?source=PC'
}

function loginState() {
    $.post(url(methods.isLogin), v => {
        if (!v.data) {
            //登录后跳转
            localStorage.removeItem('user')
            location.href = '../login.html'
        }
    })
}

//验证
function verify(data) {
    if(data.code == 1 || data.code == 0) {
        return data.info==null?(data.data==null?data.res:data.data):data.info;
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
