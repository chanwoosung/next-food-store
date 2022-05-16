export default function Footer() {
    return (
        <div>
            <footer>
                <div className="c-footer-line bg-color2"></div>
                <nav>
                    <div className="c-footer-logo-wrap">
                        <div className="c-footer-logo"><img src="https://www.common-ground.co.kr/images/svg/c-footer-logo.svg"/></div>
                        <div className="c-sns-wrap">
                            <div className="c-facebook-link">
                                <a href="https://www.facebook.com/commonground.1st">
                                    <img src="https://www.common-ground.co.kr/images/svg/c-facebook.svg"/>
                                </a>
                            </div>
                            <div className="c-instagram-link">
                                <a href="https://www.instagram.com/commonground.1st">
                                    <img src="https://www.common-ground.co.kr/images/svg/c-instagram.svg" alt="instagram-link"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="c-address"><p>서울특별시 광진구 아차산로 200</p></div>
                    <div className="c-footer-info">
                        <ul className="c-color7">
                            <li>
                                코오롱인더스트리(주)FnC부문 커먼그라운드
                            </li>
                            <li>
                                대표이사: 유석진
                            </li>
                            <li>
                                법인등록번호: 321-85-00020
                            </li>
                            <li>
                                서울특별시 강남구 삼성로 518 (삼성동)
                            </li>
                        </ul>
                    </div>
                </nav>
                <address>@ 2018 purpleworks</address>
            </footer>
            <style jsx>
                {`
                    footer{
                        margin-top: 60px;
                        padding: 24px;
                    }
                    .bg-color2 {
                        background-color: #eeeeee;
                    }
                    .c-footer-line {
                        height: 0.5rem;
                        position: relative;
                    }
                    address{
                        font-size: 12px;
                        padding-top: 3.75rem;
                        color: #868e96;
                    }
                    .c-color7 {
                        color: #868e96;
                    }
                    .c-footer-logo-wrap {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding-top: 1.5rem;
                    }
                    footer nav .c-footer-logo img {
                        height: 2.1rem;
                    }
                    .c-sns-wrap {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .c-sns-wrap:before {
                        content: "";
                        background-color: #dee2e6;
                        height: 1.5rem;
                        margin: 0 1.25rem 0 1.6rem;
                        width: 1px;
                        display: inline-block;
                    }
                    .c-sns-wrap div {
                        width: 40px;
                    }
                    .c-sns-wrap img {
                        width: 24px;
                        height: 24px;
                    }
                    .c-address {
                        padding: 3rem 0 1rem;
                    }
                    .c-address p {
                        font-size: 12px;
                    }
                    nav ul {
                        justify-content: flex-start;
                        align-items: center;
                        list-style: none;
                        display: flex;
                        padding:0;
                    }
                    li{
                        font-size: 12px;
                    }
                    li:after {
                        content: "";
                        display: inline-block;
                        height: 0.8rem;
                        margin: 0 0.5rem;
                        vertical-align: top;
                        width: 1px;
                        background-color: #dee2e6;
                    }
                    li:nth-child(4):after {
                        content: none;
                    }
                `}
            </style>
        </div>
    )
}