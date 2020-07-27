/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { DataSearch, ReactiveList, SelectedFilters, DateRange, RangeSlider } from '@appbaseio/reactivesearch';
import styled from 'styled-components';
import ItemsList from './ItemsList';
import ListTitle from './ListTitle';
import NoResultsMessage from './NoResultsMessage';

const BoxContainer = styled.div`
  display: grid;
  grid-column-gap: 80px;
  grid-row-gap: 15px;
  grid-template-columns: 1fr 450px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FiltersContainer = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 15px;
  margin-bottom: 10px;
  grid-template-columns: 1fr;
`;

const ResultsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ListContainer = styled.div``;

const Query = styled.strong`
`;

const ResultsData = styled.p`
  margin: 10px;
  color: #768196;
`;

const SearchGroup = (props) => {
  // const defaultQuery = (index) => {
  //   return {
  //     query: {
  //       term: {
  //         _index: index || 'users', //"the individual index for this result"
  //       },
  //     },
  //   };
  // };

  // const customQuery = (query) => {
  //   console.log(query);
  //   return {
  //     query: {
  //       term: {
  //         isActive: true,
  //       },
  //     },
  //   };
  // };

  const defaultQuery = (index) => {
    return {
      query: {
        bool: {
          must: [
            {
              term: {
                _index: index || 'users', //"the individual index for this result"
              },
            },
            {
              term: {
                isActive: true,
              },
            },
          ],
        },
      },
    };
  };

  const renderError = (error) => <NoResultsMessage text={`Error en el buscador: ${error}`} />;

  const renderResultStats = (stats) => {
    return (
      // `Mostrando ${stats.displayedResults} de un total de ${stats.numberOfResults} en ${stats.time} ms`
      <ResultsData>{'Coincidencias encontradas: '}<Query>{stats.numberOfResults}</Query></ResultsData>
    );
  };

  return (
    <>
      <BoxContainer>
        <div>
          <DataSearch
            componentId='BúsquedaDeTexto'
            placeholder='Buscar información...'
            dataField={['company', 'address', 'tags', 'name.firstName', 'name.lastName', 'email', 'description', 'sourceA', 'sourceB', 'conciliationName', 'dashboardName']}
            fieldWeights={[11, 4, 7, 10, 9, 8, 1, 2, 3, 5, 6]}
            searchInputId='NameSearch'
            iconPosition='right'
            showClear
            className='search-field'
            innerClass={{
              // title: 'search-title',
              input: 'search-box',
            }}
            queryFormat='or'
            debounce={100}
            highlight={true}
            renderError={(error) => renderError(error)}
          />
          <SelectedFilters
            showClearAll={true}
            className='selected-filters'
            clearAllLabel='Limpiar filtros'
          />
        </div>
        <FiltersContainer>
          <RangeSlider
            componentId='RangoDeEdad'
            dataField='age'
            title='Edad'
            range={{
              'start': 15,
              'end': 80,
            }}
            defaultValue={{
              'start': 30,
              'end': 50,
            }}
            rangeLabels={{
              'start': '15 años',
              'end': '80 años',
            }}
            // stepValue={5}
            // showHistogram={true}
            tooltipTrigger='hover'
          />
          <DateRange
            className='date-field'
            componentId='FechaDeRegistro'
            dataField='timestamp.createdAt'
            title='Fecha de Registro'
            defaultValue={{
              start: new Date('2016-01-01'),
              end: new Date('2019-12-31'),
            }}
            placeholder={{
              start: 'Desde',
              end: 'Hasta',
            }}
          />
        </FiltersContainer>
      </BoxContainer>

      <ResultsContainer>
        <ListContainer>
          <ListTitle title='Usuarios' />
          <ReactiveList
            componentId='queryUsersResult'
            dataField='company' //{['company', 'name.firstName', 'name.lastName', 'email', 'address', 'age']}//'company'
            from={0}
            size={4}
            pages={5}
            pagination={true}
            className='result-cards'
            renderItem={(item) => ItemsList(item, 'user')}
            defaultQuery={() => defaultQuery('users')}
            renderError={(error) => renderError(error)}
            renderNoResults={() => <NoResultsMessage />}
            renderResultStats={renderResultStats}
            // customQuery={customQuery}
            react={{
              'and': ['BúsquedaDeTexto', 'RangoDeEdad'],
            }}
            // renderPagination={(pagination) => renderPagination(pagination)}
          />
        </ListContainer>
        <ListContainer>
          <ListTitle title='Fuentes' />
          <ReactiveList
            componentId='querySourcesResult'
            dataField='company' //{['company', 'address', 'description', 'timestamp.createdAt']}
            from={0}
            size={4}
            pages={5}
            pagination={true}
            className='result-cards'
            renderItem={(item) => ItemsList(item, 'source')}
            defaultQuery={() => defaultQuery('sources')}
            renderError={(error) => renderError(error)}
            renderNoResults={() => <NoResultsMessage />}
            renderResultStats={renderResultStats}
            react={{
              'and': ['BúsquedaDeTexto', 'FechaDeRegistro'],
            }}
          />
        </ListContainer>
        <ListContainer>
          <ListTitle title='Tableros' />
          <ReactiveList
            componentId='queryBoardsResult'
            dataField='company' //{['company', 'address', 'description', 'timestamp.createdAt']}
            from={0}
            size={5}
            pages={5}
            pagination={true}
            className='result-cards'
            renderItem={(item) => ItemsList(item, 'board')}
            defaultQuery={() => defaultQuery('boards')}
            renderError={(error) => renderError(error)}
            renderNoResults={() => <NoResultsMessage />}
            renderResultStats={renderResultStats}
            react={{
              'and': ['BúsquedaDeTexto', 'FechaDeRegistro'],
            }}
          />
        </ListContainer>
        <ListContainer>
          <ListTitle title='Conciliaciones' />
          <ReactiveList
            componentId='queryReconciliationsResult'
            dataField='company' //{['company', 'address', 'description', 'timestamp.createdAt']}
            from={0}
            size={4}
            pages={5}
            pagination={true}
            className='result-cards'
            renderItem={(item) => ItemsList(item, 'reconciliation')}
            defaultQuery={() => defaultQuery('reconciliations')}
            renderError={(error) => renderError(error)}
            renderNoResults={() => <NoResultsMessage />}
            renderResultStats={renderResultStats}
            react={{
              'and': ['BúsquedaDeTexto', 'FechaDeRegistro'],
            }}
          />
        </ListContainer>
      </ResultsContainer>
    </>
  );
};

export default SearchGroup;
