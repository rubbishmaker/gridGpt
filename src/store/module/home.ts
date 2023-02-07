import {Module,VuexModule,Mutation,Action,getModule,} from 'vuex-module-decorators';
import store from "../index";


@Module({name: 'home', dynamic: true, namespaced: true, store})
class Home extends VuexModule{

}

export const HomeStroe =  getModule(Home)