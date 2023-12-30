import axios, { AxiosInstance } from "axios";
import { useKeycloak } from "@react-keycloak/web";
import { useEffect, useRef } from "react";

const baseURL = "https://keycloak.alessandra8566";

export const useAxios = () => {
  const axiosInstance = useRef<AxiosInstance>();
  const { keycloak, initialized } = useKeycloak();
  const kcToken = keycloak?.token ?? "";

  useEffect(() => {
    axiosInstance.current = axios.create({
      baseURL,
      headers: {
        Authorization: initialized ? `Bearer ${kcToken}` : undefined,
      },
    });

    return () => {
      axiosInstance.current = undefined;
    };
  }, [initialized, kcToken]);

  return axiosInstance;
};
