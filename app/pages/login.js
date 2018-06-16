
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory, Link } from 'react-router'
import { Spin, message, Form, Icon, Input, Button, Row, Col } from 'antd'
import { fetchLogin, userInfo } from 'actions/common'

const FormItem = Form.Item

@connect((state, props) => ({
  config: state.config,
  loginResponse: state.tabListResult,
}))
@Form.create({
  onFieldsChange(props, items) {
    // console.log(items)
    // props.cacheSearch(items);
  },
})

export default class Login extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    // this.handleChange = this.handleChange.bind(this)
    this.checkPass = this.checkPass.bind(this)
    this.checkName = this.checkName.bind(this)
    this.noop = this.noop.bind(this)
  }

  handleLoginSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log(values)
        Object.keys(values).map(key => values[key] = (values[key] && values[key].trim()))
        this.props.dispatch(fetchLogin(values, (res) => {
          message.success(res.message)
          sessionStorage.setItem('username', values.username)
          // this.props.dispatch(userInfo(values, (response) => {
          //   // sessionStorage.setItem('token', response.data.token)
          //   hashHistory.push('/')
          // }, (response) => {
          //   message.warning(response)
          // }))
        }, (res) => {
          // console.log(res)
          message.warning(res.msg)
          this.setState({
            loading: false,
          })
        }))
        // sessionStorage.setItem('token', 'dupi')
        hashHistory.push('/')
      }
    })
  }

  // handleChange(e) {
  //   const newState = {}
  //   newState[e.target.name] = e.target.value
  //   this.setState(newState)
  // }

  // 组件已经加载到dom中
  componentDidMount() {
    // this.props.dispatch(fetchLogin({ currentPage: 1 }))
  }

  checkName = (rule, value, callback) => {
    // const { validateFields } = this.props.form
    if (value) {
      // validateFields([''])
    }
    callback()
  }

  checkPass = (rule, value, callback) => {
    // const { validateFields } = this.props.form
    if (value) {
      // validateFields([''])
    }
    callback()
  }

  noop = () => false

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login">
        <div className="sy_top" />
        <div className="btmLogin">
          <div className="sy_bottom">
            <h1 id="PerformName">登录</h1>
            <Row className="ul-wrap">
              <Col span={24}>
                <Spin spinning={this.state.loading}>
                  <Form onSubmit={this.handleLoginSubmit}>
                    <FormItem hasFeedback>
                      {getFieldDecorator('username', {
                        rules: [{
                          type: 'email', message: '请输入有效的邮箱地址!',
                        }, {
                          required: true, message: '请输入邮箱地址!',
                        }],
                        // validateTrigger: 'onBlur',
                      })(<Input
                        prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                        placeholder="请输入邮箱"
                      />)}
                    </FormItem>
                    <FormItem hasFeedback>
                      {getFieldDecorator('password', {
                        rules: [
                          { required: true, message: '请输入密码' },
                        ],
                        // validateTrigger: 'onBlur',
                      })(<Input
                        prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                        placeholder="请输入密码"
                        type="password"
                      />)}

                    </FormItem>
                    <FormItem>
                      <Button type="primary" htmlType="submit">登录</Button>
                      <Link to="/register">注册</Link>
                    </FormItem>
                  </Form>
                </Spin>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}
