"use client"
// import { NotFound } from "@/components/404";
import { useTheme } from "@/components/theme-provider";


export default function demo() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isDark, toggleDarkMode } = useTheme();

    return (
        <div>
            <button onClick={toggleDarkMode}>
                {isDark ? 'فعال کردن حالت روشن' : 'فعال کردن حالت تاریک'}
            </button>
            {/* <NotFound /> */}
            
        </div>
    );
}