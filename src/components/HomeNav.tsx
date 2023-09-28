import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ProgramDetails from './ProgramDetails';
import ApplicationForm from './ApplicationForm';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Program Details',
    children: <ProgramDetails />,
  },
  {
    key: '2',
    label: 'Application Form',
    children: <ApplicationForm />,
  },
  {
    key: '3',
    label: 'Workflow',
    children: 'Workflow',
  },
  {
    key: '4',
    label: 'Preview',
    children: 'Preview',
  },
];

const HomeNav: React.FC = () => <Tabs defaultActiveKey="1"  items={items} onChange={onChange}  />;

export default HomeNav;