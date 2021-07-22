import routerx from 'express-promise-router';

import PersonaRoute from './persona.route';

const router=routerx();

router.use('/persona', PersonaRoute);

export default router;