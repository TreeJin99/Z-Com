"use client"

import style from './signOutButton.module.css'

export default function SignOutButton() {
    const me = {
        id: "treejin99",
        nickname: "treejin99",
        image: "/5Udwvqim.jpg"
    }

    const onSignOut = () => {};

    return (
        <button className={style.signOutButton} onClick = {onSignOut}>
            <div className={style.signOutUserImage}>
                <img src={me.image} alt={me.id}/>
            </div>
            <div className={style.signOutUserName}>
                <div> {me.nickname} </div>
                <div> @{me.id} </div>
            </div>
        </button>
    );
}