import Modal from "antd/lib/modal/Modal";
import { useEffect, useState } from "react";

export default  function StoreModal({id}) {
    console.log(id)
    const [visible,setVisible] = useState(false);
    const [data,setData] = useState([]);
    useEffect(() => {
        (async()=>{
            if( id == 0 )return;
            const data = await (
                await fetch(`http://localhost:9000/stores/${id}`)
            ).json();
            console.log(data);
            setData(data);
            setVisible(true);
        })();
    },[id]);
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    }
    return(
        <Modal
        title="Title"
        visible={visible}
        onCancel={handleCancel}>
        <p>{data.name}</p>
        </Modal>
    )
}
