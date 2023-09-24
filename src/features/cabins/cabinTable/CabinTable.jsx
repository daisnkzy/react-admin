import { useQuery, useQueryClient } from '@tanstack/react-query';

import { getCabins } from '../../../services/apiCarbins';
import CabinRow from '../cabinRow/CabinRow';

import './cabinTable.scss';
const CabinTable = () => {
  //3,如果不mutate则不需要这一步
  const queryClient = useQueryClient();
  //4 查
  const { isLoading, data: cabins } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  if (isLoading) return <h2 className="loading">Loading...</h2>;
  return (
    <div className="table">
      <header className="table-header">
        <div></div>
        <div>房号</div>
        <div>人数</div>
        <div>价格</div>
        <div>折扣</div>
        <div></div>
      </header>
      <section className="row-vertical">
        {cabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </section>
    </div>
  );
};

export default CabinTable;
