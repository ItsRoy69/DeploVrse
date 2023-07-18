import styled from "styled-components";
import Link from "next/link";
import React from "react";
const ProductWrapper = styled.div`
  
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size:.9rem;
  color:inherit;
  text-decoration:none;
  margin:0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;


export default function ProductBox({_id,title,images}) {

   
  const url = '/product/'+_id;
  const fileExtension = images?.[0]?.split('.').pop();
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
      <div>
          {fileExtension === 'glb' && 
          <model-viewer
                  src={images?.[0]}
                  alt="A 3D model"
                  camera-controls
                  // interaction-prompt="none"
                ></model-viewer>}
          <img src={images?.[0]} alt=""/>
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>        
      </ProductInfoBox>
    </ProductWrapper>
  );
}