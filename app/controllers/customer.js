import Controller from '@ember/controller';

export default class CustomerController extends Controller {
  customers = [
    { name: 'anuj', department: 'HR' },
    { name: 'Kapil', department: 'Waiter' },
    { name: 'ankit', department: 'Intern' },
    { name: 'pooja', department: 'Manager' },
    { name: 'shobha', department: 'Developer' },
  ];
}
