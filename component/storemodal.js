import Modal from "antd/lib/modal/Modal";
import css from "../styles/modal.module.css"
import styled from 'styled-components'
import { useEffect, useState } from "react";

// const ModalWrapper = styled(Modal)`
//     .ant-modal {
//         width: 90vw !important;
//         height: 80vh !important;
//     }
//     .ant-modal-content {
//         height: 80vh !important;
//     }
//     .ant-modal-header {
//         display: none !important;
//     }
//     .ant-modal-footer {
//         display: none !important;
//     }
// `;
const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.id !=0 ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.id !=0 ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

const ModalCloseButton =styled.div`
    width:100%;
    display: flex;
    justify-content: flex-end;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 90vw;
  height:80vh;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;

`

const ModalContentWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
`
const ModalImageSection = styled.div`
    width:50%;
    height:100%;
    display:flex;
`
const ModalContentSection = styled.div`
    flex-direction: column;
    width:50%;
    height:100%;
    display:flex;
    padding:20px 20px 50px 20px;
`
const ModalContentArea = styled.div`
    display:flex;
    flex-direction: column;
    height:100%;
    justify-content:space-between;
`
const ModalStoreName = styled.div`
    font-size:2em;
    font-weight:bold;
`
const ModalDescription = styled.div`
    width:80%;
    white-space:pre-wrap;
    font-size:1em;
`
export default  function StoreModal({id,setId}) {
    console.log(id)
    const [visible,setVisible] = useState(false);
    const [data,setData] = useState([]);
    console.log(data);
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
        setId(0);
        setVisible(false);
    }
    // return(
    //     <ModalWrapper
    //     title="Title"
    //     visible={visible}
    //     onCancel={handleCancel}>
    //     <p>{data.name}</p>
    //     </ModalWrapper>
    // )
    return (
        <>
          <ModalOverlay visible={visible} />
          <ModalWrapper  tabIndex="-1" visible={visible}>
            <ModalInner tabIndex="0" className="modal-inner">
                <ModalContentWrapper>
                    <ModalImageSection>
                        <img src={data.image} className={css.img}/>
                    </ModalImageSection>
                    <ModalContentSection>
                        <ModalCloseButton onClick={()=>{handleCancel()}}>
                            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M16.0005 14.1147L22.6005 7.51465L24.4858 9.39998L17.8858 16L24.4858 22.6L22.6005 24.4853L16.0005 17.8853L9.40047 24.4853L7.51514 22.6L14.1151 16L7.51514 9.39998L9.40047 7.51465L16.0005 14.1147Z"></path>
                            </svg>
                        </ModalCloseButton>
                        <ModalContentArea>
                            <ModalStoreName>
                                {data.name}
                            </ModalStoreName>
                            <ModalDescription>
                                {data.description}
                            </ModalDescription>
                        </ModalContentArea>
                    </ModalContentSection>
                </ModalContentWrapper>
                
            </ModalInner>
          </ModalWrapper>
        </>
      )
}
