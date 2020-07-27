/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { ReactiveList, ResultList } from '@appbaseio/reactivesearch';
import styled from 'styled-components';
import COLORS from 'Constants/colors';

import USER_ICON from '../assets/images/user.png';

const CardContainer = styled.div`
  @media (max-width: 468px) {
    width: 80%;
    overflow: auto;
  }
`;

const TagsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: min-content min-content min-content min-content min-content min-content min-content min-content;
  @media (max-width: 768px) {
    grid-template-columns: min-content min-content min-content;
  }
`;

const TagBadge = styled.div`
  color: #ffffff;
  padding-top: 0px;
  font-weight: 500;
  padding: 2px 10px;
  text-align: center;
  background: ${(props) => props.color || '#6d98ff'};
  border-radius: 15px;
`;

const ItemsList = (item, type) => {
  // console.log('item-->', item);
  // console.log('type-->', type);
  let component = <div />;
  switch (type) {
    case 'user':
      component = (
        <ReactiveList.ResultListWrapper key={item._id}>
          {/* {console.log(item.tags)} */}
          <CardContainer>
            <ResultList className='result-cards'>
              <ResultList.Image src={USER_ICON || item.picture} small />
              <ResultList.Content>
                <ResultList.Description>
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: `<strong>Edad:</strong> ${item.age}` }} />
                    <div dangerouslySetInnerHTML={{ __html: `<strong>Nombre:</strong> ${item.name.firstName} ${item.name.lastName}` }} />
                    <div dangerouslySetInnerHTML={{ __html: `<strong>Compañía:</strong> ${item.company}` }} />
                    <div dangerouslySetInnerHTML={{ __html: `<strong>Correo Electrónico:</strong> ${item.email}` }} />
                    <div dangerouslySetInnerHTML={{ __html: `<strong>Dirección:</strong> ${item.address}` }} />
                    <TagsContainer>
                      {
                        Array.isArray(item.tags) ?
                        item.tags.map((tag, index) => {
                          return <TagBadge key={`${item._id}_${index}_${tag}`} color={COLORS[Math.floor(Math.random() * 13)]} dangerouslySetInnerHTML={{ __html: tag }} />;
                        }) :
                        <TagBadge key={`${item._id}__${item.tags}`} color={COLORS[Math.floor(Math.random() * 13)]} dangerouslySetInnerHTML={{ __html: item.tags }} />
                      }
                    </TagsContainer>
                  </div>
                </ResultList.Description>
              </ResultList.Content>
            </ResultList>
          </CardContainer>
        </ReactiveList.ResultListWrapper>
      );
      break;

    case 'source':
      component = (
        <ReactiveList.ResultListWrapper key={item._id}>
          <CardContainer>
            <ResultList>
              <ResultList.Content>
                <ResultList.Description>
                  <div>
                    {/* <div dangerouslySetInnerHTML={{ __html: `<strong>Nombre:</strong> ${item.name}` }} /> */}
                    <div dangerouslySetInnerHTML={{ __html: `<strong>Compañía:</strong> ${item.company}` }} />
                    <div dangerouslySetInnerHTML={{ __html: `<strong>Fecha de Registro:</strong> ${item.timestamp.createdAt}` }} />
                    <div className='descriptions' dangerouslySetInnerHTML={{ __html: `<strong>Descripción:</strong> ${item.description}` }} />
                    <TagsContainer>
                      {
                        Array.isArray(item.tags) ?
                        item.tags.map((tag, index) => {
                          return <TagBadge key={`${item._id}_${index}_${tag}`} color={COLORS[Math.floor(Math.random() * 13)]} dangerouslySetInnerHTML={{ __html: tag }} />;
                        }) :
                        <TagBadge key={`${item._id}__${item.tags}`} color={COLORS[Math.floor(Math.random() * 13)]} dangerouslySetInnerHTML={{ __html: item.tags }} />
                      }
                    </TagsContainer>
                  </div>
                </ResultList.Description>
              </ResultList.Content>
            </ResultList>
          </CardContainer>
        </ReactiveList.ResultListWrapper>
      );
      break;

    default:
      console.log('Type not found!');
      break;
  }
  return component;
};

export default ItemsList;
