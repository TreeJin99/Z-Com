import Tab from "@/app/(afterSignIn)/home/_component/Tab";
import TabProvider from "@/app/(afterSignIn)/home/_component/TabProvider";
import PostForm from "./_component/PostForm"
import style from "./home.module.css"
import Post from "@/app/(afterSignIn)/_component/Post";

export default function Home() {
    return (
        <main className={style.main}>
            <TabProvider>
                <Tab/>
                <PostForm/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </TabProvider>
        </main>
    )
}