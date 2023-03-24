import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 130px;
    background: ${ props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    border-radius: 14px;
    border: ${ props => props.isBack ? '1px solid #FFFFFF' : 'none'};
    outline: none;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;

    &:hover {
        opacity: .8;
    }

    &:active {
        opacity: .7;
    }

    img {
        transform: ${ props => props.isBack ? 'scaleX(-1)' : 'none'} ;
    }
`;