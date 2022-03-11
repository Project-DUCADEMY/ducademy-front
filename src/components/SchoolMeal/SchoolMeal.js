import styled from 'styled-components';
import {atom, useRecoilState } from 'recoil'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { niesAPIkey } from '../config/config.js'

let Main = styled.div`
`

function SchoolMeal() {
    let [getSchoolMeal, setSchoolMeal] = useState([])
    let date = '20220311'
    useEffect(() => {
        axios.post(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${niesAPIkey}&Type=json&ATPT_OFCDC_SC_CODE=D10&SD_SCHUL_CODE=7240454&MLSV_YMD=${date}`)
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
            {
                getSchoolMeal.map(element => {
                    return element.DDISH_NM
                })
            }
            {
                // getSchoolMeal.forEach(element => {
                //     console.log(element.DDISH_NM)
                // })
            }
        </Main>
    )
}

export default SchoolMeal;