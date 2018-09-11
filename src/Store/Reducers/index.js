import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import difficultiesReducer from './difficulties.reducer';
// import composerReducer from './composer.reducer';
// import eraReducer from './era.reducer';
// import instrumentReducer from './instrument.reducer';
// import pieceReducer from './piece.reducer';
// import artistReducer from './artist.reducer'
// import authReducer from './auth.reducer';

export default combineReducers({
  form: formReducer,
});
