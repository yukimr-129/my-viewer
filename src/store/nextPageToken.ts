import { atom } from "recoil"

const nextPageToken = atom<string | undefined>({
    key: 'nextPageToken',
    default: ''
})

export default nextPageToken