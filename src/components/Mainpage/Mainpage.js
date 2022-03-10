import styled from 'styled-components';
import Calendar from '../Calendar/Calendar'

let Main = styled.div`
    z-index: -1;
`

const Mainpage = () => {
    return(
        <Main>
            <Calendar/>
        </Main>
    )
}

export default Mainpage