import styled from 'styled-components';
import Calendar from '../Calendar/Calendar'
import SchoolMeal from '../SchoolMeal/SchoolMeal'

let Main = styled.div`
    z-index: -1;
`

const Mainpage = () => {
    return(
        <Main>
            <SchoolMeal/>
            <Calendar/>
        </Main>
    )
}

export default Mainpage