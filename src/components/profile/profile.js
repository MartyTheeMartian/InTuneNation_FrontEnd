import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Card, Icon, Image, Grid, Button, Segment} from 'semantic-ui-react';
import dog from './dog.jpg'
const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

class Profile extends Component {

  render() {
    return (
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>

            <Card>
              <Image src={dog}/>
              <Card.Content>
                <Card.Header>
                  Matthew
                </Card.Header>
                <Card.Meta>
                  <span className='date'>
                    Joined in 2015
                  </span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in San Francisco.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='user'/>
                  22 Friends
                </a>
              </Card.Content>
            </Card>

          </Grid.Column>

          <Grid.Column width={13}>
            <Grid.Row>
              <Grid columns='equal'>
                <Grid.Column>
                  <Button inverted color='blue'>Scores</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button inverted color='blue'>Graphs</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button inverted color='blue'>Graphs</Button>
                </Grid.Column>
                <Grid.Column>
                <Button inverted color='blue'>Graphs</Button>
                </Grid.Column>
              </Grid>
            </Grid.Row>
              <Grid.Row>

              </Grid.Row>
            {/* <Grid columns='equal'>
              <Button inverted color='blue'>Scores</Button>
              <Button inverted color='blue'>Graphs</Button>
            </Grid> */}

          </Grid.Column>

        </Grid.Row>
      </Grid>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
