import s from "./PageHome.module.scss";
import { SectionSearch } from "./SectionSearch/SectionSearch";
import { SectionQuickLinks } from "./SectionQuickLinks/SectionQuickLinks";

export const PageHome = () => {
    return (
        <main className={s.home_main}>
            <SectionSearch />
            <SectionQuickLinks />
        </main>
    )
}