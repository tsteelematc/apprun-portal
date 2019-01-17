import app, {Component} from 'apprun';

export default class HomeComponent extends Component {
  state = 'Home';

  view = (state) => {
    return <div>
      <h1>{state}</h1>
      <button class="ms-Button ms-Button--primary">
        <span class="ms-Button-label" onclick={(state) => this.run('Foo')}>Foo</span> 
      </button>
    </div>
  }

  update = {
    '#Home': state => state
    ,'Foo': state => console.log('Bar')
  }
}

