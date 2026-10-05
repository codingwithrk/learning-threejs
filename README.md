# Animation

In ThreeJS animations will work like paper-clip animations like frame-by-frame.

> For smooth animation 60 Frames Per Second is needed.

There is a method called `requestAnimationFrame` this will depend on your `System Refresh Rate`.

[![requestAnimationFrame](https://github.com/codingwithrk/learning-threejs/blob/main/output/animation/requestAnimationFrame.mp4)](https://github.com/codingwithrk/learning-threejs/blob/main/output/animation/requestAnimationFrame.mp4)

But it was having one issue, that is every monitor will runs on different FPS (60 FPS, 120 FPS). That's why it will be make bad user experience. So, the solution for this is **Time**.

Clock (This is Deprecated)

[![clock](https://github.com/codingwithrk/learning-threejs/blob/main/output/animation/clock.mp4)](https://github.com/codingwithrk/learning-threejs/blob/main/output/animation/clock.mp4)

Timer

[![timer](https://github.com/codingwithrk/learning-threejs/blob/main/output/animation/timer.mp4)](https://github.com/codingwithrk/learning-threejs/blob/main/output/animation/timer.mp4)
