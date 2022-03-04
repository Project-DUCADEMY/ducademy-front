import styled from 'styled-components';
import ErrorRecoil from '../global_helper/error'
import { useRecoilValue } from 'recoil';
const Main = styled.div`
    float: left;
`

function ErrorPage(props) {
    const error = useRecoilValue(ErrorRecoil)
    return (<Main>
        Error Occured
        message: {error.message}
    </Main>)
}
export default ErrorPage;
