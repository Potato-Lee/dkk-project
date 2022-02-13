import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';

const LoginForm = styled.div`
    h3{
        font-size:3rem;
        color:#794A44;
    }
    text-align:center;
    border: 1px solid #CDC3BF;
    border-radius:4px; 
    width:400px;
    height:380px;
    padding:0 50px;
`;

const LoginDiv= styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    right:0;
`

const InputStyle = styled.input`
    
    width:100%;
    border:none;
    border-bottom:1px solid #C0C0C0;
    display:block;
    font-size:1.5rem;
    margin-bottom:20px;
    padding:10px 0;
`;

const Button= styled.button`
    float:right;
    border:none;
    border-radius:3px;
    font-size:1rem;
    cursor:pointer;
    font-weght:bold;
    color:white;
    background: #CC9174;
    &:hover{
        background:#CDC3BF;
    }
    padding:0.6rem 2rem;
`;

const DivRegister= styled.div`
    text-align:left;
    a{
        color:gray;
       &:hover{
            color:#CC9174;
        }
    }
`;

function Login(props : any) {
    const [id, setId]= useState('');
    const [password, setPw]= useState('');

    const onChangeId= (e: any) => {
        setId(e.target.value);
    }

    const onChangePw= (e:any) => {
        setPw(e.target.value);
    }

    const onLoginHandler= (e:any) => {
        e.preventDefault();
        axios.post('',{
            id:id,
            password:password
        },{headers:{
            "Content-Type":"application/json",
        },})
        .then((response) => {
            // access token, refresh token 저장 (어디에다가 할지)
            localStorage.setItem("retoken",response.data.jwt_token);
            props.history.push("/main");
        })
        .catch((error)=>{
            alert("Login Fail");
        })

    }

  return (
    <LoginDiv>
      <LoginForm>
        <h3>DKK</h3>
        <form onSubmit={onLoginHandler}>
            <InputStyle placeholder='아이디' value={id} onChange={onChangeId}></InputStyle>
            <InputStyle placeholder='비밀번호' value={password} onChange={onChangePw}></InputStyle>
            <Button type="submit">로그인</Button>
        </form>
        <DivRegister>
            <Link to="/Register">회원가입 하시겠습니까?</Link>
        </DivRegister>
      </LoginForm>
      </LoginDiv>
    );
}

export default Login;
