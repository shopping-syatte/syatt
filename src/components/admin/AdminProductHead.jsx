import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons'
import { useSelectedContext } from '../../context/SelectedContext';

export default function AdminProductHead() {
  const { setCategory, setSection } = useSelectedContext();

  const headList = [
    '제품이미지',
    '상품명',
    '카테고리',
    '가격',
    '분류',
    '수정',
    '삭제',
  ];

  const categoryMenu = [
    {
      label: (
        <div>
          온라인강의
        </div>
      ),
      key: '온라인강의',
    },
    {
      label: (
        <div>
          여성상의
        </div>
      ),
      key: '여성상의',
    }
  ];

  const classificationMenu = [
    {
      label: (
        <div>
          기초포페인팅
        </div>
      ),
      key: '기초포페인팅',
    },
    {
      label: (
        <div>
          메탈플러스터
        </div>
      ),
      key: '메탈플러스터',
    },
    {
      label: (
        <div>
          메탈페인트
        </div>
      ),
      key: '메탈페인트',
    },
    {
      label: (
        <div>
          메탈이펙트
        </div>
      ),
      key: '메탈이펙트',
    }
  ];

  const classifyCategory = (e) => {
    e.preventDefault();
    setCategory(e.key)
  }

  const classifySection = (e) => {
    e.preventDefault();
    setSection(e.key)
  }

  return (
    <div className="flex text-center py-2">
      {headList.map((headItem) => (
        <div className="w-32 cursor-pointer" key={headItem}>
          {headItem === '카테고리' ? (
            <Dropdown menu={{categoryMenu}}>
              <a onClick={classifyCategory}>
                {headItem} <DownOutlined />
              </a>
            </Dropdown>
          ) : headItem === '분류' ? (
            <Dropdown menu={{classificationMenu}}>
              <a onClick={classifySection}>
                {headItem} <DownOutlined />
              </a>
            </Dropdown>
          ) : (
            <div key={headItem}>{headItem}</div>
          )}
        </div>
      ))}
    </div>
  );
}
