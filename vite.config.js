import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

// Зроблено для використання в компонентах "абсолютних шляхів"
resolve: {
  alias: {
    '@modules': path.resolve(__dirname, 'src/modules'),
    '@common': path.resolve(__dirname, 'src/modules/common'),
    '@about': path.resolve(__dirname, 'src/modules/about'),
    '@work': path.resolve(__dirname, 'src/modules/work'),
    '@contact': path.resolve(__dirname, 'src/modules/contact'),
    '@styled': path.resolve(__dirname, 'src/modules/styled'),
    '@language': path.resolve(__dirname, 'src/modules/language'),
    '@assets': path.resolve(__dirname, 'src/assets'),
  },
},
});