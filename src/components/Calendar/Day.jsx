import styled from 'styled-components';
import { Fragment, useState } from 'react';
import { useRecoilValue } from 'recoil'
import { calendarDatas } from './Calendar'
import { DayOfWeek } from './CalendarHelper'
import ScheduleDetail from './ScheduleDetail'
import Schedule from './Schedule'

const monthColor = [
    '#ffb6b3', //봄
    '#93a3eb', //여름
    '#9f7d7f', //가을
    '#e4e6ce' //겨울
]

const Main = styled.div`
    width: calc(100%/7 - 2px);
    height: calc(20% - 2px);
    background-color: ${props => props.Color};
    opacity: ${props => props.axisMonth ? 1 : 0.5};
    margin: 1px;
    border-radius: 5px;
    float: left;
`

const Date = styled.div`
    font-size: 18px;
    font-weight: bold;
    font-family: 'OpenSans';
    color: ${props => props.Color};
    margin-left: 4px;
    margin-top: 5px;
`
const ScheduleBox = styled.div`
    position: static;
    display: column;
    height: calc(100% - 30px);
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
        display: none;
        width: 4px;
    }
`


function redirectNewPage(link) {
    window.open(link, '_blank')
}

const openDetail = () => {

}
export default (props) => {
    const metaData = useRecoilValue(calendarDatas)


    let axisMonth = metaData.axis.getMonth()
    return (
        <Main
            axisMonth = {axisMonth === props.date.getMonth()}
            Color = {() => {
                // let myMonth = props.date.getMonth() - 2
                // if(myMonth == 1 || myMonth == 2 || myMonth == 12) return monthColor[0]
                // else if(myMonth == 3 || myMonth == 4 || myMonth == 5) return monthColor[1]
                // else if(myMonth == 6 || myMonth == 7 || myMonth == 8) return monthColor[2]
                // else return monthColor[3]
                return '#c4c9e9'
            }}
            >
            
            <Date
                Color={() => {
                    if(DayOfWeek[props.date.getDay()] == 'SUN') return 'red'
                    else if(DayOfWeek[props.date.getDay()] == 'SAT') return 'blue'
                    else return 'black'
                }}>
                {props.date.getDate()}
            </Date>
            <ScheduleBox>
            {
                props.schedule.map((element, idx) => {
                    return(
                        <Schedule
                            key={idx}
                            link={element.workLink}
                            data={
                                ({ title: element.title })
                            }
                        >
                        </Schedule>
                    )
                })
            }
            </ScheduleBox>
        </Main>

    )
    
}

