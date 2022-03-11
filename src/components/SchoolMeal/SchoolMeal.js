import styled from 'styled-components';
import {atom, useRecoilState } from 'recoil'
import { useEffect } from 'react'
import axios from 'axios'
import { niesAPIkey } from '../config/config.js'

let Main = styled.div`
`

function SchoolMeal() {
    let date = '20220311'
    useEffect(() => {
        axios.post(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${niesAPIkey}&Type=json&ATPT_OFCDC_SC_CODE=D10&SD_SCHUL_CODE=7240454&MLSV_YMD=${date}`)
        .then((response) => {
            console.log(response.data.mealServiceDietInfo[1].row.forEach(element => {
                console.log(element.DDISH_NM)
            }))
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);
    return (
        <Main>
        </Main>
    )
}

export default SchoolMeal;