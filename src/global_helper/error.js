import { atom } from "recoil";
export default atom({
    key: 'Error',
    default: {
      occur: false,
      message: ''
    }
  })