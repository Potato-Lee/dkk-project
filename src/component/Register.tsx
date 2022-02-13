import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'react-router-dom';
import axios from 'axios';
import { AnyRecord } from 'dns';

const RegisterForm = styled.div`
    div{
        span{
            font-size:2rem;
            color:#794A44;
            font-weight:bold;
        }
        margin:20px;
    }    
    text-align:center;
    border: 1px solid #CDC3BF;
    border-radius:4px; 
    width:400px;
    height:600px;
    padding:0 50px;
    h3{
        float:left;
        font-size:1rem;
        color:#A98A75
    }
`;

const RegisterDiv= styled.div`
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
    border-bottom:1px solid #CDC3BF;
    display:block;
    font-size:1.5rem;
    margin-bottom:20px;
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

function Register(props: any) {
    const [id, setId]= useState('');
    const [password, setPw]= useState('');
    const [email, setEmail]= useState('');
    const [intro, setIntro]= useState('');

    const onChangeId= (e: any) => {
        setId(e.target.value);
    }

    const onChangePw= (e:any) => {
        setPw(e.target.value);
    }

    const onChangeEmail= (e: any) => {
        setEmail(e.target.value);
    }

    const onChangeIntro= (e:any) => {
        setIntro(e.target.value);
    }

    const onRegisterHandler= (e:any) => {
        e.preventDefault();
        axios.post('',{
            id:id,
            password:password,
            emial: email,
            intro: intro
        },{headers:{
            "Content-Type":"application/json",
        },})
        .then((response) => {
            // access token, refresh token 저장 (어디에다가 할지)
            localStorage.setItem("retoken",response.data.jwt_token);
            props.history.push("/");
        })
        .catch((error)=>{
            alert("Register Fail");
        })

    }


  return (
    <RegisterDiv>
      <RegisterForm>
          <div>
            <span>DKK</span>
            <span>회원가입</span>
          </div>
        <form onSubmit={onRegisterHandler}>
            <h3>아이디를 입력하세요</h3>
            <InputStyle value={id} onChange={onChangeId}></InputStyle>
            <h3>비밀번호을 입력하세요</h3>
            <InputStyle value={password} onChange={onChangePw}></InputStyle>
            <h3>이메일을 입력하세요</h3>
            <InputStyle value={email} onChange={onChangeEmail}></InputStyle>
            <h3>자기소개를 작성해주세요</h3>
            <InputStyle value={intro} onChange={onChangeIntro}></InputStyle>
            <Button type="submit">회원가입하기</Button>
        </form>
      </RegisterForm>
      </RegisterDiv>
    );
}

export default Register;
