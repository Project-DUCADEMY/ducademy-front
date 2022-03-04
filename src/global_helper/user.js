import { atom } from "recoil";
export default atom({
    key: 'User',
    default: {
      isAuthenticated: false,
      userPage: null
    }
  })