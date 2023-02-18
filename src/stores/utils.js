import { defineStore } from 'pinia'
import colorDict from './material-colors.json'

export const useUtilsStore = defineStore('utils', {
    actions: {
        material(color) {
            if (color.startsWith("#")) {
                return color
            } else {
                var colors = color.split("-");
                return colorDict[colors[0]][colors[1]]
            }
        },
        size(size) {
            const sizeDict = {"big": "30px"}
            if (size in sizeDict) {
                return sizeDict[size]
            } else {
                return size
            }
        }
    }
})