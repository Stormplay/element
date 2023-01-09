import Calendar from './src/main';
alert('123')
/* istanbul ignore next */
Calendar.install = function(Vue) {
  Vue.component(Calendar.name, Calendar);
};

export default Calendar;
