import Vue from 'vue';
import Router from 'vue-router';
import Content from '@/pages/content/Content.vue';
// 五个主体页面
import Index from '@/pages/content/Index';
import Deal from '@/pages/content/Deal';
import Settings from '@/pages/content/Settings';
import Wallet from '@/pages/content/Wallet';
import Contact from '@/pages/content/Contact';
import Test from '@/pages/Test';
//登录注册
import Login from '@/pages/Login';
import Regdit from '@/pages/Regdit';
// Index {EssentialInformation AppStore Candy Mail  Notice Referral}
import EssentialInformation from '@/pages/Index/EssentialInformation';
import AppStore from '@/pages/Index/AppStore';
import Candy from '@/pages/Index/Candy';
import Mail from '@/pages/Index/Mail';
import Referral from '@/pages/Index/Referral';
import Quotation from '@/pages/Index/Quotation';
import Notice from '@/pages/Index/Notice';
//Notice NoticeNews
import NoticeNews from '@/pages/Notice/NoticeNews';
// Wallet 页面 Addma Asset Deposit TimeDeposit Witdhraw
import Addmag from '@/pages/Wallet/Addmag';
import Asset from '@/pages/Wallet/Asset';
import Deposit from '@/pages/Wallet/Deposit';
import TimeDeposit from '@/pages/Wallet/TimeDeposit';
import Witdhraw from '@/pages/Wallet/Witdhraw';
import AddAdress from '@/pages/Wallet/AddAdress';
//settings Feedback Language ContactUs PaymentMethod
import Feedback from '@/pages/Settings/Feedback';
import Language from '@/pages/Settings/Language';
import ContactUs from '@/pages/Settings/ContactUs';
import PaymentMethod from '@/pages/Settings/PaymentMethod';
//Contact Withchat
import Withchat from '@/pages/Contact/Withchat';
//Deal hall Buy BuySell OrderDetails Sell
import Buy from '@/pages/Deal/Buy';
import BuySell from '@/pages/Deal/BuySell';
import OrderDetails from '@/pages/Deal/OrderDetails';
import EntrusOrderDetails from '@/pages/Deal/EntrusOrderDetails';
import Sell from '@/pages/Deal/Sell';
//EssentialInformation{ChangePassward ModifyPayPassward}
import ChangePassward from '@/pages/EssentialInformation/ChangePassward';
import ModifyPayPassward from '@/pages/EssentialInformation/ModifyPayPassward';
//PaymentMethod  {UnionPay PayPal MasterCard Visa Alipay}
import UnionPay from '@/pages/PaymentMethod/UnionPay';
import PayPal from '@/pages/PaymentMethod/PayPal';
import MasterCard from '@/pages/PaymentMethod/MasterCard';
import Visa from '@/pages/PaymentMethod/Visa';
import Alipay from '@/pages/PaymentMethod/Alipay';
Vue.use(Router);
// Vue.filter('keepTwoNum',val=>{
//   val = Number(val);
// return val.toFixed(2);
// });

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Regdit',
      name: 'Regdit',
      component: Regdit,
    },
    {
      path: '/',
      name: 'Content',
      component: Content,
      children: [
        {
          path: '/',
          name: 'Index',
          component: Index,
        },
        {
          path: '/Wallet',
          name: 'Wallet',
          component: Wallet,
        },
        {
          path: '/Deal',
          name: 'Deal',
          component: Deal,
        },
        {
          path: '/Contact',
          name: 'Contact',
          component: Contact,
        },
        {
          path: '/Settings',
          name: 'Settings',
          component: Settings,
          // children: [
          //   {
          //     path: '',
          //     name: 'UserContent',
          //     component: UserContent,
          //   },
          // ],
        },
      ],
    },
    // Index {EssentialInformation AppStore Candy Mail Referral Quotation Notice}
    {
      path: '/EssentialInformation',
      name: 'EssentialInformation',
      component: EssentialInformation,
    },
    {
      path: '/AppStore',
      name: 'AppStore',
      component: AppStore,
    },
    {
      path: '/Candy',
      name: 'Candy',
      component: Candy,
    },
    {
      path: '/Mail',
      name: 'Mail',
      component: Mail,
    },
    {
      path: '/Referral',
      name: 'Referral',
      component: Referral,
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test,
    },
    {
      path: '/Quotation',
      name: 'Quotation',
      component: Quotation,
    },
    {
      path: '/Notice',
      name: 'Notice',
      component: Notice,
    },


    //Wallet页面 Addma Asset Deposit TimeDeposit Witdhraw
    {
      path: '/Addmag',
      name: 'Addmag',
      component: Addmag,
    },
    {
      path: '/Asset',
      name: 'Asset',
      component: Asset,
    },
    {
      path: '/Deposit',
      name: 'Deposit',
      component: Deposit,
    },
    {
      path: '/TimeDeposit',
      name: 'TimeDeposit',
      component: TimeDeposit,
    },
    {
      path: '/Witdhraw',
      name: 'Witdhraw',
      component: Witdhraw,
    },
    {
      path: '/AddAdress',
      name: 'AddAdress',
      component: AddAdress,
    },
    //setting {Feedback Language  ContactUs PaymentMethod}
    {
      path: '/Feedback',
      name: 'Feedback',
      component: Feedback,
    },
    {
      path: '/Language',
      name: 'Language',
      component: Language,
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs,
    },
    {
      path: '/PaymentMethod',
      name: 'PaymentMethod',
      component: PaymentMethod,
    },
    //Contact {Withchat}
    {
      path: '/Withchat',
      name: 'Withchat',
      component: Withchat,
    },
    //Deal {hall Buy BuySell OrderDetails Sell EntrusOrderDetails}
    {
      path: '/Buy',
      name: 'Buy',
      component: Buy,
    },
    {
      path: '/BuySell',
      name: 'BuySell',
      component: BuySell,
    },
    {
      path: '/OrderDetails',
      name: 'OrderDetails',
      component: OrderDetails,
    },
    {
      path: '/EntrusOrderDetails',
      name: 'EntrusOrderDetails',
      component: EntrusOrderDetails,
    },
    {
      path: '/Sell',
      name: 'Sell',
      component: Sell,
    },
    //EssentialInformation{ChangePassward ModifyPayPassward}
    {
      path: '/ChangePassward',
      name: 'ChangePassward',
      component: ChangePassward,
    },
    {
      path: '/ModifyPayPassward',
      name: 'ModifyPayPassward',
      component: ModifyPayPassward,
    },
    //Notice NoticeNews
    {
      path: '/NoticeNews',
      name: 'NoticeNews',
      component: NoticeNews,
    },
    //PaymentMethod  {UnionPay PayPal MasterCard Visa Alipay}
    {
      path: '/UnionPay',
      name: 'UnionPay',
      component: UnionPay,
    },
    {
      path: '/PayPal',
      name: 'PayPal',
      component: PayPal,
    },
    {
      path: '/MasterCard',
      name: 'MasterCard',
      component: MasterCard,
    },
    {
      path: '/Visa',
      name: 'Visa',
      component: Visa,
    },
    {
      path: '/Alipay',
      name: 'Alipay',
      component: Alipay,
    },
  ],
});
