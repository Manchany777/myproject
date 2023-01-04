import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    // background-color: #FFB200;
    // color: #fff;
    // width: 100%;
    // height: 40px;
    // font-size: 15px;
    // text-align: center;
    // border-radius: 10px;
    // margin: ${(props) => props.margin || "30px 0px 20px 0px"};

    background-color: #FFB200;
    color: #fff;
    width: ${(props) => props.width || "100%"};
    height: 36px;
    font-size: 15px;
    text-align: center;
    border-radius: 10px;
    margin: ${(props) => props.margin || "15px 0px 5px 0px"};
`;


function MyPageButton({children, width, margin}) {
    return (
        <Button type="submit" width={width} margin={margin}>{children}</Button>
    )
}

export default MyPageButton;