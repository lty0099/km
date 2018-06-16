
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button, Spin, Form, Input, Table } from 'antd'
import {
  fetchHouseCheckList,
} from 'actions/house'

if (process.env.NODE_ENV === 'development') {
  console.log('development')
}

const FormItem = Form.Item

@Form.create({})

@connect((state, props) => ({
    config: state.config,
    houseCheckSearchResult: state.houseCheckSearchResult,
  }),)
export default class app extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {

      },
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchHouseCheckList({ currentPage: 1 }, (respose) => {}))
  }


  columns() {
    return [
      {
        title: '序号',
        key: 'index',
        width: '5%',
        render: (text, recordId, index) => <span>{index + 1}</span>,
      },
      {
        title: '账号',
        dataIndex: 'name',
        key: 'name',
        width: '25%',
      },
      // {
      //   title: '操作',
      //   key: 'operate',
      //   // fixed: 'right',
      //   width: '10%',
      //   render: function (text, record, index) {
      //     return (
      //       <span>
      //         <Button type="primary" size="small">
      //           <Link to={`/houseDetail/${text.id}`}>查看</Link>
      //         </Button>
      //       </span>
      //     )
      //   },
      // },
    ]
  }

  tableData() {
    return this.props.houseCheckSearchQuery.list
  }

  render() {
    const { houseCheckSearchResult, form } = this.props
    const { getFieldDecorator } = form
    // console.log(houseCheckSearchResult)
    return (
      <div className="page">
        <Spin spinning={houseCheckSearchResult.loading}>
          <Table
            rowKey="id"
            dataSource={houseCheckSearchResult.list}
            columns={this.columns()}
            pagination={{ total: houseCheckSearchResult.totalCount, pageSize: houseCheckSearchResult.pageSize }}
            scroll={{ y: true }}
            rowClassName={(record, index) => (record.id === 1 ? 'red' : 'base')}
          />
        </Spin>
      </div>
    )
  }
}
