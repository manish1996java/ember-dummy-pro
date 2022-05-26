import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
  model() {
    // let p = new Promise(((r)=>{
    //     setTimeout(() => {
    //         r("manish");
    //     }, 5000);
    // }));
    // return p;

    return ['apple', 'mango', 'banana'];
  }
}
