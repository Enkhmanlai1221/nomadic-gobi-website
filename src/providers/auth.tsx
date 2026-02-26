"use client";

import { RootState } from "@/store";
import { logout } from "@/store/auth-slice";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import { message } from "../utils/message";

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext({});

const AuthProvider = ({ children }: Props) => {
  const [isClient, setIsClient] = useState(false);
  const dispatch = useDispatch();
  const { push } = useRouter();
  const pathname = usePathname();
  const { accessToken } = useSelector((state: RootState) => state.auth);

  const { data, error } = useSWR(
    accessToken ? `swr.user.${JSON.stringify(accessToken)}` : null,
    async () => {
      // const resUserMe = await authApi.userMe();
      return {
        // resUserMe,
      };
    },
    {
      revalidateOnFocus: false,
      onError: (err) => {
        if (err.statusCode === 401) {
          message.error("Та хандах эрхгүй байна!");
          dispatch(logout());
          push("/login");
        }
        return err;
      },
    },
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!accessToken && !isClient) {
      if (pathname !== "/login") {
        push("/login");
      }
    }
  }, [accessToken, push, isClient, pathname]);

  if (error) {
    push("/login");
  }

  if (!isClient || !data) {
    return <div>Loading ...</div>;
  }

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

AuthProvider.displayName = "AuthProvider";

export default AuthProvider;
