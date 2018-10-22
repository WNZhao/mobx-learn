import  * as mobx from 'mobx';

const {observable,action,useStrict} = mobx;

console.log(observable);
useStrict(true);

export default class MyState {
    @observable public num = 0;
  @action public addNum = () => {
    this.num++;
  };
}