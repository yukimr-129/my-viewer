import { atom } from "recoil"

const nextPageToken = atom({
    key: 'nextPageToken',
    default: ''
})

export default nextPageToken