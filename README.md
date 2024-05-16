# TITLE
GODZILLA3D

# ABOUT GODZILLA3D
This project is about learning and having fun with 3D Animation 
using my favorite web development frameworks NEXTJS. [Next.js](https://nextjs.org/) 

Animations will be done using threejs and Blender for the 3D model.
The models are from sketchfab.com https://sketchfab.com/, my own creations will come later. 

Please check out and subscribe/like https://www.youtube.com/@developedbyed and https://www.youtube.com/@developertak as they have inspired me and are the base of this work. 


## NOTES ON ANIMATION WITH 3JS
/* RENDERER
  The main object of three.js.  
  You pass a SCENE and a CAMERA to a RENDERER, it draws the 3D Scene that is in the frustum
  SCENEGRAPH tree structure, consisting of SCENE, MESH, LIGHT, GROUP, OBJECT3D, CAMERA
  MESH objects represent drawing a specific GEOMETRY with a pecific MATERIAL
  GEOMETRY objects represent the vertex data of some piece of geometry like a sphere
  MATERIAL objects represent the surface properties used to draw geometry
  TEXTURE objects generally represent images
  LIGHT objects represent different types of lights
      WEBGLRENDERER       PERPECTIVECAMERA
                    SCENE
                    MESH
        BOXGEOMETRY      MESHBASICMATERIAL
 */

// Set up canvas
const canvas = document.querySelector('#c')
// Draw into the canvas by looking it up.
// After look up we create a WEBGLRENDERER responsible for rendering the data.
// Next we will create a PerspectiveCamera.

//const renderer = new THREE.WebGLRenderer({antialias: true, canvas})

// FOV is Field Of View
const fov = 75
// ASPECT is the display aspect of the canvas, a canvas is 300x150px or 300/150 or 2.
const aspect = 2
// NEAR and FAR represent the space in front of the camera that will be rendered.
const near = 0.1
const far = 5
// The four settings above define the FRUSTUM (3d shape like a pyramid with tip cut off)
// The height of the near and far planes are determined by the field of view. 
// The width of both planes is determined by the field of view and the aspect.
// Anything inside the defined frustum will be drawn. Anything outside will not.
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
// The camera defaults to looking down the -Z axis with +Y up.
camera.position.z = 2
// Next we make a Scene - the root of a form of scene graph, all needs to be added to scene.
const scene = new THREE.Scene()
// Next we create a BOXGEOMETRY which contains data for a box.
const boxWidth = 1
const boxHeight = 1
const boxDepth = 1
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)
// Next create basic material and set its color.
const material = new THREE.MeshBasicMaterial({color: 0x44aa88})
// Next create a MESH - is (Geometry (shape), Material, Position)
const cube = new THREE.Mesh(geometry, material)
// Finally add that mesh to the scene
scene.add(cube)
// Render the scene by calling the render'r rneder fucntion and passing scene and camera
renderer.render(scene, camera)
// Animate it

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
