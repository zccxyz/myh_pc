var ym = 'https://www.myhkj.cn/apis/backend/';
// var ym = 'http://admin.test.com/apis/backend/';
// var ym = 'http://127.0.0.1:8000/apis/backend/';

var methods = {
    'login': 'login/login',
    'isLogin': 'login/isLogin',
    'total': 'Member/total',
    'delWhich': 'Member/delWhich',
    'toStoreDetail': 'Member/toStoreDetail',
    'manager': 'Member/manager',
    'lostDetail': 'member/LostDetail',
    'unTimeDetail': 'member/UnTimeDetail',
    'guest': 'member/guest',
    'addNew': 'member/AddNew',
    'getOrder': 'member/get_order',
    'vipLevel': 'member/vipLevel',
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
    'underwearOperation': 'Goods/underwear_operation',
    'getSpec': 'Goods/get_spec',
    'getUnderwear': 'Goods/get_underwear',
    'conOperation': 'Goods/con_operation',
    'consumablesList': 'Goods/ConsumablesList',
    'addVip': 'Member/addvip',
    'addArrive': 'Arrive/AddArrive',
    'leave': 'Arrive/leave',
    'suppDetail': 'arrears/supp_detail',
    'mergeBuy': 'buy/mergeBuy',
    'getPayDetail': 'buy/get_pay_detail',
    'buyGoods': 'buy/buyGoods',
    'buyTh': 'buy/buyTh',
    'buyItems': 'buy/buyItems',
    'buyPlan': 'buy/buyPlan',
    'buyCard': 'buy/buyCard',
    'buyClothes': 'buy/buyClothes',
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
    'healthModify': 'Healthy/modify',
    'healthList': 'Healthy/get_healthy_detail',
    'healthDetail': 'Healthy/prescription_detail',
    'healthDel': 'Healthy/del',
    'health': 'Healthy/prescrip_detail',
    'getBranch': 'Center/get_branch',
    'firstCheck': 'Center/first_check',
    'switchStore': 'Center/switch_store',
    'planList': 'Plan/plan_list',
    'delPlan': 'Plan/del_plan',
    'addPlan': 'Plan/add',
    'getCate': 'items/getCategory',
    'wareList': 'Ware/WareList',
    'stockOperation': 'Ware/StockOperation',
    'wareIntoOutDetail': 'Ware/WareIntoOutDetail',
    'getRecordDetail': 'Ware/get_record_detail',
    'goodsManager': 'Ware/goods_manager',
    'wareSet': 'Ware/WareSet',
    'warePull': 'Ware/pull',
    'checkArrears': 'member/check_arrears',
    'cancelOrder': 'member/CancelOrder',
    'refundOrder': 'member/refund_order',
    'getConsume': 'store/getConsume',
    'consumeDetail': 'store/consumeDetail',
    'consumeRefund': 'store/consumeRefund',
    'getPerDetail': 'Achievement/get_per_detail',
    'performanceFeiDetails': 'Achievement/performance_fei_details',
    'raiseDetailOperation': 'Achievement/raise_detail_operation',
    'getCp': 'goods/getCp',
    'getTh': 'goods/getTh',
    'getHc': 'goods/getHc',
    'pd': 'goods/pd',
    'pdLogs': 'goods/pdLogs',
    'getTransferGoods': 'Ware/get_transfer_goods',
    'getOrderDetail': 'member/get_order_detail',
    'getMemberWages': 'staff/get_member_wages',
    'checkMonth': 'staff/check_month',
    'excel': 'staff/excel',
    'getDayAchievement': 'achievement/get_day_achievement',
    'get_liabilities_detail':'analysis/get_liabilities_detail',
    'loadRate': 'analysis/loadRate',
    'indexDetail': 'analysis/index_detail',
    'staffAnalysis': 'analysis/staff_analysis',
    'staffAnalysisDetails': 'analysis/staff_analysis_details',
};
var that;

//-----------------------------------------------------------

function url(m) {
    return ym + m + '?source=PC'
}

function classify(type) {
    if(type==1){
        return '产品'
    }else if(type==2){
        return '套盒'
    }else if(type==3){
        return '项目'
    }else if(type==4){
        return '方案'
    }else if(type==5){
        return '卡项'
    }
}

function loginState() {
    $.post(url(methods.isLogin), function(v) {
        if (!v.data) {
            //登录后跳转
            localStorage.removeItem('user')
            parent.location.href = '../login.html'
        }
    })
}

function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
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
