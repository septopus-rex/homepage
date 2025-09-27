# Stop, catalyst for action

* `Stop` is the Septopus Engine's mechanism for limiting the Player's movement. This can be achieved by setting a Stop adjunct, or by setting the adjunct's stop property.

* The Septopus engine extracts the stop function separately and performs calculations every time the position of the player changes to determine whether it can move normally.

* In `Edit Mode`, the blocking body is also valid, which can facilitate the `Player` to arrange the scene.

## Stop Definition

* Starting from the bottom of the Player's feet, if the Stop height is within the Player's reach, the Player's standing height is set to the top of the Obstacle. For spherical Obstacles, the calculation is performed as if they were standing on the sphere.
  
* `Stop` can block the upward movement of the `Player` head. `Stop` in adjacent `Block` can also block the movement of the `Player`.

## Stop Types

* In order to adapt to different terrains, different types of barriers are provided for processing.

|  Type of Stop   | Main Features  |
|  ----  | ----  |
|  Box  | A box-shaped barrier used to block and raise the player's standing height  |
|  Ball  | Mainly used to handle complex terrain, such as bumpy roads  |

## Abnormal Situation

* Blockers can sometimes "penetrate" the player. This happens when the player's movement speed is too fast, and the difference between their previous and next positions is greater than the `Stop`'s dimensions, causing the player to pass through the `Stop`, like a wall. To prevent this, set the `Stop` to a sufficient thickness, recommended to be at least 0.2 meters. If the player's movement abilities are enhanced during gameplay, further thickness may be required.

* `Stop` can cause imprisonment. This occurs when a player's current tile is updated and a `Stop` is placed where they are standing, preventing them from moving. This requires the player to jump directly to a different block to resolve the issue. When a player jumps into a block, the system automatically calculate their position, preventing imprisonment.