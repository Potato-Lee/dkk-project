import React from 'react';


function Main(props: any) {

    const onRogoutHandler= () => {
        localStorage.removeItem("retoken");
        props.history.push("/login");
    }

  return (
    <>
     메인페이지 입니다
     <button onClick={onRogoutHandler}>로그아웃</button>
    </>
    );
}

export default Main;
