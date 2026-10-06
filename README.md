# Geometry

[Docs](https://threejs.org/docs/?q=Geometry)

Basically Geometry is like a Skeleton. And Geometry was made with Triangle.

![Triangle Example](https://github.com/codingwithrk/learning-threejs/blob/main/output/geometry/wireframe-triangle.png)

## Segments

Basically Segments will decide how to show the object.

For simple objects → 16 - 32

For very important objects / near to camera → 32 - 64

For less important objects / far to camera → 8 - 16

> Because if your object have more segments, it will affect performance.

## Custom geometry

To create our custom geometry we have to take `BufferGeometry()`.

![Custome geometry](https://github.com/codingwithrk/learning-threejs/blob/main/output/geometry/custom-geometry.png)