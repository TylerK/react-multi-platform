import Render from './mainRender';

export default function () {
  return Render.call(this, this.props, this.state);
}
