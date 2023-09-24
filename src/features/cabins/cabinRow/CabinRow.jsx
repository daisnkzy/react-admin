import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteCabins } from '../../../services/apiCarbins';
// import CabinForm from '../cabinForm/cabinForm';

import './cabinRow.scss';

const CabinRow = ({ cabin }) => {
  const [showForm, setShowForm] = useState(false);

  const queryClient = useQueryClient();
  const { isLoading, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabins,
    onSuccess: () => {
      console.log('删除成功');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  return (
    <>
      <div className="table-row">
        <img src={cabin.image} alt="" className="cabin-img" />
        <div className="cabin-name">{cabin.name}</div>
        <div>
          最多可入住<b>{cabin.maxCapacity}</b>人
        </div>
        <div className="cabin-price">¥{cabin.regularPrice}</div>
        <div className="cabin-discount">¥{cabin.discount}</div>

        <div className="btn-group">
          <button onClick={() => setShowForm(!showForm)} disabled={isLoading}>
            编辑
          </button>
          <button onClick={() => deleteCabin(cabin.id)} disabled={isLoading}>
            删除
          </button>
        </div>
      </div>
      {/* {showForm && <CabinForm cabin={cabin} />} */}
    </>
  );
};

export default CabinRow;
