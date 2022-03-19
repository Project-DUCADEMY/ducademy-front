import axios from 'axios'
import { niesAPIkey } from '../config/config.js'
import SchoolInfo from '../../assets/dummy/School'
export default async (date) => {
	if(typeof date == 'string') {

	}
	else {

	}
	let result = null
	try {
		result = await axios.post(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${niesAPIkey}&Type=json&ATPT_OFCDC_SC_CODE=${SchoolInfo.OfficeOfEduCode}&SD_SCHUL_CODE=${SchoolInfo.SchoolCode}&MLSV_YMD=${date}`)	
	}
	catch(ex) {
		return ex
	}
	return result

}	