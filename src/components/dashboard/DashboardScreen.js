import React from "react";
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import "../../Styles/App.css";
import ReactECharts from "echarts-for-react";

export const DashboardScreen = () => {
  const getDashboardData = async () => {
    console.log("Get Data");
    // const url = "https://localhost:7077/api/Clases/GetClases";

    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data);
  };

  getDashboardData();

  const option = {
    backgroundColor: '#2c343c',
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
          borderColor: '#2c343c',
          borderWidth: 1
        },      
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };

  return (
      <Container>
        <br />
        <Card>
          <Card.Header>Dashboard2</Card.Header>
          <Card.Body>
            <Card.Title>Card T33itle</Card.Title>
            <Card.Text>
              Some quick exampsdfsdfle text to build on the card title and make
              up the bulk of the sdf card's content..ffff
            </Card.Text>
            <Button variant="primary">Go somewhere33</Button>
          </Card.Body>
        </Card>
        <br />

        <Card style={{ height: '28rem' }}>
          <Card.Header>Dashboard</Card.Header>
          <Card.Body>
            <ReactECharts style={{height: "100%"}} option={option} />
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header>Dashboard2</Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content..ffff
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header>Dashboard2</Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content..
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header>Dashboard2</Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content..
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header>Dashboard2</Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content..
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header>Dashboard2</Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content..
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Header>Dashboard2</Card.Header>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content..
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>    
      </Container>
  );
};
