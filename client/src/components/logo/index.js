import logo from './ape.png'; // Tell webpack this JS file uses this image

function Logo({ width, height }) {
    return <img src={logo} width={width} height={height} />;
}
export default Logo;
