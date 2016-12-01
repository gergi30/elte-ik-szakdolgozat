import React from 'react';
import AppBar from 'material-ui/AppBar';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Grid, Row, Col} from 'meteor/lifefilm:react-flexbox-grid';

const Index = () => (
    <Grid>
        <Row>
            <Col xs={12} md={4}>
                <Card
									style={{
							      margin: '20',
							    }}>
                    <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="http://mobi-homepage.com/wp-content/uploads/2015/03/avatar.png"/>
                    <CardMedia overlay={< CardTitle title = "Overlay title" subtitle = "Overlay subtitle" />}>
                        <img src="http://www.kunggu.com/resize/resize-img.php?src=http://www.kunggu.com/images/Minimalism/sea-mountains-plane-landscape-sky4256.jpg&h=600&w=1024"/>
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle"/>
                    <CardText>
                        Lorem ipsum dolor sit amet.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1"/>
                        <FlatButton label="Action2"/>
                    </CardActions>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card									style={{
															      margin: '20',
															    }}>
                    <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="http://mobi-homepage.com/wp-content/uploads/2015/03/avatar.png"/>
                    <CardMedia overlay={< CardTitle title = "Overlay title" subtitle = "Overlay subtitle" />}>
                        <img src="http://www.kunggu.com/resize/resize-img.php?src=http://www.kunggu.com/images/Minimalism/sea-mountains-plane-landscape-sky4256.jpg&h=600&w=1024"/>
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle"/>
                    <CardText>
                        Lorem ipsum dolor sit amet.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1"/>
                        <FlatButton label="Action2"/>
                    </CardActions>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card									style={{
															      margin: '20',
															    }}>
                    <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="http://mobi-homepage.com/wp-content/uploads/2015/03/avatar.png"/>
                    <CardMedia overlay={< CardTitle title = "Overlay title" subtitle = "Overlay subtitle" />}>
                        <img src="http://www.kunggu.com/resize/resize-img.php?src=http://www.kunggu.com/images/Minimalism/sea-mountains-plane-landscape-sky4256.jpg&h=600&w=1024"/>
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle"/>
                    <CardText>
                        Lorem ipsum dolor sit amet.
                    </CardText>
                    <CardActions>
                        <FlatButton label="Action1"/>
                        <FlatButton label="Action2"/>
                    </CardActions>
                </Card>
            </Col>
        </Row>
    </Grid>

)

export default Index;
