"use client";

import style from "@/app/(afterSignIn)/_component/post.module.css";
import React from "react";
import {useRouter} from "next/navigation";

type Props = {
    children: React.ReactNode;
    post: {
        postId: number,
        content: string,
        User: {
            id: string,
            nickname: string,
            image: string,
        }
        createdAt: Date,
        Images: any[],
    }
}

export default function PostArticle({children, post}: Props){

    const router = useRouter();
    const onClick = () => {
        router.push(`/${post.User.id}/status/${post.postId}`);
    }

    return(
        <article className={style.post} onClickCapture={onClick}>
            {children}
        </article>
    )
}