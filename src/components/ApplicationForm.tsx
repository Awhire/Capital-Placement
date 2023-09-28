import imgUpload from '../assets/upload.svg';

import { Card, Col, Row } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;

const ApplicationForm = () => {
  return (
    <div style={{ marginTop: "20px", marginLeft: "30px", width: "100%", height: "100vh", fontSize: "14px" }}>
        <Row gutter={16}>
            <Col span={10}>
                <Card title={<div style={{ width: "100%", padding: "20px" , borderRadius: "10px"}}>Upload cover image</div>} bordered={false} style={{}}>
                    <div style={{paddingLeft: "20px", paddingRight: "20px", paddingBottom: "20px", borderRadius: "10px"}}>
                        <div style={{borderWidth: "1px", borderStyle: 'dashed', height: "180px"}}>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%"}}>
                                <div style={{marginBottom: "2px"}}>
                                    <img src={imgUpload} alt="upload-icon" width={24} />
                                </div>
                                <Text strong>Upload cover image</Text>
                                <Text>16:9 ratio is recommended. Max image size 1mb</Text>
                            </div>
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default ApplicationForm
