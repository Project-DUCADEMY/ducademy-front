import styled from 'styled-components'

const AbsoluteWrapper = styled.div`
	position: absolute;
	width: 0;
	height: 0;

`
const Main = styled.div`
	position: relative;
	height: 300px;
	width: 200px;
	background-color: #70cc70;
	z-index: 200;
	border-radius: 5%;
	left: 90px;
	bottom: 100px;
`
const ScheduleInfo = (props) => {
	return (
		<AbsoluteWrapper>
			<Main>
				{props.title}
			</Main>
		</AbsoluteWrapper>
	)
}

export default ScheduleInfo;