import Render from './mainRender.native';

export default function () {
  return Render.call(this, this.props, this.state);
}
