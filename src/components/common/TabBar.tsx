import Tab from './Tab';

export interface ITabType {
  label: string;
  path: string;
}

interface ITabProps {
  tabs: ITabType[] | undefined;
}

const TabBar: React.FC<ITabProps> = ({ tabs }: ITabProps) => {
  return (
    <div className='flex'>
      {tabs?.map((tab, idx) => (
        <Tab key={idx} label={tab.label} path={tab.path} />
      ))}
    </div>
  );
};

export default TabBar;
