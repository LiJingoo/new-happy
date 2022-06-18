<template>
<Abc />
<hr><Hello /><Hello1 /><hr><AB />
<hr><v-on事件调用 /><hr><q方法嵌套调用 /><hr><a生命周期钩子函数 /><hr><v-show指令 />
<hr>
<v-for指令 /><hr><a注册小项目 /><hr><for和if语句一起用 /><hr><v-bind指令 />
<hr>
<ab指令-v-once /><hr><a下拉菜单 />
<br><br><br><br><br><br><br><br>
<w购物车 /><hr><watch监听器 /><hr><watch监听对象 /><hr><once指令及各修饰符 /><hr><w-class与style样式 />
<hr>
<style内联样式 /><hr><w文本域textarea />
<hr>
<w复选框 />
<hr>
<w点选按钮 />
<hr>
<w下拉选择框 />
<hr>
<w动态选择框 />
<hr>
<w-lazy修饰符 />
<hr>
<w-num和trim修饰符 />
<hr>
<w元素隐藏和显示 />
<hr>
<w关键帧动画 />
<hr>
<w初始渲染动画 />
<hr>
<w试验 />
<hr>
<hr>

</template>
<script>
import Hello from '@/components/Hello.vue'
import Hello1 from '@/components/Hello1.vue'
import Abc from '@/components/Abc'
import AB from '@/components/AB'
import VOn事件调用 from './components/v-on事件调用.vue'
import Q方法嵌套调用 from './components/q方法嵌套调用.vue'
import A生命周期钩子函数 from './components/a生命周期钩子函数.vue'
import VShow指令 from './components/V-show指令.vue'
import VFor指令 from './components/V-for指令.vue'
import A注册小项目 from './components/a注册小项目.vue'
import For和if语句一起用 from './components/for和if语句一起用.vue'
import VBind指令 from './components/\'V bind指令.vue'
import Ab指令VOnce from './components/ab指令V-once.vue'
import A下拉菜单 from './components/a下拉菜单.vue'
import W购物车 from './components/w购物车.vue'
import Watch监听器 from './components/watch监听器.vue'
import Watch监听对象 from './components/watch监听对象.vue'
import Once指令及各修饰符 from './components/once指令及各修饰符.vue'
import WClass与style样式 from './components/wClass与style样式.vue'
import Style内联样式 from './components/style内联样式.vue'
import W文本域textarea from './components/w文本域textarea.vue'
import W复选框 from './components/w复选框.vue'
import W点选按钮 from './components/w点选按钮.vue'
import W下拉选择框 from './components/w下拉选择框.vue'
import W动态选择框 from './components/w动态选择框.vue'
import WLazy修饰符 from './components/wLazy修饰符.vue'
import WNum和trim修饰符 from './components/wNum和trim修饰符.vue'
import W元素隐藏和显示 from './components/w元素隐藏和显示.vue'
import W关键帧动画 from './components/w关键帧动画.vue'
import W初始渲染动画 from './components/w初始渲染动画.vue'
import W试验 from './components/w试验.vue'



export default {
  name: 'App',
  components: { Hello,
    Hello1, Abc, AB,VOn事件调用, Q方法嵌套调用, A生命周期钩子函数, VShow指令, VFor指令,A注册小项目,For和if语句一起用,
    VBind指令,
    Ab指令VOnce, A下拉菜单,W购物车, Watch监听器,Watch监听对象, Once指令及各修饰符,WClass与style样式,Style内联样式, W文本域textarea,
    W复选框,
    W点选按钮,
    W下拉选择框,
    W动态选择框,
    WLazy修饰符,
    WNum和trim修饰符,
    W元素隐藏和显示 ,
    W关键帧动画,
    W初始渲染动画,
    W试验
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  background-color:bisque;
}
#vas{
  display: inline-block;
  font-size: 25px;
  color:darkmagenta
}
body{
  background-color:darkkhaki
}
hr{
  width: 100%;
  height: 10px;
  color: aqua;
}
#aac{
  border:0px solid gray;
  width: 100%;
}
#av{
  display: block;
}
.c{
  font-size: 79px;
  color: fuchsia;
  border: 8px solid greenyellow;
  padding: 0px;
  font-weight: bolder;
  background: linear-gradient(to right bottom,green,yellow,red);
}
/*VUE动画*/
.v-enter-active, .v-leave-active{
     transition: all 0.7s linear;
}
.v-enter, .v-leave-to{
  opacity: 0.2;
  transform: translateX(150px);
}
.aw-enter-active, .aw-leave-active{
  transition: all 0.7s linear;
}
.aw-enter, .aw-leave-to{
  opacity: 0.2;
  transform: translateY(200px);
}
/*关键帧动画效果*/
.as-enter-active{
  animation: ass 1.1s;
}
.as-leave-active{
  animation: ass 0.95s linear;
}
@keyframes ass{
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(2.8);
  }
  100%{
    transform: scale(1);
  }
}
/*初始渲染过度*/
.aa{
  font-size: 20px;
  color: red;
  background: red;
}
.dd{
  font-size: 30px;
  color:blue;
  background: blue;
}
.cc{
   color: red;
   transition: all 0.7s linear;
}
</style>
