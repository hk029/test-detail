import React from 'react';
import { Space, Table, Button, Tag } from 'antd';
import type { TableProps } from 'antd';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '模型名称',
    dataIndex: 'model',
    key: 'name',
    filters: [],
  },
  {
    title: '输入',
    dataIndex: 'input',
    key: 'input',
  },
  {
    title: '期望输出',
    dataIndex: 'except',
    key: 'except',
  },
 {
    title: '判断方式',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tag }) => (
        <Tag color={'green'} key={tag}>
          {tag.toUpperCase()}
        </Tag>
    ),
  },
 {
    title: '实际输出',
    dataIndex: 'output',
    key: 'output',
  },
 {
    title: '结果',
    dataIndex: 'result',
    key: 'result',
    render: (res) => res === 'passed' ? <CheckCircleTwoTone twoToneColor="#52c41a" />:<CloseCircleTwoTone twoToneColor="#eb2f96"/>
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type="link" disabled>更改结果</Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: '2024-01-03 17:31:36',
    model: 'gpt3.5-0613',
    input: '文本```赛博唱片主题，安卓的比IOS的大好多```',
    except: '黑胶播放器',
    output: '黑胶播放器',
    result: 'passed',
    tag: '匹配',

  },
  {
    key: '2',
    name: '2024-01-03 17:31:36',
    model: 'gpt3.5-0613',
    input: '文本```赛博唱片主题，安卓的比IOS的大好多```',
    except: '黑胶播放器',
    output: '黑胶播放器',
    result: 'passed',
    tag: '匹配',
  },
  {
    key: '3',
    name: '2024-01-03 17:31:36',
    model: 'gpt3.5-0613',
    input: '文本```赛博唱片主题，安卓的比IOS的大好多```',
    except: '黑胶播放器',
    output: '黑胶播放器',
    result: 'passed',
    tag: '匹配',
  },
  {
    key: '4',
    name: '2024-01-03 17:31:36',
    model: 'gpt3.5-0613',
    input: '文本```赛博唱片主题，安卓的比IOS的大好多```',
    except: '黑胶播放器',
    output: '黑胶播放器',
    result: 'passed',
    tag: '匹配',
  },
  {
    key: '5',
    name: '2024-01-03 17:31:36',
    model: 'gpt3.5-0613',
    input: '文本```赛博唱片主题，安卓的比IOS的大好多```',
    except: '黑胶播放器',
    output: '唱片',
    result: 'passed1',
    tag: '匹配',
  },
];

const App: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;

export default App;