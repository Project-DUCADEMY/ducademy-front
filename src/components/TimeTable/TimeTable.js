import { styled } from 'styled-components'
import { useEffect } from 'react'
import axios from 'axios'
import SchoolInfo from '../../assets/dummy/School'
import {niesAPIkey} from '../config/config'


let test = 'https://open.neis.go.kr/hub/hisTimetable?Type=json&ATPT_OFCDC_SC_CODE=D10&SD_SCHUL_CODE=7240454'

String.prototype.fillZero = function(width){
    return this.length >= width ? this:new Array(width-this.length+1).join('0')+this;//남는 길이만큼 0으로 채움
}

const LoadTimeTable = async (classInfo, date) => {
    const today = new Date(Date.now())
    // date = date | (today.getFullYear().toString() 
    //     + (today.getMonth() + 1).toString().fillZero(2) 
    //     + today.getDate().toString())
    return await axios.post(
        `https://open.neis.go.kr/hub/hisTimetable?` +
        `KEY=${niesAPIkey}&Type=json&ATPT_OFCDC_SC_CODE=${classInfo.OfficeOfEduCode}&SD_SCHUL_CODE=${classInfo.SchoolCode}&` +
        `ALL_TI_YMD=${date}&GRADE=${classInfo.grade}&CLASS_NM=${classInfo.schoolClass}`
    )

}

const TimeTable = () => {
    useEffect(() => {
        LoadTimeTable({
            OfficeOfEduCode: SchoolInfo.OfficeOfEduCode,
            SchoolCode: SchoolInfo.SchoolCode,
            grade: '2',
            schoolClass: '1'
        }, '20220310')
        .then(response => {
            // console.log(response)
        })
    }, []);

    return (<div></div>)
}

export default TimeTable
