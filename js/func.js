//const ym = 'https://www.myhkj.cn/apis/backend/';
const ym = 'http://admin.test.com/apis/backend/';

const methods = {
    'login': 'login/login',
    'isLogin': 'login/isLogin',
    'total': 'Member/total',
    'delWhich': 'Member/delWhich',
    'toStoreDetail': 'Member/toStoreDetail',
    'manager': 'Member/manager',
    'delMember': 'Member/DelMember',
    'editMember': 'Member/editMember',
    'delCheckedMember': 'Member/delCheckedMember',
    'get_member_list': 'Member/get_member_list',
    'haveProductList': 'Member/HaveProductList',
    'boxItems': 'Member/memberBoxItemsList',
    'haveCoupon': 'Member/HaveCoupon',
    'cardList': 'Member/memberCardList',
    'integralRecord': 'Member/IntegralRecord',
    'aloneArrears': 'Member/AloneArrears',
    'exportMember': 'Member/exportMember',
    'exportGoods': 'Commodity/exportGoods',
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
    'suppDetail': 'arrears/supp_detail',
    'mergeBuy': 'buy/mergeBuy',
    'getPayDetail': 'buy/get_pay_detail',
    'buyGoods': 'buy/buyGoods',
    'buyTh': 'buy/buyTh',
    'buyItems': 'buy/buyItems',
    'buyCard': 'buy/buyCard',
    'print': 'buy/consume_print',
    'saveCommission': 'buy/save_commission',
    'getDetails': 'Consume/getDetails',
    'entry': 'Consume/entry',
    'isLeave': 'Consume/isLeave',
    'userInfo': 'Vipdetails/basicinformation',
    'editUser': 'Vipdetails/edit',
    'operationDetail': 'Store/operationDetail',
    'consumePrint': 'consume/consume_print',
    'arrearsList': 'Arrears/ArrearsList',
    'bespeakDetail': 'Bespeak/BespeakDetail',
    'bespeakEdit': 'Bespeak/bespeak_edit',
    'bespeakOperation': 'Bespeak/BespeakOperation',
    'arriveList': 'Arrive/ArriveList',
    'birthdayDetail': 'member/BirthdayDetail',
    'getCardList': 'card/get_list',
    'addCard': 'card/addCard',
    'getCardDetails': 'card/get_details',
    'editCard': 'card/update',
    'removerCard': 'card/removerCard',
    'healthSearch': 'Healthy/HealthSearch',
    'healthAdd': 'Healthy/add',
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
            window.location.href = '../login.html'
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
