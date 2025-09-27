# Trigger, spark of life

* `Trigger` is the core mechanism used by the `Septopus Engine` to implement games. Trigger is triggered in game mode and can implement complex game logic. Trigger is independent components that, like Adjuncts, must be placed on a `Block`.

* The Septopus engine extracts the trigger separately. In game mode, whenever the position of the player changes, a calculation is performed to determine whether it is triggered.

* In `Edit Mode`, `trigger` is also valid, which can facilitate `Player` to arrange the scene and test whether the effect meets the expectations.

## Trigger Definition

* `Trigger` is transparent and only visible in `Edit Mode`. In `Normal Mode` and `Game Mode`, it is invisible, but it does not affect its triggering.

* `Trigger` has 4 trigger events, namely [in, out, hold, touch], which meet the development needs in game mode.

## Trigger Task

* `Trigger` can call all `task` preset by the system, so that it can almost adjust the functions of this system and support rich expressions in game mode.

### System Task

* The optional types of the system task are ["UI","time","weather","sky"].

```Javascript
    [ 
        0,          //Main type, one of the values ​​[system, adjunct, player, bag...]
        0,          //System task, [UI, weather, sky...] one of the values
        3,          //Select the property setting, after this, the chain selection property
    ]
```

### Adjunct Task

* Adjuncts are various extensible objects deployed on the Block, which enable interaction by modifying corresponding properties.

* The optional type of the adjunct, which is processed according to the actual setting of the world.

```Javascript
    [ 
        1,          //Main type, one of the values ​​[system, adjunct, player, bag...]
        0x00a1,     //Adjunct index
        0,          //task index         
    ]
```

### Player Task

* Player's selectable attributes ["position","rotation","body","block","movement","health","mana"].

```Javascript
    [ 
        2,          //Main type, one of the values ​​[system, adjunct, player, bag...]
        1,          //The index of the player's optional attribute        
    ]
```

## Workflow

* Triggers use the following operating logic: **Trigger event** --> **Judgment condition** --> **Execution action** --> **Exit condition** --> **Resume action**

* Use the definitions of **property and object selection** and **judgment method** mentioned above to implement **condition** judgment.
  
* Use the definitions of **property and object selection** and **modification methods** mentioned above to implement **action** execution.

## Issue

* The Trigger mission system is a complex system and is not yet fully finalized.