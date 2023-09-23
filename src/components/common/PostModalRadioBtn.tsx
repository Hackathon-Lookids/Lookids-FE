interface IPropsType {
  id: string;
  label: string;
  path: string;
}

interface IPropsTypeArray {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  TYPETABS: IPropsType[];
}

const PostModalRadioBtn: React.FC<IPropsTypeArray> = ({
  onChange,
  TYPETABS
}: IPropsTypeArray) => {
  return (
    <div className='w-1/2 flex justify-between'>
      {TYPETABS.map((radio, idx) => {
        return (
          <div key={idx}>
            <input
              className=' cursor-pointer mr-2'
              type='radio'
              name='type'
              id={radio.id}
              onChange={onChange}
              value={radio.id}
            />
            <label
              className='cursor-pointer text-sm '
              htmlFor={radio.id}
              id={radio.id}
            >
              {radio.label}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default PostModalRadioBtn;
