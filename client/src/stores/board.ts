import {defineStore} from "pinia";
import {useWebSocket} from "@vueuse/core";
import {computed, reactive, ref, toRefs, watch} from "vue";

export const board = defineStore('board', () => {
    const { status, data, send, open, close } = useWebSocket('ws://127.0.0.1:8080')

    const newGame = (color: string) => {
        send(JSON.stringify({
            command: "NEW_GAME",
            color
        }))
    }

    const board = computed(() => JSON.parse(data.value))

    return {status, board, newGame}
})