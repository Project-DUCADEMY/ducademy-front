import styled from 'styled-components';
import style from '../assets/css/Loading.module.css'

const Main = styled.div`=
    float: left;
`
function Test2() {
    return (
        <Main>
            <div className={style.loader}></div>
        </Main>
    )
}
export default Test2
