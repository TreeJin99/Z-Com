import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import ZLogo from '../../../public/zlogo.png'
import style from '@/app/(afterSignIn)/layout.module.css'
import NavMenu from '@/app/(afterSignIn)/_component/NavMenu'
import SignOutButton from '@/app/(afterSignIn)/_component/SignOutButton'
import TrendSection from '@/app/(afterSignIn)/_component/TrendSection'
import FollowRecommend from '@/app/(afterSignIn)/_component/FollowRecommend'
import RightSearchZone from "@/app/(afterSignIn)/_component/RightSearchZone";

type Props = { children: ReactNode, modal: ReactNode };

export default function AfterSignInLayout({ children, modal }: Props) {
    return (
        <div className={style.container}>
            <header className={style.leftSectionWrapper}>
                <section className={style.leftSection}>
                    <div className={style.leftSectionFixed}>
                        <Link className={style.logo} href="/home">
                            <div className={style.logoPill}>
                                <Image src={ZLogo} alt="z.com로고" width={40} height={40} />
                            </div>
                        </Link>
                        <nav>
                            <ul>
                                <NavMenu />
                            </ul>
                            <Link href="/compose/tweet" className={style.postButton}>게시하기</Link>
                        </nav>
                        <SignOutButton />
                    </div>
                </section>
            </header>
            <div className={style.rightSectionWrapper}>
                <div className={style.rightSectionInner}>
                    <main className={style.main}>{children}</main>
                    <section className={style.rightSection}>
                        <RightSearchZone />
                        <TrendSection />
                        <div className={style.followRecommend}>
                            <h3>팔로우 추천</h3>
                            <FollowRecommend />
                            <FollowRecommend />
                            <FollowRecommend />
                        </div>
                    </section>
                </div>
            </div>
            {modal}
        </div>
    )
}