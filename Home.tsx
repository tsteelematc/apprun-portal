import app, {Component} from 'apprun';

export default class HomeComponent extends Component {
  state = { 
    title: 'Home'
    , canUseToggleWithAppRun: false
  };

  view = (state) => {
    return <div>
      <h1>{state.title}</h1>
      <button className="ms-Button ms-Button--primary">
        <span className="ms-Button-label" onclick={(state) => this.run('Foo')}>Foo</span> 
      </button>
      &nbsp;
      &nbsp;
      <button className="ms-Button ms-Button">
        <span className="ms-Button-label" onclick={(state) => this.run('Cat')}>Cat</span> 
      </button>
      <br/>
      <br/>
      <br/>
      <div className="ms-Toggle">
        <span className="ms-Toggle-description">Can I use a Toggle with AppRun?</span> 
        <input type="checkbox" id="demo-toggle-3" className="ms-Toggle-input" />
        <label for="demo-toggle-3" className={`ms-Toggle-field ${state.canUseToggleWithAppRun ? "is-selected" : ""}`} tabindex="0">
          <span className="ms-Label ms-Label--off">Off</span> 
          <span className="ms-Label ms-Label--on">On</span> 
        </label>
      </div>
      <h2>{state.canUseToggleWithAppRun ? 'Yes : - )' : 'No : - ('}</h2>
    </div>    
  }

  update = {
    '#Home': state => state
    ,'Foo': state => console.log('Bar')
    ,'Cat': state => {
      console.log('Dog');
      return {...state, canUseToggleWithAppRun: !state.canUseToggleWithAppRun};
    }
    //,'Toggle': state => ({...state, canUseToggleWithAppRun: !state.canUseToggleWithAppRun})
  }
}

