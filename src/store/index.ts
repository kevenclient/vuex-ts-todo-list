import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import modules from './modules';
import StateInterface from './../types/StateInterface';

export const key: InjectionKey<Store<StateInterface>> = Symbol();

export const store = createStore<StateInterface>({
  state, getters, mutations, actions, modules,
});
