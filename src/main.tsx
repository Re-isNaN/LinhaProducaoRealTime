import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'

import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/700.css';
// @ts-ignore
import '@fontsource/jetbrains-mono';

createRoot(document.getElementById('root')!).render(<App />)
