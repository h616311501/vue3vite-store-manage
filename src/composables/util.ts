import { ElNotification, type ElMessageBoxOptions } from "element-plus";
import { type NotificationOptions , ElMessageBox } from "element-plus";
import nprogress from 'nprogress'
//成功提示
export function toast(
  message?: string,
  type: NotificationOptions["type"] = "success",
  dangerouslyUseHTMLString = false
) {
  ElNotification({
    dangerouslyUseHTMLString,
    message,
    type,
    duration: 3000,
  });
}

export function showModel(content ="提示内容" , type:ElMessageBoxOptions['type']="warning" , title="")
{
  return ElMessageBox.confirm(
    content,
    title,
    {
      confirmButtonText:"确定",
      cancelButtonText:"取消",
      type
    }
  )
}
//显示全局loading
export function showFullLoading(){
  nprogress.start()
}

//隐藏全局loading
export function hideFullLoading(){
  nprogress.done()
}