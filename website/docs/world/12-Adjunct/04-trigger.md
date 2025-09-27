# Trigger

* Code location: [/adjunct/basic_trigger.js](https://github.com/septopus-rex/world/blob/main/engine/src/septopus/adjunct/basic_trigger.js)

* `Trigger`组件是放置一个可以触发的组件，仅运行在`游戏模式`。

## 数据定义

* `Trigger`的数据结构，定义如下：

    ```Javascript
        [
            [2, 2, 3],                //0.trigger的尺寸
            [12, 4, 1.5],             //1.trigger在block里的定位
            [0, 0, 0],                //2.trigger的旋转
            1,                        //3.wether stop
            0,                        //4.trigger event, [in,out,hold,touch]
            [                         //5.task when triggered
                [
                    [[1,3],1,0]             //`condition`, can be empty, run anyway
                    [[2,0x00a2,3],[0]],     //`task_todo`, adjunct.wall.hide, [index]
                    [[1,1,2],[1,33]]        //`task_abord`, system.ui.toast()
                    [[2,0x00a1,1],[]],      //`task_recover`, adjunct.wall
                ],
            ], 
            0,                        //6.contract              
            1                         //7.run one time
        ]
    ```

* 当数据没有版本信息的时候，默认版本为"2025"。
  
## 类型说明

* `Trigger`将支持各种类型的几何形状，用于实现复杂的触发状态。

|  几何形状   | 基础说明  | 支持 |
|  ----  | ----  | ----  |
|  box  |  三维盒子的阻拦体 | ✅ |
|  ball | 球体的阻拦体   | ❌ |
|  cylinder | 柱体的阻拦体   | ❌ |

## 任务结构

* `Trigger`采用条件判断的方式来判断是否执行，使用大量的预定义来进行处理，是个复杂的体系，需要仔细处理。

## 定义部分

* `Trigger`采用的定义，需要公布到链上。
  
    ```Javascript
        {
            "RAW_TRIGGER_SHAPE_OPTION":     3,      //["box","ball","more"]
            "RAW_TRIGGER_OPTION":           4,      //["in","out","hold"]
            "RAW_ACTION_GROUP":             5,      //
            "RAW_CONTRACT_ID_ON_CHAIN":     6,
            "RAW_RUN_ONCE":                 7,
            "RAW_ONLY_GAME_MODE":           8,

            //action array [ "condition", "todo_task", "abord_task", "recover_task" ]
            "ACTION_INDEX_CONDITION":   0,
            "ACTION_INDEX_TODO":        1,
            "ACTION_INDEX_ABORD":       2,
            "ACTION_INDEX_RECOVER":     3,
            //condition array [ "selection_array", "operator", "value" ]
            "CONDITION_INDEX_SELECTION":    0,
            "CONDITION_INDEX_OPERATOR":     1,
            "CONDITION_INDEX_VALUE":        2,
            //task array    [ "selection", ]

            //section array,
            "SELECTION_INDEX_TYPE":     0,
            "SELECTION_TYPE_OPETION_SYSTEM":    1,
            "SELECTION_TYPE_OPETION_ADJUNCT":   2,
            "SELECTION_TYPE_OPETION_PLAYER":    3,
            "SELECTION_TYPE_OPETION_BAG":       4,

            //system selection
            "SELECTION_SYSTEM_SUB":     1,
            "SYSTEM_SUB_OPTION_UI":     1,
            "SYSTEM_SUB_OPTION_TIME":   2,
            "SYSTEM_SUB_OPTION_WEATHER":3,
            "SYSTEM_SUB_OPTION_SKY":    4,

            "SYSTEM_UI_OPTION_DIALOG": 1,
            "SYSTEM_UI_OPTION_TOAST":  2,

            //adjunct selection
            "SELECTION_ADJUNCT_SHORT":  1,
            "SELECTION_ADJUNCT_INDEX":  2,

            //player selection
            //["position","rotation","body","block","capacity","blood","magic"]
            "SELECTION_PLAYER_ATTIBUTION":  1,
            "PLAYER_ATTIBUTION_OPTION_POSITION":    0,
            "PLAYER_ATTIBUTION_OPTION_ROTATION":    1,
            "PLAYER_ATTIBUTION_OPTION_BODY":        2,
            "PLAYER_ATTIBUTION_OPTION_BLOCK":       3,
            "PLAYER_ATTIBUTION_OPTION_CAPACITY":    4,
            "PLAYER_ATTIBUTION_OPTION_BLOOD":       5,
            "PLAYER_ATTIBUTION_OPTION_MAGIC":       6,

            //task definition
            "TASK_SYSTEM_UI_":      1,

            //bag selection
            "SELECTION_BAG_OBJECT":             1,
            "SELECTION_BAG_OBJECT_AMOUNT":      2,

            //adjuction task action
            "ACTION_ADJUNCT_SHOW":      1,
            "ACTION_ADJUNCT_HIDE":      2,
            "ACTION_ADJUNCT_UPDATE":    3,

            "ADJUNCT_UPDATE_OPTION_INC":   1,
            "ADJUNCT_UPDATE_OPTION_DEC":   1,

            "EVENT_OPTION_IN":          1,
            "EVENT_OPTION_OUT":         2,
            "EVENT_OPTION_HOLD":        3,
            "SHAPE_OPTION_BOX":         1,
            "SHAPE_OPTION_BALL":        2,
            "OPERATOR_!=":              0,
            "OPERATOR_==":              1,
            "OPERATOR_>":               2,
            "OPERATOR_<":               3,
            "OPERATOR_>=":              4,
            "OPERATOR_<=":              5,
        }
    ```