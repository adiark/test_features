// import { defineAsyncComponent } from 'vue'

// // Function to load a component
// export function loadComponent(componentPath: string) {
//   console.log(componentPath)
//   return defineAsyncComponent(() => import(/* @vite-ignore */ `@/components/${componentPath}.vue`))
// }

import { defineAsyncComponent } from 'vue'

export function loadComponent(componentPath: string) {
  console.log(componentPath)
  // Load component directly from the path
  return defineAsyncComponent(() => import(/* @vite-ignore */ `${componentPath}`))
}


// Function to load a variable from .ts file
export async function loadVariable(filePath: string, variableName: string) {
  console.log(variableName)
  const module = await import(/* @vite-ignore */ `@/components/${filePath}.ts`)
  return module[variableName]
}

