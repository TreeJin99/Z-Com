import React from "react";
import Home from "@/app/(afterSignIn)/home/page";

type Props = {
    params: Promise<{ username: string, id: string, photoId: string }>
}

const Page = async ({params}: Props) => {
    const {username, id, photoId} = await params;
    return (
        <Home/>
    )
}

export default Page;