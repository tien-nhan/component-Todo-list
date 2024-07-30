import { forwardRef } from "react";

const Form = ({ editID, onSubmit }, ref) => {
  return (
    <form onSubmit={onSubmit}>
      <input ref={ref} placeholder="rửa chén" />
      <button type="submit">{editID ? "Save" : "Add"}</button>
    </form>
  );
};
export default forwardRef(Form);
