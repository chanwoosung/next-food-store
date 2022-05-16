import 'antd/dist/antd.css';
import css from '../styles/storeblock.module.css'
import { Col } from 'antd';
export default function StoreBlock({props,onClick}) {
    return(
        <Col className={css.gridBlock} span={3} onClick={()=>onClick(props.id)}>
            <img src={props.thumb} alt={props.name}/>
        </Col>
    )
}