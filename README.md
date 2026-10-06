# Camera 

In ThreeJS there are mainly 2 types of cameras.

1. Perspective camera
2. Orthographic camera

## Perspective camera

It will mimic human eye, means if any object is close it will show as close, if it is far it will show as far.

This camera will take 4 parameters.

1. Field of view (It will take vertical angle)
2. Aspect ratio
3. Near value
4. Far value

### Field of view

Basically **human eye** **FOV** is `75`. If it is `120` then it was **wide**. If it is `30` then it was **zoomed**.

Human Eye
![Human Eye](https://github.com/codingwithrk/learning-threejs/blob/main/output/camera/human-eye.png)

Wide
![Wide](https://github.com/codingwithrk/learning-threejs/blob/main/output/camera/wide.png)

Zoomed
![Zoomed](https://github.com/codingwithrk/learning-threejs/blob/main/output/camera/zoomed.png)

### Aspect ratio

Basically it will define then `width / height`.

### Near value

If the distance between object and camera is `< 1.0` then camera can't able to see the object.

### Near value

If the distance between object and camera is `> 100` then camera can't able to see the object.

## Orthographic camera

It will not like human eye, means how much distance you keep it wouldn't change the view. It was mainly used for 2D.

It will take 3 parameters

1. Bounds
   1. Left
   2. Right
   3. Top
   4. Bottom
2. Near value
3. Far value

![Zoomed](https://github.com/codingwithrk/learning-threejs/blob/main/output/camera/orthographic.png)
