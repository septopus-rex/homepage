# Controller

## Types of Controller

* According to system requirements, the Septopus Engine supports three types of controllers, whose main functions are as follows:

|  Type   | Main Function  | Device  | Code  |
|  ----  | ----  | ----  | ----  |
|  FPV Controller  |  First person view controller in a 3D world |  [PC,Mobile] | `/control/control_fpv.js`  |
|  2D Controller | 2D map controller  | [PC,Mobile] | `/control/control_2d.js`  |
|  Observe Controller  | 3D Content Observer Controller  | [PC,Mobile] |  `/control/control_observe.js`  |

## Program Structure

* Use a unified controller startup entry `Controller.start()` so that it can be called directly by the framework.

* `Controller` needs to build the running DOM structure to place various required content.