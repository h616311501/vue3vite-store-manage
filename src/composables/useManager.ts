import { ref, reactive } from 'vue'
import { logout, updatepassword } from '@/api/manager';
import { showModel, toast } from '@/composables/util';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

export function useRepassword() {
  const store = useStore()
  const router = useRouter()
  const form = reactive({
    oldpassword: "",
    password: "",
    repassword: "",
  });
  const formDrawerRef = ref<any>()
  const formRef = ref<any>(null);
  const rules = reactive({
    oldpassword: [
      {
        required: true, //是否必填
        message: "旧密码不为空", //错误提示信息
        trigger: "blur", //触发时机 : 失去焦点
      },
    ],
    password: [
      {
        required: true, //是否必填
        message: "新密码不为空", //错误提示信息
        trigger: "blur", //触发时机 : 失去焦点
      },
    ],
    repassword: [
      {
        required: true, //是否必填
        message: "确认密码不为空", //错误提示信息
        trigger: "blur", //触发时机 : 失去焦点
      },
    ],
  });

  const onSubmit = () => {
    formRef.value.validate((valid: any) => {
      if (!valid) {
        return false;
      }
      formDrawerRef.value.showLoading()
      updatepassword(form).then(res => {
        toast(res.msg)
        store.dispatch("logout")
        router.push('/login')

      }).finally(() => {
        formDrawerRef.value.hideLoading()
      })
    })
  };

  const openRePasswordForm = () => formDrawerRef.value.open()
  return {
    formDrawerRef,
    form,
    rules,
    formRef,
    onSubmit,
    openRePasswordForm
  }
}

export function useLogout() {
  const store = useStore()
  const router = useRouter()
  function handlelogout() {
    showModel("是否退出登录").then(res => {
      logout().finally(() => {
        //清除vuex内的状态
        store.dispatch("logout")
        //跳转回登录页
        router.push('/login')
        toast("退出")

      })
    })
  }

  return {
    handlelogout
  }
}