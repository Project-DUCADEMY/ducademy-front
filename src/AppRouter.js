import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react"
import axios from "axios"
import style from './assets/css/Login.module.css'

import dummy from './assets/dummy/userinfo'

import Sidebar from './components/Sidebar/Sidebar.js';
import Testpage from './components/Testpage.js'
import Loginpage from './components/Sign/Loginpage.js';
import Joinpage from './components/Sign/Joinpage.js';
import Debuggerpage from './components/Debugger/Debugger.js';
import Calendar from './components/Calendar/Calendar.js'
import Test2 from './components/Loadingpage.js'
import Errorpage from './components/Errorpage.js';
import RtClass from './components/rtClass/rtCLass.js'

import User from './global_helper/user'
import Loading from './global_helper/loading'
import ErrorRecoil from './global_helper/error'
import { Switch } from "react-router-dom";

const AppRouter = () => {
    const [Userinfo, setUserinfo] = useRecoilState(User);
    const [loading, setLoading] = useRecoilState(Loading);
    const error = useRecoilValue(ErrorRecoil);
    useEffect(() => {
        console.log('test')
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
                
                setUserinfo({
                    isAuthenticated: false,
                })
                setLoading(false);
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
                    <Sidebar/>
                    <Switch>
                        <Route exact path="/"> <Testpage/> </Route>
                        <Route path='/debugger'> <Debuggerpage/> </Route>
                        <Route path='/calendar'> <Calendar/> </Route>
                        <Route path='/rtClass'> <RtClass/> </Route>
                        <Route path='/test2'> <Test2/> </Route>
                        <Route> <Redirect to="/"/> </Route>
                    </Switch>
                </BrowserRouter>)
            )
        )
    )
}

export default AppRouter;