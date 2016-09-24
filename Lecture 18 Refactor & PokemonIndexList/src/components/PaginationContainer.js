import React from 'react';
import { Pagination, Col } from 'react-bootstrap/lib/';

const PaginationContainer = ({totalPages, btnSize, activePage, onSelect}) => {
  return (
    <Col sm={12} >
      {totalPages > 1 ?
      <Pagination bsSize={btnSize} items={totalPages} activePage={activePage} onSelect={onSelect} />
      : null }
    </Col>
  )
}

export default PaginationContainer;
