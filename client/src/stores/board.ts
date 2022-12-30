import {defineStore} from "pinia";
import {useWebSocket} from "@vueuse/core";
import {computed, reactive, ref, toRefs, watch} from "vue";

type ws = {
    board: object[],
    id: string
}

export const board = defineStore('board', () => {
    const { status, data, send, open, close } = useWebSocket('ws://127.0.0.1:8080')

    const newGame = (color: string) => {
        send(JSON.stringify({
            command: "NEW_GAME",
            color
        }))
    }

    const $ws = computed((): ws => JSON.parse(data.value))

    const board = computed(() => $ws.value?.board || [])
    const id = computed(() => $ws.value?.id || "")

    const selected = (position: {x: number, y: number}) => {
      send(JSON.stringify({
          id: id.value,
          command: "COMMAND",
          func: 'selected',
          arg: position,
      }))
    }

    return {status, board, newGame, selected, id}
})