import styled from 'styled-components';
import { useState } from 'react'
import ScheduleDetail from './ScheduleDetail'

const ScheduleWrapper = styled.div`
    position: static;
    width: 95%;
`
const ScheduleTitle = styled.div`
    position: relative;
    height: 30%;
    width: 100%;
    font-size: 14px;
    background-color: #dafac2;
    margin: 2px;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`
// const ScheduleDetail = styled.div`
//     position: absolute;
//     height: 300px;
//     width: 200px;
//     background-color: red;
//     opacity: 0.5;
//     z-index: 200;
//     border-radius: 5%;
//     margin-left: 100px;
// `


function redirectNewPage(link) {
    window.open(link, '_blank')
}

export default (props) => {
    const [getOnOver, setOnOver] = useState(false)
    return (
        <ScheduleWrapper>
            <ScheduleTitle
                onClick={() => redirectNewPage(props.link)}
                onMouseOver={() => setOnOver(true)}
                onMouseOut={() => setOnOver(false)}
            >
                {props.data.title}
            </ScheduleTitle>
            {getOnOver ? 
                <ScheduleDetail 
                    title={props.data.title}
                 />
                : 
                <></>
            }
        </ScheduleWrapper>
    )
}