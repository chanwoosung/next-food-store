import { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Row } from 'antd';
import StoreBlock from "../component/storeblock";
import Modal from "antd/lib/modal/Modal";
import StoreModal from "../component/storemodal";

export default function Store({data}) {
    const [id,setId] = useState(0);
    const [flag,setFlag] = useState(false);
    const [storeData,setStoreData] = useState([]);
    console.log(id);
    const popupStore = (id) => {
        console.log(id);
        setId(id);
    }

    useEffect(() => {
        (async()=>{
            setStoreData(data);
        })();
    },[]);
    return(
        <div>
            {!storeData && <h1>Now Loading...</h1>}
            <div className="card-flex mini">
                <Row gutter={[16, 24]}>
                    {storeData?.map((store)=>{return(
                        <StoreBlock key={store.id} props={store} onClick={popupStore}></StoreBlock>
                    )})}
                </Row>
            </div>
            {id !=0 ?<StoreModal setId={setId} id={id}/>:null}
            <style jsx>
                {`
                    .card-flex.mini {
                        margin: 24px auto;
                        width: 1024px;
                        flex-wrap: wrap;
                        display: flex;
                        justify-content: center;
                    }
                `}
            </style>
        </div>
    )
}

//백엔드 서버에서만 움직임
export async function getServerSideProps(){
    const data = await (
        await fetch(`http://localhost:9000/stores`)
    ).json();
    console.log(data)
    return {
        props:{
            data,
        }
    }
}