import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Orders = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-main-dark-bg'>
      <Header category='Page' title='Orders' />
      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
        contextMenuItems={contextMenuItems}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            PdfExport,
            Edit,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;