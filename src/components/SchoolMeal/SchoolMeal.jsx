import styled from 'styled-components';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { niesAPIkey } from '../config/config.js'
import style from '../../assets/css/SchoolMeal.module.css'
import SchoolInfo from '../../assets/dummy/School'
import SchoolMealLoader from './SchoolMealLoader'
import LoadingPage from '../Loadingpage'

let Main = styled.div`
`
const Container = styled.div`
    

`

function SchoolMeal() {
    const [getSchoolMeal, setSchoolMeal] = useState([])
    const [getLoading, setLoading] = useState(true)
    let date = '20220310'
    let STYLE = undefined
    let timeStyle = [style.breakfast, style.lunch, style.dinner]
    let timeName = ['아침', '점심', '저녁']
    let idx = -1
    let menu = ''
    useEffect(() => {
        SchoolMealLoader('20220318')
        .then((result) => {
            setSchoolMeal(result.data.mealServiceDietInfo[1].row)
            console.log(result.data.mealServiceDietInfo[1].row)
            setLoading(false)
        })
        .catch((error) => console.log(error))
    }, []);

    return (
        <div className={style.container}>
        {
            getSchoolMeal.map(element => {
                idx += 1
                menu = element.DDISH_NM
                menu = menu.replaceAll('*', '').replaceAll(/[0-9.]+/g, '').replaceAll('<br/>', ', ')
                return (
                    <div className={style.timeBlock} key={idx}>
                        <div className={style.menuFront}>
                            <span className={timeStyle[idx]}>{timeName[idx]}</span>
                        </div>
                        <span className={style.menuBack}>{menu}</span>
                    </div>
                )
            })
        }
        </div>
    )
}

export default SchoolMeal;