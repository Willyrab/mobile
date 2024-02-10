import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'vente_voiture',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
