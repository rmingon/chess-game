import {defineStore} from "pinia";
import {useWebSocket} from "@vueuse/core";
import {computed, reactive, ref, toRefs, watch} from "vue";

type ws = {
    board: object[],
    id: string,
    eaten: object[]
}

export const board = defineStore('board', () => {
    const { status, data, send, open, close } = useWebSocket('ws://127.0.0.1:8080')


    const $ws = computed((): ws => JSON.parse(data.value))

    const board = computed(() => $ws.value?.board || [])
    const id = computed(() => $ws.value?.id || "")
    const eaten_black = computed(() => $ws.value?.eaten.filter(piece => piece.color === "black") || [])
    const eaten_white = computed(() => $ws.value?.eaten.filter(piece => piece.color === "white") || [])

    const eaten_black_points = computed(() => eaten_black.value.reduce(
      (acc, piece) => acc + piece.point,
      0
    ))

    const eaten_white_points = computed(() => eaten_white.value.reduce(
      (acc, piece) => acc + piece.point,
      0
    ))

    const selected = (position: {x: number, y: number}) => {
      send(JSON.stringify({
          id: id.value,
          command: "COMMAND",
          func: 'selected',
          arg: position,
      }))
    }
    const newGame = (color: string) => {
        send(JSON.stringify({
            command: "NEW_GAME",
            color
        }))
    }

    return {status, board, newGame, selected, id, eaten_black, eaten_white, eaten_black_points, eaten_white_points}
})