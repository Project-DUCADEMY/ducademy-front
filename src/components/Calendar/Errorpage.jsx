import styled from 'styled-components';
const Main = styled.div`

`

const Errorpage = (props) => {
    return(<Main> {props.message} </Main>);
}
export default Errorpage;