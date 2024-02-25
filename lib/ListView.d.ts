import React from 'react';
import type { ListProps, TableProps } from 'antd';
import type { GetRowKey } from 'antd/lib/table/interface';
import type { ActionType } from '@jetlinks/pro-table';
import type { GetComponentProps } from './index';
import type { ItemProps } from './Item';
declare type AntdListProps<RecordType> = Omit<ListProps<RecordType>, 'rowKey'>;
export declare type ListViewProps<RecordType> = Omit<AntdListProps<RecordType>, 'renderItem'> & Pick<TableProps<RecordType>, 'columns' | 'dataSource' | 'expandable'> & {
    rowKey?: string | GetRowKey<RecordType>;
    showActions?: 'hover' | 'always';
    showExtra?: 'hover' | 'always';
    rowSelection?: TableProps<RecordType>['rowSelection'];
    prefixCls: string;
    dataSource: readonly RecordType[];
    renderItem?: (item: RecordType, index: number, defaultDom: JSX.Element) => React.ReactNode;
    actionRef: React.MutableRefObject<ActionType | undefined>;
    onRow?: GetComponentProps<RecordType>;
    /** Render 除了 header 之后的代码 */
    itemHeaderRender?: ItemProps<RecordType>['itemHeaderRender'];
    itemTitleRender?: ItemProps<RecordType>['itemTitleRender'];
};
declare function ListView<RecordType>(props: ListViewProps<RecordType>): JSX.Element;
export default ListView;
