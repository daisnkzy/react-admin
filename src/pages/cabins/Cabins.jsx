import React, { useState } from 'react';

import CabinForm from '../../features/cabins/cabinForm/cabinForm';
import CabinTable from '../../features/cabins/cabinTable/CabinTable';

const Cabins = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="row-horizontal">
        <h2>所有房间</h2>
      </div>
      <div className="row-vertical">
        <CabinTable />
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? '关闭' : '添加房间'}
        </button>
        {/* {showForm && <CabinForm />} */}
      </div>
    </>
  );
};

export default Cabins;
