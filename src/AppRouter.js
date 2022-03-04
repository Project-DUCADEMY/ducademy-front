import { BrowserRouter, Route, Switch } from "react-router-dom";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react"
import axios from "axios"
import Sidebar from './components/Sidebar/Sidebar.js';
import Testpage from './components/Testpage.js'
import Signpage from './components/signpage/Signpage.js';
import Debuggerpage from './components/debuggerpage/Debugger.js';
import Calendar from './components/Calendar/Calendar.js'
import Test2 from './components/Loadingpage.js'
import Errorpage from './components/Errorpage.js';
import User from './global_helper/user'
import Loading from './global_helper/loading'
import ErrorRecoil from './global_helper/error'

const AppRouter = () => {
    const [Userinfo, setUserinfo] = useRecoilState(User);
    const [loading, setLoading] = useRecoilState(Loading);
    const error = useRecoilValue(ErrorRecoil);
    useEffect(() => {
        console.log('test')
        axios.post('/ssr/userinfo')
        .then(response => {
            setUserinfo({
                isAuthenticated: true,
                userPage: response.data 
            })
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
                <BrowserRouter>
                    {Userinfo.isAuthenticated ? <Sidebar/> : (<></>)}
                    <Route exact path="/">
                        {Userinfo.isAuthenticated ? <Testpage/> : <Signpage/> } 
                    </Route>
                    <Route path='/debugger'> <Debuggerpage/> </Route>
                    <Route path='/calendar'> <Calendar/> </Route>
                    <Route path='/test2'> <Test2/> </Route>
                </BrowserRouter>
            )
        )
    )
}

export default AppRouter;