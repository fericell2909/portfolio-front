
import * as IndexPublic  from '../../../modules/Public/redux/reducers/Index';
import * as IndexAdministrador  from '../../../modules/Administrator/redux/reducers/Index';


const InitReducer = {...IndexPublic , ...IndexAdministrador}

export default InitReducer;