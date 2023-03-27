new Vue({
  el: '#root',
  data: {},
  methods: {},    // 方法
  computed: {},     // 计算属性
  watch: {},    // 监视
  filters: {},    // 局部过滤器
  directives: {},    // 自定义指令 
  //   生命周期函数
  mounted() { },    // Vue完成模板的解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted，发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
  beforeDestroy() { },    // vue马上执行销毁操作，清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。
})

//  Vue中使用组件的三大步骤：
//  一、定义组件(创建组件)
const school = { data() { } }
//  二、注册组件
new Vue({ el: '#root', components: { school } })
Vue.component('school', school);
//  三、使用组件(写组件标签)
<school></school>

v - bind
//  单向绑定(v-bind)：数据只能从data流向页面。
//  单向数据绑定：<input type="text" : value="name">

v - model
//  双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data，双向绑定一般都应用在表单类元素上（如：input、select等） 
//  双向数据绑定：<input type="text" v-model="name">

v - on
//  @click  @keyup  
//  使用 v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；
//  Vue中的事件修饰符：
//  1.prevent：阻止默认事件（常用）；
//  2.stop：阻止事件冒泡（常用）；
//  3.once：事件只触发一次（常用）；
//  4.capture：使用事件的捕获模式；
//  5.self：只有event.target是当前操作的元素时才触发事件；
//  6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕；

v - show
//  写法：v - show="表达式"
//  适用于：切换频率较高的场景。
//  特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉

v - if指令
//  (1)  v-if = "表达式"
//  (2)  v-else-if = "表达式"
//  (3)  v-else
//  适用于：切换频率较低的场景。
//  特点：不展示的DOM元素直接被移除。
//  注意： v-if可以和:  v-else-if、 v-else一起使用，但要求结构不能被“打断”。

v - for指令
//  1.用于展示列表数据
//  2.语法：v -for= "(item, index) in xxx" : key = "yyy"
//  3.可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）

v - text
//  1.作用：向其所在的节点中渲染文本内容。
//  2.与插值语法的区别：v - text会替换掉节点中的内容，{ { xx } } 则不会。

v - html
//  1.作用：向指定节点中渲染包含html结构的内容。
//  2.与插值语法的区别：
//    (1).v - html会替换掉节点中所有的内容，{ { xx } } 则不会。
//    (2).v - html可以识别html结构。
//  3.严重注意：v - html有安全性问题！！！！
//    (1).在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。
//    (2).一定要在可信的内容上使用 v-html，永不要用在用户提交的内容上！

v - cloak
//  1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v - cloak属性。
//  2.使用css配合v - cloak可以解决网速慢时页面展示出{ { xxx } } 的问题。

v - once
//  1.v - once所在节点在初次动态渲染后，就视为静态内容了。
//  2.以后数据的改变不会引起 v-once 所在结构的更新，可以用于优化性能。

v - pre
//  1.跳过其所在节点的编译过程。
//  2.可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。


//  自定义指令
