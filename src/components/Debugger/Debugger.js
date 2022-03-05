import styled from 'styled-components';
import AceEditor from "react-ace";

import 'brace/mode/javascript';
import 'brace/mode/plain_text';

import 'brace/theme/monokai';
import 'brace/theme/textmate';
import 'brace/theme/github';

import 'brace/snippets/javascript';
import 'brace/ext/language_tools';

import 'brace/snippets/c_cpp'
import 'brace/mode/c_cpp'
import {
    atom,
    useRecoilState,
} from 'recoil';

const Main = styled.div`
    
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
                theme="monokai"
                showGutter={true}
                wrapEnabled={true}
                highlightActiveLine={true}
                editorProps={{ $blockScrolling: true }}
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                onChange={(setUserCode)}
                value={userCode}
                setOptions={{
                    enableSnippets: true,
                    // fontFamily: "tahoma",
                    fontSize: "12pt"
                }}
            />
            <button onClick={() => {console.log(userCode)}}>
                console log
            </button>
        </Main>
    )
}
export default Debuggerpage