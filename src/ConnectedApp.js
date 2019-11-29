import {connect} from "react-redux";
import App from "./App";


const mapStateToProps = (state) => {
    return {
        todoLists: state.todolists
    }
};
const ConnectedApp = connect(mapStateToProps)(App);
export default ConnectedApp;