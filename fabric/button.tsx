import app, { Component } from 'apprun';

export interface IProps {
  type?: 'default' | 'primary' | 'compound' | 'hero';
  disabled?: boolean;
  label?: String;
  onclick?: Function;
}
interface IState extends IProps {}

export default class Button extends Component {
  state: IState = {
    type: 'default',
    disabled: false,
    label: 'Button',
    onclick: () => null
  };

  view = (state: IState) => {
    return (
      <button
        className={`ms-Button ms-Button--${this.props.type} ${state.disabled ? 'is-disabled' : null} `}
        onclick={(...p) => this.run('click', ...p)}>
        <span className="ms-Button-label ">{state.label}</span>
      </button>
    );
  };

  update = {
    click: async (state, e) => {
      state.onclick(e);
      return {
        ...state
      };
    }
  };

  constructor(protected props: IProps) {
    super();
  }

  mounted = props => {
    // console.log('MOUNTED!');
    // console.log(props);
    this.state = { ...this.state, ...props };
  };
}
