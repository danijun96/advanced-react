import Reset from '../components/Reset';

const Sell = props => (
  <>
    <p>Reset Your Password {props.query.resetToken}</p>
    <Reset resetToken={props.query.resetToken} />
  </>
);


export default Sell;
