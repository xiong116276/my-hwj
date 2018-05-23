//VeeValidate 安装 npm install vee-validate@2.0.0-rc.25
import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN';//引入中文文件

// 配置中文
Validator.addLocale(zh);

const config = {
  locale: 'zh_CN'
};

Vue.use(VeeValidate,config);

// 自定义validate
const dictionary = {
  zh_CN: {
    messages: {
      email: () => '请输入正确的邮箱格式',
      required: ( field )=> "请输入" + field
    },
    attributes:{
      email:'邮箱',
      password:'密码',
      name: '账号',
      phone: '手机'
    }
  }
};

Validator.updateDictionary(dictionary);

Validator.extend('phone', {
  messages: {
    zh_CN:field => field + '必须是11位手机号码',
  },
  validate: value => {
    return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});

Validator.extend('name', {
  messages: {
    zh_CN:field => field + '必须是6到18英文和数字组合',
  },
  validate: value => {
    return /^.{6,18}$/.test(value)&&/^.*[a-zA-Z]+.*$/.test(value)&&/^.*[0-9]+.*$/.test(value)
  }
});
