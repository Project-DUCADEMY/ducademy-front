import { keyframes } from 'styled-components';
export const HideText = keyframes`
    0% { opacity: 1.0; }
    20% { 
        opacity: 0.0; 
        display: none;
    }
    100% { opacity: 0.0; }
`
export const DisplayText = keyframes`
    0% { 
        opacity: 0.0; 
        display: '';
    }
    60% { opacity: 0.0; }
    100% { opacity: 1.0; }
`