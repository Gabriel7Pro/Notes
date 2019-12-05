import React from 'react';
import logo from './logo.svg';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import { Checkbox } from 'semantic-ui-react';
import { Icon, Card, Grid, Image  } from 'semantic-ui-react';
import './App.css';

interface Inotes {
  name : string;
  list : Array<string>;
  open_date : Date; 
  last_update : Date;
}



const GridExampleDividedNumber = () => (
  <Grid columns={3} divided={true}>
    <Grid.Row>
      <Grid.Column>
        <Cardexmp />
      </Grid.Column>
      <Grid.Column>
        <Cardexmp />
      </Grid.Column>
      <Grid.Column>
        <Cardexmp />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Cardexmp />
      </Grid.Column>
      <Grid.Column>
        <Cardexmp />
      </Grid.Column>
      <Grid.Column>
        <Cardexmp />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

const CheckboxExampleCheckbox = () => (
  <Checkbox label='Make my profile visible' />
)

class Cardexmp extends React.Component<{}, {}> {
  render() {
    return (
    <Card>
      <Card.Content>
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra={true}>
        <div className='ui button'>
          <Button basic={true} color='green'>
            Edit
          </Button>
        </div>
      </Card.Content>
    </Card>
    )
  }  
}

const ButtonExampleButton = () => <Button><Icon name='sticky note' size='large' />  </Button>

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <CustomSlider />
      </header>
    </div>
  );
}

export default App;
