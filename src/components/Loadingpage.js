import styled from 'styled-components';
import style from '../assets/css/Loading.module.css'

const Main = styled.div`
    float: left;
`
function Test2() {
    return (
        <div className={style.loader}></div>
    )
}
export default Test2
