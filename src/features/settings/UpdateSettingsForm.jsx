import { useSettings } from './useSettings';
import { useUpdateSettings } from './useUpdateSettings';

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      maxBookingLength,
      minBookingLength,
      maxGuestsPerBook,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { isUpdatting, updateSetting } = useUpdateSettings();

  function handleUpdate(e, field) {
    //这里是解构，不是赋值value！
    const { value } = e.target;
    if (!value) return;
    //update前检查supabase有没有给权限
    updateSetting({ [field]: value });
  }
  if (isLoading) return <h1 className="row-center">Loading...</h1>;
  return (
    <form>
      <FormRow label="最少入住天数">
        <input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, 'minBookingLength')}
          disabled={isUpdatting}
        />
      </FormRow>
      <FormRow label="最多入住天数">
        <input type="number" id="max-nights" defaultValue={maxBookingLength} />
      </FormRow>
      <FormRow label="最多入住客人数">
        <input type="number" id="max-guests" defaultValue={maxGuestsPerBook} />
      </FormRow>
      <FormRow label="早餐价格">
        <input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
        />
      </FormRow>
    </form>
  );
}

export default UpdateSettingsForm;

const FormRow = ({ label, error, children }) => {
  return (
    <div className="form-row">
      <label htmlFor={children.props.id}>{label}</label>
      {children}
      {error && <span>{error}</span>}
    </div>
  );
};
