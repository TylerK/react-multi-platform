import Render from './todoRender.native';

export default function () {
  return Render.call(this, this.props, this.state);
}
