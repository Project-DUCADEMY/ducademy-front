import styled from 'styled-components';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp.js";
import "ace-builds/src-noconflict/theme-xcode";

import {
    atom,
    useRecoilState,
} from 'recoil';

const Main = styled.div`
    float: right;
`

export const debuggerState = atom({
    key: 'userCode',
    default: ''
})
function Debuggerpage(props) {
    let [userCode, setUserCode] = useRecoilState(debuggerState)
    return (
        <Main>
            <AceEditor
                mode="c_cpp"
                theme="xcode"
                onChange={setUserCode}
                fontSize={16}
                editorProps={{ $blockScrolling: true }}
            />
            <button onClick={() => {console.log(userCode)}}>
                console log
            </button>
        </Main>
    )
}
export default Debuggerpage