import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import './cabinForm.scss';
import { createCabins, editCabins } from '../../../services/apiCarbins';

const CabinForm = ({ cabin = {} }) => {
  const { id: editId, ...editValues } = cabin;
  const isEdit = Boolean(editId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: isEdit ? editValues : {} });

  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createCabins,
    onSuccess: () => {
      console.log('创建成功');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
      reset();
    },
    onError: (err) => {
      console.log(err.message);
    },
  });
  const { isLoading: isEditting, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabin, id }) => editCabins(newCabin, id),
    onSuccess: () => {
      console.log('更新成功！');
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  const onSubmit = (data) => {
    if (isEdit)
      editCabin(
        { newCabin: { ...data, image: data.image }, id: editId },
        {
          onSuccess: () => {
            reset();
          },
        }
      );
    else
      createCabin(
        { ...data, image: data.image[0] },
        {
          onSuccess: () => {
            reset();
          },
        }
      );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="房间号" error={errors?.name?.message}>
        <input
          disabled={isEditting}
          type="text"
          id="name"
          {...register('name', {
            required: '房号不能为空！',
          })}
        />
      </FormRow>

      <FormRow label="人数" error={errors?.maxCapacity?.message}>
        <input
          disabled={isEditting}
          type="number"
          id="maxCapacity"
          {...register('maxCapacity', {
            required: '不能为空！',
            min: {
              value: 1,
              message: '至少大于等于1人',
            },
          })}
        />
      </FormRow>

      <FormRow label="价格" error={errors?.regularPrice?.message}>
        <input
          disabled={isEditting}
          type="number"
          id="regularPrice"
          {...register('regularPrice', {
            required: '不能为空！',
          })}
        />
      </FormRow>

      <FormRow label="折扣价" error={errors?.discount?.message}>
        <input
          disabled={isEditting}
          type="number"
          id="discount"
          {...register('discount', {
            required: '不能为空！',
          })}
        />
      </FormRow>

      <FormRow label="描述" error={errors?.description?.message}>
        <input
          disabled={isEditting}
          type="text"
          id="description"
          {...register('description', {
            required: '不能为空！',
          })}
        />
      </FormRow>

      <FormRow label="图片" error={errors?.image?.message}>
        <input
          disabled={isEditting}
          type="file"
          id="image"
          accept="image/*"
          {...register('image', { required: true })}
        />
      </FormRow>

      <div className="btn-group">
        <button type="reset">重置</button>
        <button type="submit" disabled={isCreating}>
          确认
        </button>
      </div>
    </form>
  );
};

export default CabinForm;

const FormRow = ({ label, error, children }) => {
  return (
    <div className="form-row">
      <label htmlFor={children.props.id}>{label}</label>
      {children}
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};
