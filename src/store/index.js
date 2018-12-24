import reducers from  '../reducers/index'
import { createStore} from 'redux'

/**
 * Este elemento contém todos os elementos globais no Jorney Framework
 */
const store = createStore(reducers)

export default store