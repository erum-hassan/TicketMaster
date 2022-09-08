import { useState } from 'react';
import { Layout, Space, Button, Input, Typography, Tabs, Icon, Card } from 'antd';
import { BarChartOutlined, SearchOutlined, FilterOutlined ,PlusOutlined,AlignCenterOutlined} from '@ant-design/icons'
import { Bar, PolarArea, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, CategoryScale, LinearScale, BarElement, RadialLinearScale, ArcElement } from 'chart.js'
ChartJS.register(
    CategoryScale, LinearScale, BarElement, RadialLinearScale, ArcElement
)


export default function Dashboard() {


    const { Header, Footer, Sider, Content } = Layout;
    const { Title } = Typography;
    const { TabPane } = Tabs;






    return (
        <>
            <div>
                <Layout style={{ height: "150vh" }}>
                    <Sider width={80}>
                        <Space style={{ marginTop: "100px"  }} direction="vertical">
                            < BarChartOutlined style={{ fontSize: '40px', color: '#FFFFFF',marginBottom:'20px' }} />
                            < PlusOutlined  style={{ fontSize: '40px', color: '#FFFFFF',marginBottom:'20px' }} />
                            < AlignCenterOutlined   style={{ fontSize: '40px', color: '#FFFFFF',marginBottom:'20px' }} />
                        </Space>
                    </Sider>
                    <Layout>
                        <Header style={{ backgroundColor: '#FFFFFF' }}  >
                            <Button type="default" style={{ border: 'none', float: 'left', marginTop: '20px' }} >
                                <span>+ Add</span>
                            </Button>
                            <SearchOutlined style={{ float: 'right', marginTop: '20px', fontSize: '25px', color: "#808080", marginRight: "50px" }} />
                        </Header>
                        <Content >
                            <Space direction="vertical" style={{ float: "left" }}>
                                <Title level={2} style={{ float: 'left', marginTop: '20px', marginLeft: '50px' }}>Reporting</Title>

                                <Tabs style={{ float: "left", marginLeft: "50px" }} >

                                    <TabPane tab="Support" key="2">

                                    </TabPane>
                                    <TabPane tab="Guide" key="3">
                                        
                                    </TabPane>
                                    <TabPane tab="Chat" key="4">
                                        
                                    </TabPane>
                                    <TabPane tab="Talk" key="5">
                                        
                                    </TabPane>
                                    <TabPane tab="Knowledge Base" key="6">
                                        
                                    </TabPane>
                                    <TabPane tab="Search" key="7">
                                        
                                    </TabPane>
                                    <TabPane tab="Community" key="8">
                                       
                                    </TabPane>
                                </Tabs>
                            </Space>
                            <Space style={{ width: "170vh", height: "75vh" }} direction="vertical">
                                <Title style={{ float: "left", color: "#11545c" }}>Zendesk Support</Title>
                                <Tabs type="card" >
                                    <TabPane tab="Ticket" key="1">
                                        <Space direction='vertical' style={{ width: "170vh" }}>
                                            <Space style={{ float: "left",  }}>
                                                <Button>Time<FilterOutlined style={{ marginLeft: '80px' }} /></Button>
                                                <p style={{ float: "left", marginLeft: "20px", marginTop: "20px" }}>Currently viewing <b>17/8/2021--15/09/2021</b></p>
                                            </Space>
                                            <Space style={{ float: "left",  marginTop: "15px" }}>
                                                <Button style={{ marginRight: "50px", width: "180px" }}>Ticket Group</Button>
                                                <Button style={{ marginRight: "50px", width: "180px" }}>Ticket Brand</Button>
                                                <Button style={{ marginRight: "50px", width: "180px" }}>Ticket Channel</Button>
                                                <Button style={{ marginRight: "50px", width: "180px" }}>Ticket Form</Button>
                                                <Button style={{ marginRight: "50px", width: "180px" }}>Submitter Role</Button>
                                            </Space>
                                        </Space>
                                        <Space style={{ marginTop: "50px", float: "left" }}>
                                            <Card title="Created Tickets" style={{ width: 300 ,marginRight:"20px" }}>
                                                <Title level={2}>17 799</Title>
                                            </Card>
                                            <Card title="Unsolved Tickets" style={{ width: 300 ,marginRight:"20px"}}>
                                                <Title level={2}>5 250</Title>
                                            </Card>
                                            <Card title="Solved Tickets" style={{ width: 300 ,marginRight:"20px"}}>
                                                <Title level={2}>17 8529</Title>
                                            </Card>
                                            <Card title="One-Touched Tickets" style={{ width: 300 ,marginRight:"20px"}}>
                                                <Title level={2}>76%</Title>
                                            </Card>
                                            <Card title="Respond Tickets" style={{ width: 300,marginRight:"20px" }}>
                                                <Title level={2}>9.9%</Title>
                                            </Card>
                                        </Space>
                                        <Space style={{ marginTop: "50px", float: "left", marginLeft: "10px" }}>
                                            <Card style={{ width: 800,marginTop:"10px" }}>
                                                <p style={{ float: "left" }}>Ticket Created by hour</p>
                                                <Bar
                                                    data={{
                                                        labels: ['1', '2,', '3', '4', '5', '6', '7', '8', '9', '10'],
                                                        datasets: [{
                                                            data: [100, 200, , 300, 400, 500, 600, 700, 800, 900, 100],
                                                            backgroundColor: '#78a303',
                                                            barThickness: 15
                                                        }]
                                                    }}

                                                />



                                            </Card>
                                            <Card style={{ width: 800 }}>

                                                <Pie style={{ height: 400 }} data={{
                                                    labels: ["Italy", "France", "Spain", "USA", "Argentina"],
                                                    datasets: [{
                                                        data: [100, 200, , 300, 400, 500, 600, 700, 800, 900, 100],
                                                        backgroundColor: '#10535e'

                                                    }]
                                                }}
                                                    options={
                                                        { maintainAspectRatio: false }
                                                    }


                                                />

                                            </Card>
                                        </Space>



                                    </TabPane>
                                    <TabPane tab="Efficiency" key="2">
                                        Content of Tab Pane 2
                                    </TabPane>
                                    <TabPane tab="Assigniee activity" key="3">
                                        Content of Tab Pane 3
                                    </TabPane>
                                </Tabs>
                            </Space>


                        </Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </>
    )
}