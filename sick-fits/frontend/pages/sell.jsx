import CreateItem from '../components/CreateItem';
import PleaseSignIn from '../components/PleaseSignIng';

const Sell = props => (
  <>
    <PleaseSignIn>
      <CreateItem />;
    </PleaseSignIn>
  </>
);

export default Sell;
