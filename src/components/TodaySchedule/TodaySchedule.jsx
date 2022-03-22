import styled from 'styled-components'
import schedules from '../../assets/dummy/Schedule.js'
const Main = styled.div`
	background-color: green;
	width: 100%;
	height: 10px;
	display: flex;
	margin-top: 100px;
	margin-bottom: 100px;
	z-index: 4;
`
const WorkingBar = styled.div`
	background-color: ${props => props.info.color};
	position: absolute;
	left: ${props => props.info.start}%;
	width: ${props => props.info.length}%;
	height: 10px;
	z-index: 5;
`
const CharacterWrapper = styled.div`
	width: 0px;
	height: 0px;
	position: relative;
	left: calc(${props => props.location}% - 20px);
	bottom: 20px;
	z-index: 10;
`
const Img = styled.img`
	width: 30px;
	height: 30px;
`
const WorkingBarWrapper = styled.div`
	display: flex;
	position: relative;
	width: 100%;
`
const timeToPersent = (time) => {
	let hour, minute
	if(typeof time === 'string') {
		[hour, minute] = time.split(':')
	}
	else if(typeof time === 'object') {
		hour = time.getHours()
		minute = time.getMinutes()
	}
	else {
		return -1
	}
	return ((hour * 60) + (+minute)) / 14.4
}

const scheduleToSticks = (schedules) => {
	let Sticks = []
	schedules.forEach(element => {
		let stick = {
			start: timeToPersent(element.begin),
			length: null,
			color: element.color
		}
		const start = element.begin.split(':')
		const end = element.end.split(':')
		stick.length = timeToPersent(`${end[0] - start[0]}:${end[1] - start[1]}`)
		Sticks.push(stick)
	})
	return Sticks;
}

export default () => {
	const Schedules = scheduleToSticks(schedules)
	console.log(Schedules)
	return (
		<Main>
		<CharacterWrapper location={timeToPersent(new Date())}>
			<Img src="man.png" />
		</CharacterWrapper>
		<WorkingBarWrapper>
		{
			Schedules.map((element, idx) => {
				return <WorkingBar info={element} key={idx}/>
			})
		}
		</WorkingBarWrapper>
		</Main>
	)
}