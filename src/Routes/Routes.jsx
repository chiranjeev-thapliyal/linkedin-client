import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { JoinNowPage } from "../components/views/Signup/JoinNowPage";
import { Signup } from "../components/views/Signup/Signup";
import { AuthContext } from "../Contexts/AuthContextProvider";

export const Routes = () => {
    const {isAuth} = useContext(AuthContext);
    console.log(isAuth);

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Signup />
                </Route>

                <Route path="/signin">
                    <JoinNowPage />
                </Route>
                <Route path="/home">
                    Home Page
                </Route>
            </Switch>
        </div>
    )
}