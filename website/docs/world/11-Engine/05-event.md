# Event

* Code location: [/core/event.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/core/event.js)

* The Septopus Engine uses events to decouple the system, significantly reducing the difficulty of understanding the system.

## Event Binding

* The Septopus Engine uses events and the VBW.event.on(cat, event, fun, location) method to bind events. It supports multiple bindings at the same time.
  
* Septopus Engine uses events to organize events in a tree structure. The supported list is as follows:
  
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

## Event Trigger

* The Septopus engine uses events to trigger using the VBW.event.trigger(cat, event, ev, location) method. After triggering, the bound methods are traversed and executed, and ev is returned for its use.
  
## Target Location

* The triggering of the `event` in the `Septopus engine` needs to be located at the `Adjunct`. The system uses the following data structure to process it.

  ```Javascript
    {
        x:2025,             //Block.x
        y:619,              //Block.y
        world:0,            //World index
        index:0,            //Adjunct index
        adjunct:"wall"      //Adjunct name
    }
  ```

* When you don't need to trigger to the `adjunct`, you can use a string to mark the event method.