"use client";

import style from './signin.module.css';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInModal() {
  const [id, setId] = useState('');  // 초기값 ''
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 로그인 로직
    console.log('로그인:', id, password);
  };

  const onClickClose = () => {
    router.back();  // 이전 페이지로
  };

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <button className={style.closeButton} onClick={onClickClose}>
            <svg width={24} viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
          <div>로그인하세요.</div>
        </div>
        <form onSubmit={onSubmit}>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="id">아이디</label>
              <input 
                id="id" 
                className={style.input} 
                value={id} 
                onChange={onChangeId} 
                type="text" 
                placeholder=""
              />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="password">비밀번호</label>
              <input 
                id="password" 
                className={style.input} 
                value={password} 
                onChange={onChangePassword} 
                type="password" 
                placeholder=""
              />
            </div>
          </div>
          <div className={style.message}>{message}</div>
          <div className={style.modalFooter}>
            <button 
              className={style.actionButton} 
              disabled={!id || !password}  // && → ||
            >
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}