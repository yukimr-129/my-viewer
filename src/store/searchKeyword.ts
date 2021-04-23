import { atom } from "recoil";

export const searchKeyword = atom<string>({
    key: 'setKeyword',
    default: ''
})