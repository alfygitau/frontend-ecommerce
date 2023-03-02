import { base_url } from "../../utils/config";

let register = async (userInfo) => {
  let res = await fetch(`${base_url}/api/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  let data = await res.json();
  return data;
};

const userService = { register };
export default userService;
