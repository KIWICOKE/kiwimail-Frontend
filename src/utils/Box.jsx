export const Box = ({ name, ph, onChange }) => {
  return (
    <div>
      <input value={name} placeholder={ph} onChange={onChange}></input>
    </div>
  );
};
