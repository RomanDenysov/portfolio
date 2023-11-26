import styled from "styled-components"

import { useLanguage } from '@language/LanguageProvider'



// Стилі компонента 
const StyledSwitch = styled.div`
	display: flex;
`
const SwitchInput = styled.input`
	width: 0;
	height: 0;
	visibility: hidden;
`
const SwitchLabel = styled.label`
	background-color: ${props => props.theme.colors.primary};
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	width: 2.6rem;
	height: 1.2rem;
	border-radius: 100px;
	border: 2px solid ${props => props.theme.colors.text};
	position: relative;
	transition: background-color 0.2s;
`
const SwitchButton = styled.span`
	content: '';
	position: absolute;
	top: .05rem;
	left: .05rem;
	width: 0.7rem;
	height: 0.7rem;
	border-radius: 45px;
	transition: 0.2s;
	background-color: ${props => props.theme.colors.text};
	box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
	${SwitchInput}:checked + ${SwitchLabel} & {
		left: calc(100% - .05rem);
		transform: translateX(-100%);
	}
	${SwitchLabel}:active & {
		width: 1.4rem;
	}
`
const SwitchText = styled.span`
	position: absolute;
	color: ${props => props.theme.colors.text};
	top: 50%;
	left: 65%;
	transform: translate(-50%, -50%);
	font-size: .7rem;
	font-weight: 100;
	user-select: none;
	transition: all 0.2s ease;
	${SwitchInput}:checked + ${SwitchLabel} &{
		left: 30%
	}
`



export default function LanguageSwitch() {
	const { language, changeLanguage } = useLanguage()

	const toggleLanguage = () => {
		const newLanguage = language === 'en' 
			? 'ua'
			: 'en';
		changeLanguage(newLanguage)
	}

	return (
		<StyledSwitch >
			<SwitchInput 
				id='langswitch'
				name='language'
				type="checkbox"
				onChange={toggleLanguage}/>
			<SwitchLabel for='langswitch'>
				<SwitchButton/>
				<SwitchText>{language.toUpperCase()}</SwitchText>
			</SwitchLabel>
		</StyledSwitch>
	)
}
