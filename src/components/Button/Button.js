import React from 'react'
import styled from 'styled-components'
import {colors} from '../../constants'
import {assessFontColor} from '../../utils' 

const ButtonWrapper = styled.button`
	border-radius: 4px;
	color: ${props => props.color ? assessFontColor(props.color) : assessFontColor('#D1D5DD')};
	background: ${props => props.color ? props.color : '#D1D5DD'};
	padding: 8px 15px;
	border: none;
	outline: none;
`;

function Button(props) {
	return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
}

export default Button;
