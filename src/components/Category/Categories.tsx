import { Table, Input, Button, Space, Tag, Divider, Popconfirm } from 'antd';
import React, { useState, useRef } from 'react';
import Highlighter from 'react-highlight-words';
import {  useMutation, useQuery } from "@apollo/client";
import { connect } from "react-redux";
import { SearchOutlined, EditOutlined, DeleteOutlined, FileAddFilled } from '@ant-design/icons';
import EditCategory from './EditCategory';
import { DELETE_CATEGORY, GET_CATEGORIES } from '../../graphql/category';
import CreateCategory from './CreateCategory';
import { useTranslation } from 'react-i18next';
import Loading from '../Loading';
import { getLanguage } from '../../utils/getLanguage';


interface filterDropdownProps {
  setSelectedKeys: any, 
  selectedKeys: any,
  confirm: any,
  clearFilters: any
}
const Categories = ({ authUser }: any) => {

  let searchInput = useRef(null);
  
  const { privileges } = authUser;
  const { t } = useTranslation();
  
  const { data, loading, error } = useQuery(GET_CATEGORIES, {
    variables: {
      authUserId: null,
      skip: 0,
      limit: 0
    },
    
  
  });

  const categories = data&&data.getCategories.categories;


  const [DeleteCategoryMutation] = useMutation(DELETE_CATEGORY)
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [isShowEditCategory, setIsShowEditCategory] = useState(false);
  const [isShowCreateCategory, setIsShowCreateCategory] = useState(false);
  
  const [categoryInfo, setCategoryInfo] = useState({});

  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: filterDropdownProps) => {

      return(
        <div style={{ padding: 8 }}>
          <Input
            // ref={node => {
            //   searchInput = node;
            // }}
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      )
    },
    filterIcon: (filtered: any) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value: any, record: any) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible: boolean) => {

      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text: string) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();

    setSearchText('')
  };

  const toggleShowEditCategory = (visible: boolean) => {
    setIsShowEditCategory(visible);
}
const handleEditCategory = (record: object) => {
    toggleShowEditCategory(true);
    setCategoryInfo(record);
}

const toggleShowCreateCategory = (visible: boolean) => {
  setIsShowCreateCategory(visible);
}
const handleCreateCategory = (record: object) => {
  
   if(!privileges?.create) return false;

  toggleShowCreateCategory(true);
  setCategoryInfo(record);
}

const handleDeleteCategory = async (record: any) => {
   if(!privileges?.delete) return false;

   await DeleteCategoryMutation({
     variables: {
       input: {
         id: record?.id
       }
     },
     refetchQueries: [{
      query: GET_CATEGORIES,
      variables: {
        authUserId: null,
        skip: 0,
        limit: 0
      },
    }],
    awaitRefetchQueries: true
   })
}




    const columns = [
      // {
      //   title: t('p_id'),
      //   dataIndex: 'categoryId',
      //   key: 'categoryId',
      //   width: '15%',
     
      //   ...getColumnSearchProps('categoryId'),
      // },
      {
        title: t('p_name'),
        dataIndex: 'name',
        key: 'name',
   
        width: '20%',
        ...getColumnSearchProps('name'),
      },
      {
        title: "Creator",
        key: 'creator',
        width: '14%',
        render: (record: any) => (
          <span >
                {
                   <Tag  key={record?.id} color={'blue'}>
                      {record?.creator?.name}
                  </Tag>
                }
          </span>
          )
      },
      {
        title: t('p_intro'),
        dataIndex: 'introduction',
        key: 'introduction',
    
        width: '25%',
        ...getColumnSearchProps('introduction'),
      },
      {
        title: "Language",
        dataIndex: 'lang',
        key: 'lang',
        width: '25%',
        render: (lang: any) => {
      
          return (
            <span >
                  {
                     <Tag  key={"lang"} color={'blue'}>
                        {getLanguage(lang)}
                    </Tag>
                  }
            </span>
            )
        }
      },
      {
          title: `${(privileges?.create||privileges?.update||privileges?.delete)?'Action':''}`,
        key: 'action',
        render: ( record: any) => (
          <div>
                
                    {privileges?.update&&<span>
                      <EditOutlined />
                      <Tag  color={"blue"} 
                      onClick={() => handleEditCategory(record)}
                      >
                          <a>
                          Edit
                          </a>
                      </Tag>
                      </span>}
          
                    {privileges?.delete&&<span>
                      <Popconfirm title='Are you Sure to Delete？' 
                    onConfirm={() => handleDeleteCategory(record)} 
                    >
                    <a>
                    <span className='my-a'>
                        <Divider type='vertical' />
                        <DeleteOutlined />
                      
                            Delete
                    </span>
                    </a>
                   </Popconfirm>
                      </span>}
         
          </div>
        ),
      },
     
    ];

    if(loading || error) {
      return <Loading />
    }
         const checkPagination: any = categories?.length > 10;
     
    return <>

        {privileges?.create&&<Button
         type={'primary'}
         style={{
          margin: '1rem 0rem'
         }}
        onClick={handleCreateCategory}
        >
           <FileAddFilled />
            Create Category
        </Button>}



    <Table
    rowKey={'id'}
    scroll={{ x: 480 }}
    pagination={checkPagination}
    columns={columns} 
    dataSource={categories} />
  
     {!loading && <EditCategory visible={isShowEditCategory} categoryInfo={categoryInfo} toggleVisible={toggleShowEditCategory}  />}
    
     {!loading && <CreateCategory authUser={authUser} visible={isShowCreateCategory} categoryInfo={categoryInfo} toggleVisible={toggleShowCreateCategory} />}
    </>;
  
}

const MapStateToProps = ((state: any) => ({
  authUser: state?.auth?.user
}))

export default connect(MapStateToProps, {})(Categories);