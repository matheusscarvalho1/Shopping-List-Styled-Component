import styled from 'styled-components'

export const Container = styled.div `
    background: gray;
    padding: 20px;
    border-radius: 10px;

    h1 {
        color: #fff;
        text-align: center;
    }

    input {
        height: 40px;
        width: 270px;
        border-radius: 5px;
        border: none;
        margin-top: 30px;
        outline: none;
        padding: 5px;
        
        
    }
`

export const AddButton = styled.button `
    background-color: #6cf000;
    color: #000;
    width: fit-content;
    padding: 10px 30px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin-left: 10px;

    &:hover {
        opacity: 0.65;
    }

`

export const Product = styled.div `

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background: #fff;
    border-radius: 5px;
    margin-top: 15px;
    padding: 0 10px;

    p {
        text-transform: capitalize;
        font-weight: bold;
    }
`

export const TrashButton = styled.button `
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;

`

