import styled from 'styled-components';
import * as helper from './CalendarHelper'
import { useRecoilValue } from 'recoil'
import { calendarMetaData } from './Calendar'
let Main = styled.div`
    width: calc(100%/7 - 2px);
    height: calc(20% - 2px);
    background-color: ${props => props.axisMonth ? 'yellowgreen' : 'skyblue'};
    margin: 1px;
    border-radius: 5px;
    float: left;
`
let Date = styled.div`
    margin-left: 4px;
    margin-top: 5px;
`
let Schedule = styled.div`
    font-size: 12px;
    background-color: #dafac2;
    margin: 2px;
`
function Day(props) {
    let metaData = useRecoilValue(calendarMetaData)
    return (
        <Main
        axisMonth = {metaData.axis.getMonth() === props.date.getMonth() + 1}>
            <Date>
                {props.date.getDate()}
            </Date>
            {
                props.schedule.map((element) => {
                    return(
                        <Schedule>
                            {element.title}
                        </Schedule>
                    )
                })
            
            }
            {/* <Schedule>
                리액트
            </Schedule> */}

        </Main>

    )
    
}

export default Day
