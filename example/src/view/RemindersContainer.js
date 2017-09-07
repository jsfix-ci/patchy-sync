import { connect } from 'react-redux';
import Reminders from './Reminders';
import { patchDocument } from '../reminders/actions';

const mapStateToProps = state => ({
  document: state
});

const mapDispatchToProps = {
  patchDocument
};

export default connect(mapStateToProps, mapDispatchToProps)(Reminders);
