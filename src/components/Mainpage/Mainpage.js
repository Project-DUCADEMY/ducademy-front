import styled from 'styled-components';
import Calendar from '../Calendar/Calendar'
import SchoolMeal from '../SchoolMeal/SchoolMeal'

const MainContainer = styled.div`
    z-index: -99;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Mainpage = () => {
    return(
        <MainContainer>
            <SchoolMeal/>
            <Calendar/>
        </MainContainer>
    )
}

export default Mainpage