import type { ResolveFn } from '@angular/router';

export const loadingResolver: ResolveFn<boolean> = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return true;
};
