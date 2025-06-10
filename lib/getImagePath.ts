export function getImagePath(path: string) {
  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/architect-portfolio')) {
    return `/architect-portfolio${path.startsWith('/') ? path : '/' + path}`;
  }
  return path.startsWith('/') ? path : '/' + path;
} 