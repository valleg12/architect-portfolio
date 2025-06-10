export function getImagePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (basePath && path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  return path.startsWith('/') ? path : '/' + path;
} 