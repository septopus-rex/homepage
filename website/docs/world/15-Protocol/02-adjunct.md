# Adjunct Protocol

* `附属物`是扩展Septopus功能的主要方式，整个`Septopus框架`的设计，就是为方便`附属物`的扩展。`附属物`使用[`Septopus坐标系`](./framework.md#基础说明)

* `附属物`的解析也是一个纯Javascript文件，可以将其部署到链上，从而实现Septopus的全链，包括数据和程序。

* `附属物`代码尽量减少引用（即使引用，也要能被整个打包进来），主要处于一个被调用的状态，来减少其自主行为，也便于安全审查。

* `附属物`在`地块坐标(A坐标系)`上运行，即对`标准数据(std)`进行计算和处理。

* 不同的`世界`可以通过配置来支持不同的`附属物`，从而形成`世界`的不同风格。

* `附属物`的代码样例如下，保持清晰的结构，便于理解和开发。

```Javascript
    const self={
        hooks:{
            reg:()=>{},
            def:(data)=>{},
            animate:(meshes,cfg)=>{},
            ...
        },
        transform:{
            raw_std:(arr,cvt)=>{},
            std_3d:(arr,elevation)=>{},
            std_active:(arr,elevation,index)=>{},
            std_2d:(stds,face,faces)=>{},
            ...
        },
        attribute:{
            add:(p, raw)=>{},
            set:(p, raw, limit)=>{},
            remove:(p, raw)=>{},
            combine:(p, row)=>{},
            revise:(p, row, limit)=>{},
        },
        menu:{
            pop:()=>{},
            sidebar:()=>{},
            ...
        },
        task:{
            router:["hide","show","dance"],
            hide:(meshes,cfg)=>{},
            show:(meshes,cfg)=>{},
            dance:(meshes,cfg)=>{},
            ...
        },
    };

    const adjunct={
        hooks:self.hooks,               //组件钩子
        transform:self.transform,       //数据格式转换
        attribute:self.attribute,       //属性设置，编辑数据
        menu:self.menu,                 //输出菜单
        task:self.task,                 //游戏模式下的task任务
    }

export default adjunct;
```