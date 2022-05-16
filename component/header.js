import Link from 'next/link';
import Head from 'next/head';

export default function Header() {
    return (
        <div>
            <Head>
                <title>FOOD STORE</title>
                <meta name="description" content="Food Store" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div></div>
                <div className="menu-wrap">
                    <ul>
                        <li>
                            <Link href="/about">ABOUT</Link>
                        </li>
                        <li>
                            <Link href="/store">STORE</Link>
                        </li>
                    </ul>
                </div>
                <div>AWESOME FOOD STORE</div>
            </header>
            <style jsx>
            {`
                header {
                    position: relative;
                    width: 100%;
                    height: 94px;
                    padding: 0px 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    z-index: 10;
                }
                ul {
                    list-style: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                li {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 160px;
                    padding: 24px 0px;
                    font-size: 18px;
                    font-weight: 600;
                    letter-spacing: .02em;
                }
            `}
            </style>
        </div>
    )
}