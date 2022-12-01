import { onMounted } from 'vue'

export function useTest () {
    onMounted(() => {
        console.log("useTest:onMounted")
    })
}