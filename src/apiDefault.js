import axios from "axios";
const apiDefault = axios.create({
  baseURL: "https://api.synthia.tech/patient/api",
  withCredentials: false,
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiJ9.o08uuVgZfcs5faXObysrGSwxKDOGWnyTrLlP9r74BR9GcEnw5ocSIb6uyk6F3zssoNUkaYu9pXpVMzr5mpB2gVAe1GwgdZiaAXf4DnHAMKQBrrRXqEFEdE4R0uBTb0pNLj399w1RngurNZ3SmN9oz6w_w4KjdZGthpyeWPv5jr0XTnTy-whYQpkyKurAu9OuKOocMyU.lqJ5ON4xj9bZSgJTADUM7qvz7YCW7TCSL1xHuhEJMp4",
  },
});
export default apiDefault;