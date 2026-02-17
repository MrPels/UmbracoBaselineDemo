import { manifests as redirectDashboard } from './RedirectDashboard/manifest.js';
import { manifests as hasRedirect } from './HasRedirect/manifest.js';

export const manifests: Array<UmbExtensionManifest> = [
    ...redirectDashboard,
    ...hasRedirect,
];