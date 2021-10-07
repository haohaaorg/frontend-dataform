import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import { GET_ME } from "../../graphql/user";
import Loading from "../Loading";
import { loadUser } from "../../actions/auth";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated },
  loadUser,
  ...rest
}: any) => {
  // const { data, loading, error } = useQuery(GET_ME);
  // useEffect(() => {
  //   if (!error && data?.getMe?.user) {
  //     loadUser(data?.getMe?.user);
  //   }
  // }, [data?.getMe?.user]);

  // if (loading) {
  //   return <Loading />;
  // }
  // if (!data && error) {
  //   return <Loading />;
  // }

  // const { getMe } = data;

  return (
    <Route
      {...rest}
      render={(props) =>
        ![] ? <Redirect to="/login"></Redirect> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(PrivateRoute);
