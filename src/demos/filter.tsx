import React from 'react';
import {Button, Tag, Space, Badge, Tooltip, message} from 'antd';
import ProList from '@ant-design/pro-list';
import request from 'umi-request';
import {
    CloseCircleOutlined,
    DownloadOutlined,
    EditOutlined,
    EyeOutlined,
    GoldOutlined, MinusOutlined,
    PlayCircleOutlined
} from "@ant-design/icons";

export type ProductItem = {
    id: string;
    name: string;
    classifiedId: string;
    classifiedName: string;
    configuration: Record<string, any>;
    createTime: number;
    creatorId: string;
    deviceType: {
        text: string,
        value: string
    },
    count?: number;
    messageProtocol: string;
    metadata: string;
    orgId: string;
    protocolName: string;
    state: number;
    transportProtocol: string;
}

request.interceptors.request.use((url, options) => ({
    options: {
        ...options,
        headers: {
            'X-Access-Token': 'a688358d5d1b48b6b7249ca01dd0cefe',
        },
        interceptors: true,
    },
}));
export const statusMap = {
    1: <Badge status="processing" text="已发布"/>,
    0: <Badge status="error" text="未发布"/>
}


export default () => (
    <ProList<ProductItem>
        toolBarRender={() => {
            return [
                <Button key="3" type="primary">
                    新建
                </Button>,
            ];
        }}
        search={{
            filterType: 'light',
        }}
        rowKey="name"
        headerTitle="基础列表"
        request={async (params = {}) =>
            request<{
                data: ProductItem[];
            }>('http://demo.jetlinks.cn:9010/device-product/_query/', {
                params,
            })
        }
        pagination={{
            pageSize: 5,
        }}
        showActions="hover"
        metas={{
            id: {
                dataIndex: 'id',
                title: 'ID'
            },
            title: {
                dataIndex: 'name',
                title: '名称',
            },
            avatar: {
                dataIndex: 'id',
                search: false,
            },
            description: {
                dataIndex: 'classifiedName',
                search: false,
            },
            subTitle: {
                dataIndex: 'state',
                render: (_, row) => (
                    <Space size={0}>
                        {statusMap[row.state]}
                    </Space>
                ),
                search: false,
            },
            content: {
                search: false,
                render: (_, row) => (
                    <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'flex-start',
                        }}
                    >
                        <div
                            style={{
                                width: 200,
                            }}
                        >

                            <div>ID</div>
                            {row.id}
                        </div>
                        <div
                            style={{
                                width: 200,
                            }}
                        >

                            <div>设备数量</div>
                            <Badge
                                showZero={true}
                                className="site-badge-count-109"
                                count={row.count}
                                style={{backgroundColor: '#52c41a'}}
                            />
                        </div>
                        <div
                            style={{
                                width: 200,
                            }}
                        >
                            <div>设备分类</div>
                            <Tag icon={<GoldOutlined/>} color="#55acee"> {row.deviceType.text}</Tag>
                        </div>
                    </div>
                )
            },
            actions: {
                render: (_, record) => [
                    <Tooltip title='查看'
                             key={"detail"}
                    >
                        <a
                            onClick={() => {
                                // productModel.current = record
                            }}
                            // to={`/device/product/detail/${record.id}`}
                            key="link">
                            <EyeOutlined/>
                        </a>
                    </Tooltip>,
                    <Tooltip title='编辑'
                             key={"edit"}>
                        <a key="warning">
                            <EditOutlined/>
                        </a>
                    </Tooltip>,

                    <Tooltip title='下载'
                             key={'download'}>
                        <a key="download">
                            <DownloadOutlined onClick={() => {
                                message.success("下载")
                            }}/>
                        </a>
                    </Tooltip>,
                    <Tooltip title='启用'
                             key={'state'}>
                        <a key="state">
                            {record.state ? <CloseCircleOutlined/> : <PlayCircleOutlined/>}
                        </a>
                    </Tooltip>,
                    <Tooltip title='删除'
                             key={'remove'}
                    >
                        <a key="delete">
                            <MinusOutlined/>
                        </a>
                    </Tooltip>
                ],
                search: false,
            },
            state: {
                // 自己扩展的字段，主要用于筛选，不在列表中显示
                title: '状态',
                valueType: 'select',
                valueEnum: {
                    all: {text: '全部', status: 'Default'},
                    0: {
                        text: '已发布',
                        status: 'Error',
                    },
                    1: {
                        text: '未发布',
                        status: 'Success',
                    }
                },
            },
        }}
    />
);
