# Learning Three.js

My personal journey learning **Three.js**, following this course:

> 🎥 **[The Only Three.js Tutorial You'll Ever Need (Shaders, R3F, Real Project) | 11 Hours](https://youtu.be/NGFhiCJEbdY)**
> by [Sheryians Creative School](https://www.youtube.com/@SheryiansCreativeSchool) — Mentor: Swaraj Singh
> Course reference repo: [Swaraj269/yt_final_3d_project](https://github.com/Swaraj269/yt_final_3d_project)

---

## 🌳 How this repo is organized

Every **timestamp (chapter)** of the video is maintained as its own **branch**.

- `main` → contains **only this README** (the roadmap / index).
- Each chapter branch → contains the code I wrote while following that section.

To view the code for a chapter, just check out its branch:

```bash
git checkout 03-transformation-of-objects
npm install
npm run dev
```

---

## 📚 Chapters & Branches

| #  | Timestamp | Topic | Branch | Status |
|----|-----------|-------|--------|--------|
| 01 | [0:59](https://youtu.be/NGFhiCJEbdY?t=59) | Three.js Introduction | `01-threejs-introduction` | ✅ |
| 02 | [6:53](https://youtu.be/NGFhiCJEbdY?t=413) | Your First Three.js Scene | `02-your-first-threejs-scene` | ✅ |
| 03 | [28:19](https://youtu.be/NGFhiCJEbdY?t=1699) | Transformation of Objects | `03-transformation-of-objects` | ✅ |
| 04 | [44:40](https://youtu.be/NGFhiCJEbdY?t=2680) | Animation | `04-animation` | ✅ |
| 05 | [58:26](https://youtu.be/NGFhiCJEbdY?t=3506) | Camera in Three.js | `05-camera` | 🟨 |
| 06 | [1:10:19](https://youtu.be/NGFhiCJEbdY?t=4219) | Fixing the Resizing Problem & OrbitControls | `06-resizing-and-orbitcontrols` | ⬜ |
| 07 | [1:26:02](https://youtu.be/NGFhiCJEbdY?t=5162) | Geometry | `07-geometry` | ⬜ |
| 08 | [1:43:57](https://youtu.be/NGFhiCJEbdY?t=6237) | Debug UI (lil-gui) | `08-debug-ui-lil-gui` | ⬜ |
| 09 | [2:03:28](https://youtu.be/NGFhiCJEbdY?t=7408) | Textures | `09-textures` | ⬜ |
| 10 | [2:45:49](https://youtu.be/NGFhiCJEbdY?t=9949) | Materials | `10-materials` | ⬜ |
| 11 | [2:53:47](https://youtu.be/NGFhiCJEbdY?t=10427) | Lights | `11-lights` | ⬜ |
| 12 | [3:31:23](https://youtu.be/NGFhiCJEbdY?t=12683) | Importing 3D Model | `12-importing-3d-model` | ⬜ |
| 13 | [4:07:27](https://youtu.be/NGFhiCJEbdY?t=14847) | Environment Maps | `13-environment-maps` | ⬜ |
| 14 | [4:24:08](https://youtu.be/NGFhiCJEbdY?t=15848) | Shaders Basics | `14-shaders-basics` | ⬜ |
| 15 | [5:44:33](https://youtu.be/NGFhiCJEbdY?t=20673) | React Three Fiber | `15-react-three-fiber` | ⬜ |
| 16 | [7:16:10](https://youtu.be/NGFhiCJEbdY?t=26170) | Final 3D Portfolio Project | `16-final-3d-portfolio-project` | ⬜ |

**Legend:** ⬜ Not started · 🟨 In progress · ✅ Completed

---

## 🔁 Workflow for each chapter

```bash
# 1. Start a new chapter from the previous chapter's branch (so code builds up)
git checkout 02-first-threejs-scene
git checkout -b 03-transformation-of-objects

# 2. Code along with the video, commit as you go
git add .
git commit -m "Transformation: position, scale, rotation"

# 3. Push the branch
git push -u origin 03-transformation-of-objects

# 4. Update the status in this README on main
git checkout main
# edit README.md → mark chapter as ✅
git commit -am "Mark chapter 03 as completed"
git push
```

> 💡 The first chapter branch (`01-threejs-introduction`) is created from `main`, and the Vite + Three.js project setup is added there.

---

## 🛠️ Tech Stack

- [Three.js](https://threejs.org/)
- [Vite](https://vite.dev/)
- [lil-gui](https://lil-gui.georgealways.com/)
- GLSL Shaders
- [React Three Fiber](https://r3f.docs.pmnd.rs/)

---

## 🔗 Useful Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [Three.js Examples](https://threejs.org/examples/)
- [The Book of Shaders](https://thebookofshaders.com/)
- [React Three Fiber Docs](https://r3f.docs.pmnd.rs/)
