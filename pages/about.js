export default function About() {
    return(
        <div>
            <div>
                json-server 9000번 포트
            </div>
            <div>
                터미널에서 npm 병렬 실행을 위해 concurrently 설치해야합니다.
            </div>
            <div>
                터미널에 npm install concurrently --save
            </div>
            <div>
                터미널에서 concurrently를 설치 후에 npm run test 로 json-server와 dev 병렬 실행하면 결과물을 볼 수 있습니다.
            </div>
        </div>
    )
}