import { About, Contact, Handlers, Puppies, Home } from '../pages';

import {
  MAIN_ROUTE,
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  PUPPIES_ROUTE,
  HANDLERS_ROUTE,
} from '../utils/constants';

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Home,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contact,
  },
  {
    path: PUPPIES_ROUTE,
    Component: Puppies,
  },
  {
    path: HANDLERS_ROUTE,
    Component: Handlers,
  },
];
