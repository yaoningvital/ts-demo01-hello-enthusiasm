import Hello from '../components/Hello'
import * as actions from '../actions'
import {StoreState} from '../types'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'

export function mapStateToProps({languageName, enthusiasmLevel}: StoreState) {
    return {
        name: languageName,
        enthusiasmLevel
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onIncrement: () => dispatch(actions.incrementEnthusiasm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)