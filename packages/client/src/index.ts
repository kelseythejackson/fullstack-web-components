import { routes } from './routes';
import { Router } from './router';

const router = new Router('#root', routes);

export { routes, router, Router };

export { MainView, DashboardView, LoginView } from './view';
export { Background, AppHeader, CookieFooter } from './component';
export { ButtonComponent } from '@in/ui';
