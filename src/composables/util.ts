import { ElNotification } from "element-plus";
import type { NotificationOptions } from "element-plus";

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
