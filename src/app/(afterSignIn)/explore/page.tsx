import SearchForm from "@/app/(afterSignIn)/_component/SearchForm";
import style from "./explore.module.css"
import Trend from "@/app/(afterSignIn)/_component/Trend";

export default function Home() {
  return (
      <main className={style.main}>
          <div style={{ marginBottom: 60, width: 'inherit' }}>
              <SearchForm />
          </div>
          <div className={style.trend}>
              <h3>나를 위한 트렌드</h3>
              <Trend />
              <Trend />
              <Trend />
              <Trend />
              <Trend />
          </div>
      </main>
  );
}
