"use strict";
/*
1、vscode配置自动编译

    1.第一步   tsc --inti 生成tsconfig.json   改 "outDir": "./js",


    2、第二步 任务 - 运行任务  监视tsconfig.json


2、typeScript中的数据类型

    typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验，在typescript中主要给我们提供了以下数据类型


        布尔类型（boolean）
        数字类型（number）
        字符串类型(string)
        数组类型（array）
        元组类型（tuple）
        枚举类型（enum）
        
        任意类型（any）
        null 和 undefined
        void类型
        never类型

3、typeScript中的函数

    3.1、函数的定义
    3.2、可选参数
    3.3、默认参数
    3.4、剩余参数
    3.5、函数重载
    3.6、箭头函数  es6
4、typeScript中的类

    4.1 类的定义
    4.2 继承
    4.3 类里面的修饰符
    4.4 静态属性 静态方法
    4.5 抽象类 多态
5、typeScript中的接口

    5.1 属性类接口
    5.2 函数类型接口
    5.3 可索引接口
    5.4 类类型接口
    5.5 接口扩展

6、typeScript中的泛型

    6.1 泛型的定义
    6.2 泛型函数
    6.3 泛型类
    6.4 泛型接口
   
*/
// function getInfo(attr:string):string{
//     return attr
// }
// function getInfo1(attr:any):any{
//     return attr
// }
// function getInfo<T>(attr:T):T{
//     return attr;
// }
// // var info=getInfo<string>('123');
// let output = getInfo("myString")
// 定义一个方法同时支持返回数字和字符串两种类型
// class Min<T>{
//     list:T[]=[];
//     add(el:T):void{
//         this.list.push(el)
//     }
//     min():T{
//         var min=this.list[0];
//         for(var i=0;i<this.list.length;i++){
//             if(min>this.list[i]){
//                 min=this.list[i];
//             }
//         }
//         return min;
//     }
// }
// let m1=new Min<number>();
// m1.add(2);
// m1.add(3);
// m1.add(1);
// console.log(m1.min())
// let m2=new Min<string>();
// m2.add('a');
// m2.add('b');
// m2.add('c');
// console.log(m1.min())
