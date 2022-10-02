import { createStore } from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import StateInterface from './../types/StateInterface';

export default createStore<StateInterface>({
  state, getters, mutations, actions,
});
