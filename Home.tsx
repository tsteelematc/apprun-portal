import app, {Component} from 'apprun';

export default class HomeComponent extends Component {
  state = 'Home';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
      <button className="ms-Button ms-Button--primary">
        <span className="ms-Button-label" onclick={(state) => this.run('Foo')}>Foo</span> 
      </button>
      &nbsp;
      &nbsp;
      <button className="ms-Button ms-Button">
        <span className="ms-Button-label" onclick={(state) => this.run('Cat')}>Cat</span> 
      </button>
    </div>    
  }

  update = {
    '#Home': state => state
    ,'Foo': state => console.log('Bar')
    ,'Cat': state => console.log('Dog')
  }
}

