import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

export default function MyDropDown(List) {
  const items = [];

  for (let i = 0; i < List.length; i++) {
    List.map((x) => ({
      label: <div>{x}</div>,
      key: i,
    }));
  }

  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          카테고리
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}
