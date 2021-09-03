import { Router } from 'react-typesafe-routes';
import { HomePage, TodoPage } from './pages';
import { ProfilePage } from './pages/ProfilePage';

// Read more about writing a middleware or add query parameter etc.
// https://github.com/innFactory/react-typesafe-routes

export const router = Router((route) => ({
	home: route('/', {
		component: HomePage,
	}),
	todo: route('todo', {
		component: TodoPage,
	}),
	profile: route('profile', {
		component: ProfilePage,
	}),
}));
