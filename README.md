# Animation

In ThreeJS animations will work like paper-clip animations like frame-by-frame.

> For smooth animation 60 Frames Per Second is needed.

There is a method called `requestAnimationFrame` this will depend on your `System Refresh Rate`.

<video controls width="100%">
  <source src="https://raw.githubusercontent.com/codingwithrk/learning-threejs/main/output/animation/requestAnimationFrame.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

But it was having one issue, that is every monitor will runs on different FPS (60 FPS, 120 FPS). That's why it will be make bad user experience. So, the solution for this is **Time**.

## Clock (This is Deprecated)

<video controls width="100%">
  <source src="https://raw.githubusercontent.com/codingwithrk/learning-threejs/main/output/animation/clock.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Timer

<video controls width="100%">
  <source src="https://raw.githubusercontent.com/codingwithrk/learning-threejs/main/output/animation/timer.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>