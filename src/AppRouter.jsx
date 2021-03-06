import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react"
import axios from "axios"
import style from './assets/css/Login.module.css'

import dummy from './assets/dummy/userinfo'

import LeftSidebar from './components/LeftSidebar/Sidebar.js';
import RightSidebar from './components/RightSidebar/Sidebar.js'
import Mainpage from './components/Mainpage/Mainpage.jsx';
import Testpage from './components/Testpage'
import Loginpage from './components/Sign/Loginpage';
import Joinpage from './components/Sign/Joinpage';
import Debuggerpage from './components/Debugger/Debugger';
import Calendar from './components/Calendar/Calendar'
import Test2 from './components/Loadingpage'
import Errorpage from './components/Errorpage';
import RtClass from './components/rtClass/rtCLass'
import DataBoard from './components/DataBoard/DataBoard.js'

import User from './global_helper/user'
import Loading from './global_helper/loading'
import ErrorRecoil from './global_helper/error'
import { Switch } from "react-router-dom";

const AppRouter = () => {
    const [Userinfo, setUserinfo] = useRecoilState(User);
    const [loading, setLoading] = useRecoilState(Loading);
    const error = useRecoilValue(ErrorRecoil);
    useEffect(() => {
        axios.post('/user/userinfo')
        .then(response => {
            setUserinfo({
                isAuthenticated: true,
                userPage: dummy
            })
            setLoading(false);
        })
        .catch(error => {
            if(error.response.status === 401) {
                setLoading(false);
                setUserinfo({
                    isAuthenticated: false,
                })
            }
            else {
                console.error(error)
            } 
        })
    }, []);
    return (
        error.occur ? <Errorpage/> : (
            loading ? <Test2/> : (
                !Userinfo.isAuthenticated ? (
                <div className={style.loginWrapper}>
                    <BrowserRouter>
                        <Route exact path="/"> <Redirect to="/login"/> </Route>
                        <Route path='/login'> <Loginpage/> </Route>
                        <Route path='/join'> <Joinpage/> </Route>
                    </BrowserRouter>
                </div>
                ):(
                <BrowserRouter>
                    <LeftSidebar/>
                    <RightSidebar/>
                    <Switch>
                        <Route exact path="/"> <Mainpage/> </Route>
                        <Route path='/debugger'> <Debuggerpage/> </Route>
                        <Route path='/calendar'> <Calendar/> </Route>
                        <Route path='/rtClass'> <RtClass/> </Route>
                        <Route path='/dataBoard'> <DataBoard/> </Route>
                        <Route path='/test2'> <Testpage/> </Route>
                        <Route> <Redirect to="/"/> </Route>
                    </Switch>
                </BrowserRouter>)
            )
        )
    )
}

export default AppRouter;