import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Fix: Property 'cwd' does not exist on type 'Process'. Cast to any to access Node.js process methods in config.
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // This allows the code to use process.env.API_KEY locally by reading from .env
      'process.env.API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY || '')
    }
  };
});