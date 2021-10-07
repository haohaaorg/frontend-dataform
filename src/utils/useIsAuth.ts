import {  useQuery } from "@apollo/client";
import {  useHistory } from "react-router-dom";
import { useEffect } from "react";
import { GET_ME } from "../graphql/user";

export const useIsAuth = () => {
  const { data, loading } = useQuery(GET_ME);
  // let history = useHistory();
  useEffect(() => {
    if (!loading && !data?.getMe) {
    // history.push("/login");
    
}
  }, [loading, data]);
};
