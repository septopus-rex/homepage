# Event

* 代码位置:[/core/event.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/core/event.js)

* `Septopus引擎`使用`事件`方式来进行解耦，显著降低了系统的理解难度。

## 事件绑定

* `Septopus引擎`使用`事件`使用`VBW.event.on(cat,event,fun,location)`的方法来进行绑定，同一时间支持多次绑定。
  
* `Septopus引擎`使用`事件`使用树状结构来组织。支持列表如下：
  
  ```Javascript
    {
        "system": ["init","launch","off","restart","update"],
        "datasource": ["request","update","blocked","recover"],
        "sky": ["change"],
        "time": ["change","newyear","newmonth","newday","newhour","newminitue"],
        "weather": ["change","cloud","rain","snow"],
        "block": ["in","out","hold","stop","loaded","cross","unload"],
        "player": ["fall","death","start","hold","rotate"],
        "effects": ["start","end"],
        "rd_three": ["ready","done"],
        "stop": ["on","leave","beside", "under"],
        "trigger": [ "in","out","hold","touch"],
        "box": [],
        "module": ["parsed","failed"]
    }
  ```

## 事件触发

* `Septopus引擎`使用`事件`使用`VBW.event.trigger(cat,event,ev,location)`的方法来进行触发。触发之后，将遍历绑定的方法并执行，并传回ev供其使用。
  
## 物品定位

* `Septopus引擎`里的`事件`的触发，需要定位到`附属物`，系统采用以下的数据结构来进行处理
  
  ```Javascript
    {
        x:2025,             //Block.x
        y:619,              //Block.y
        world:0,            //World index
        index:0,            //Adjunct index
        adjunct:"wall"      //Adjunct name
    }
  ```

* 当不需要定位到`附属物`时，可以使用字符串来标定事件方法