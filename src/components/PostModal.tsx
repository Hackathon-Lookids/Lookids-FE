import { PATH_URL, TABS } from '../utils/constants';
import { IProps } from './common/Header';
import { IoArrowBack } from 'react-icons/io5';
import { CiImageOff } from 'react-icons/ci';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLocation } from 'react-router-dom';
import PostModalRadioBtn from './common/PostModalRadioBtn';
import { addLookPost } from '../apis/postsApis';
import { useMutation } from 'react-query';

interface IValues {
  type: string;
  title: string;
  content: string;
}

const PostModal: React.FC<IProps> = ({ onClick }: IProps) => {
  const location = useLocation();
  const [previewImgSrc, setPreviewImgSrc] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [values, setValues] = useState<IValues>({
    type: '',
    title: '',
    content: ''
  });

  const addPostMutation = useMutation(addLookPost, {
    onSuccess: (response) => {
      console.log('success====> ', response);
    },
    onError: (error) => {
      console.log('error====> ', error);
    }
  });

  const onChangeFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imgList = e.target.files;
    let imgUrlList: string[] = [...previewImgSrc];
    const imgFiles: File[] = [...files];

    if (!imgList) {
      return;
    }

    for (let i = 0; i < imgList.length; i++) {
      const currentImgUrl = URL.createObjectURL(imgList[i]);
      const currentImgFile = imgList[i];
      imgUrlList.push(currentImgUrl);
      imgFiles.push(currentImgFile);
    }

    if (imgUrlList.length > 3) {
      alert('3개만!!!');
      imgUrlList = imgUrlList.slice(0, 3);
    }

    setPreviewImgSrc(imgUrlList);
    setFiles(imgFiles);
  };

  const onChangeValueHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      lookType: values.type,
      title: values.title,
      content: values.content
    };

    const formData = new FormData();
    const dataString = JSON.stringify(data);
    formData.append(
      'look',
      new Blob([dataString], { type: 'application/json' })
    );

    files.forEach((file) => {
      console.log('dfla ', file);
      // const fileBlob = new Blob([JSON.stringify(file)], { type: file.type });
      formData.append('imageFile', file);
    });

    addPostMutation.mutate(formData);
  };

  return (
    <div>
      <div className='w-[376px] h-[668px] rounded-md p-5 flex flex-col justify-between'>
        <button onClick={onClick} className='w-7 h-7 text-lg'>
          <IoArrowBack />
        </button>

        <form
          className='h-[95%] flex flex-col justify-between'
          onSubmit={onSubmitHandler}
        >
          {(location.pathname === PATH_URL.LOOK.KIDS && (
            <PostModalRadioBtn
              onChange={onChangeValueHandler}
              TYPETABS={TABS.LOOKTABS}
            />
          )) ||
            (location.pathname === PATH_URL.LOOK.FAMILY && (
              <PostModalRadioBtn
                onChange={onChangeValueHandler}
                TYPETABS={TABS.LOOKTABS}
              />
            )) ||
            (location.pathname === PATH_URL.NEARBY && (
              <PostModalRadioBtn
                onChange={onChangeValueHandler}
                TYPETABS={TABS.NEARBYTABS}
              />
            )) ||
            (location.pathname === PATH_URL.STUDIO.MODEL && (
              <PostModalRadioBtn
                onChange={onChangeValueHandler}
                TYPETABS={TABS.STUDIOTABS}
              />
            )) ||
            (location.pathname === PATH_URL.STUDIO.RENT && (
              <PostModalRadioBtn
                onChange={onChangeValueHandler}
                TYPETABS={TABS.STUDIOTABS}
              />
            ))}

          <div className='flex justify-end'>
            <input
              name='imgUpload'
              id='imgUpload'
              type='file'
              className='hidden'
              accept='image/*'
              multiple
              onChange={onChangeFileHandler}
            />
            <label
              htmlFor='imgUpload'
              className='w-28 h-7 flex justify-center items-center cursor-pointer border border-gray-400 rounded-lg bg-white font-semibold text-sm'
            >
              사진 올리기
            </label>
          </div>

          <div
            className={`w-full h-56 border border-gray-200 rounded-lg bg-gray-200 ${
              previewImgSrc.length === 0 && 'flex flex-col items-center'
            }`}
          >
            {previewImgSrc.length === 0 ? (
              <CiImageOff className='h-full text-5xl text-gray-500' />
            ) : (
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className='mySwiper'
              >
                {previewImgSrc.map((img, idx) => {
                  return (
                    <SwiperSlide key={idx} className='mySwiper'>
                      <img src={img} alt='' />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </div>

          <div>
            <input
              className='w-full dark:bg-gray-200 rounded-xl p-2 px-4 placeholder:text-gray-500 placeholder:text-xs placeholder:font-semibold text-sm'
              type='text'
              placeholder='제목'
              maxLength={30}
              name='title'
              onChange={onChangeValueHandler}
              value={values.title}
            />
          </div>

          <div>
            <textarea
              className='w-full h-[160px] dark:bg-gray-200 rounded-xl p-2 px-4 pt-3 placeholder:text-gray-500 placeholder:text-xs placeholder:font-semibold text-sm'
              placeholder='내용'
              maxLength={150}
              name='content'
              onChange={onChangeValueHandler}
              value={values.content}
            />
          </div>

          <div>
            <button className='w-full bg-black p-2 rounded-xl text-sm text-white'>
              글 작성
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
