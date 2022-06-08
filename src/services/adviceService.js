import axios from "axios";

const url = "https://api.adviceslip.com/advice";

export const getAdvice = async () => {
  const {
    data: {
      slip: { advice },
    },
  } = await axios.get(url);
  return advice;
};
