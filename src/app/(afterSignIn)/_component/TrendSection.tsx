"use client"

import style from './trendSection.module.css'
import Trend from './Trend'
import {usePathname} from "next/navigation";

export default function TrendSection(){
    const pathname = usePathname();
    const onChangeFollow = () => {}
    const onChangeAll = () => {}

    switch (pathname){
        case '/explore':
            return null;
        // case '/search':
        //     return (
        //         <div className={style.trendBg}>
        //         </div>
        //     );
    }

    return(
        <div className={style.trendBg}>
            <div className={style.trend}>
                <h3>나를 위한 트렌드</h3>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </div>
        </div>
    );
} 