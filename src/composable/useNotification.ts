import {ref} from "vue";
import AppNotification from "@/components/app-notification.vue";

export const useNotification = () => {

   const notification = ref<InstanceType<typeof AppNotification> | null>(null)
   const showNotification = () => {
      notification.value?.open()
      setTimeout(() => notification.value?.close(), 2000)
   }
   return {
      notification,
      showNotification
   }
}