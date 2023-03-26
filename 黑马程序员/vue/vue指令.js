v - bind
//  单向绑定(v-bind)：数据只能从data流向页面。
//  单向数据绑定：<input type="text" : value="name">

v - model
//  双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data，双向绑定一般都应用在表单类元素上（如：input、select等） 
//  双向数据绑定：<input type="text" v-model="name">

v - on
//  使用 v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；
//  Vue中的事件修饰符：
//  1.prevent：阻止默认事件（常用）；
//  2.stop：阻止事件冒泡（常用）；
//  3.once：事件只触发一次（常用）；
//  4.capture：使用事件的捕获模式；
//  5.self：只有event.target是当前操作的元素时才触发事件；
//  6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕；

