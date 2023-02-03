import { useEffect, useState } from "react";
import { ServerLink } from "../useServerLink";

const useToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    fetch(`${ServerLink}/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.accessToken);
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          setToken(data.accessToken);
        }
      });
  }, [email]);

  return [token];
};
export default useToken;
