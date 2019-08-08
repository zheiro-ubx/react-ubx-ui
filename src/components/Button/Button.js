import React from 'react';
import styled from 'styled-components';
import {colors} from '../../constants'

const ButtonWrapper = styled.button`
	border-radius: 4px;
	color: #000000;
	background: #D1D5DD;
	padding: 8px 15px;
	border: none;
	outline: none;
`;

function Button(props) {
	return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

export default Button;
