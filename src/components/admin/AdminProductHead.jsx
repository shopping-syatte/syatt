import { Dropdown, Menu } from 'antd';

export default function AdminProductHead() {
  const headList = [
    '제품이미지',
    '상품명',
    '카테고리',
    '가격',
    '분류',
    '수정',
    '삭제',
  ];

  const categoryMenu = (
    <Menu>
      <Menu.Item key="online">온라인강의</Menu.Item>
      <Menu.Item key="womens-clothing">여성상의</Menu.Item>
    </Menu>
  );

  const classificationMenu = (
    <Menu>
      <Menu.Item key="basic-painting">기초포페인팅</Menu.Item>
      <Menu.Item key="metal-plaster">메탈플라스터</Menu.Item>
      <Menu.Item key="metal-paint">메탈페인트</Menu.Item>
      <Menu.Item key="metal-effect">메탈이펙트</Menu.Item>
    </Menu>
  );

  return (
    <div className="flex text-center py-2">
      {headList.map((headItem) => (
        <div className="w-32 cursor-pointer" key={headItem}>
          {headItem === '카테고리' ? (
            <Dropdown overlay={categoryMenu} trigger={['click']}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                {headItem} ▼
              </a>
            </Dropdown>
          ) : headItem === '분류' ? (
            <Dropdown overlay={classificationMenu} trigger={['click']}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                {headItem} ▼
              </a>
            </Dropdown>
          ) : (
            headItem
          )}
        </div>
      ))}
    </div>
  );
}
