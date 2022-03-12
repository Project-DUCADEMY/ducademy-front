import styled from 'styled-components';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { niesAPIkey } from '../config/config.js'
import style from '../../assets/css/SchoolMeal.module.css'

let Main = styled.div`
`

function SchoolMeal() {
    let [getSchoolMeal, setSchoolMeal] = useState([])
    let date = '20220310'
    let menu = ''
    useEffect(() => {
        axios.post(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${niesAPIkey}&Type=json&ATPT_OFCDC_SC_CODE=${SchoolInfo.OfficeOfEduCode}&SD_SCHUL_CODE=${SchoolInfo.SchoolCode}&MLSV_YMD=${date}`)
        .then((response) => {
            // response.data.mealServiceDietInfo[1].row.forEach(element => {
            //     console.log(element.DDISH_NM)
            // })
            setSchoolMeal(response.data.mealServiceDietInfo[1].row)
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);
    // https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&ATPT_OFCDC_SC_CODE=D10&SD_SCHUL_CODE=7240454&MLSV_YMD=20220311
    return (
        <Main>
            <div className={style.container}>
            {
                getSchoolMeal.map(element => {
                    menu = element.DDISH_NM
                    menu = menu.replaceAll('*', '').replaceAll('<br/>', '').replaceAll('\/[1-9.]+\/', ', ')
                    return <span>{menu}</span>
                })
            }
            </div>


            {
                console.log(getSchoolMeal)
            }
        </Main>
    )
}

export default SchoolMeal;