import styles from '../styles/Layout.module.css';


export default function Layout({ children }) {
    return (
        <div className="flex bg-blue-400 h-[100vh] justify-center align-middle items-center">
            <div className="m-auto mt-10 bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
                <div className={styles.imgStyle}>
                    <div className={styles.cartoonImg}></div>
                    <div className={styles.cloud_one}></div>
                    <div className={styles.cloud_two}></div>
                </div>
                <div className="right flex flex-col justify-evenly bg-white">
                    <div className="text-center py-10">
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}