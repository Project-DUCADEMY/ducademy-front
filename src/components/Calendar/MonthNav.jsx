import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { calendarDatas } from './Calendar'
import '../../assets/fonts/IBM_Plex_Sans.css'

const MonthNav = styled.div`
    width: 99%;
`
const DateInfo = styled.div`
    float: left;
    font-family: IBM Plex Sans;
    font-weight: 600;
    font-size: 18px;
    width: 110px;
    height: 35px;
    margin-bottom: 3px;
    left: -10px;
    :hover{
        transition: background, 0.3s;
        background-color: #6EDCD9;
    }
    cursor: Default;
    border-radius: 3px;
    text-align: center; 
    line-height: 30px;
`
const Arrow = styled.div`
    top: 11px;
    right: ${props => props.direction === 'right' ? '-9' : '-11'}px;
    position: relative;
    width: 10px;
    height: 10px;
    border-top: 4px solid #000;
    border-right: 4px solid #000;
    border-radius: 3px;
    transform: rotate(${props => props.direction === 'right' ? '45deg' : '225deg'}); 
`
const ArrowWrapper = styled.div`
    margin-bottom: 3px;
    display: flex;
    width: 35px;
    height: 35px;
    border-radius: 3px;
    float: right;
    cursor: pointer;
    :hover{
        transition: background, 0.3s;
        background-color: #6EDCD9;
    }
`
const MarginBetweenArrow = styled.div`
    width: 5px;
    height: 20px;
    float: right;
`
export default () => {
    let [metaData, setMetaData] = useRecoilState(calendarDatas)
    const changeMonth = (next) => {
    setMetaData({
        axis: new Date(metaData.axis.getFullYear(),
        metaData.axis.getMonth() + (next ? 1 : -1) , 
        metaData.axis.getDate())
    })
}
    return (
        <MonthNav>
            <DateInfo>{metaData.axis.getFullYear()}년 {metaData.axis.getMonth() + 1}월</DateInfo>
            <ArrowWrapper onClick={() => changeMonth(true)}>
                <Arrow direction={'right'}/>
            </ArrowWrapper>
            <MarginBetweenArrow/>
            <ArrowWrapper onClick={() => changeMonth(false)}>
                <Arrow direction={'left'}/>
            </ArrowWrapper>
        </MonthNav>
    )
}