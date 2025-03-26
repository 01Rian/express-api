const router = require('express').Router();

const isAuthenticatedMiddleware = require('../common/middlewares/IsAuthenticatedMiddleware');
const SchemaValidationMiddleware = require('../common/middlewares/SchemaValidationMiddleware');
const CheckPermissionMiddleware = require('../common/middlewares/CheckPermissionMiddleware');

const UserController = require('./controller/UserController');

const updateUserPayload = require('./schema/updateUserPayload');
const changeRolePayload = require('./schema/changeRolePayload');

const { roles } = require('../config');

router.get('/', [isAuthenticatedMiddleware.check], UserController.getUser);

router.patch('/', 
  [
    isAuthenticatedMiddleware.check, 
    SchemaValidationMiddleware.verify(updateUserPayload)
  ], 
  UserController.updateUser
);

router.get('/all', 
  [
    isAuthenticatedMiddleware.check,
    CheckPermissionMiddleware.has(roles.ADMIN)
  ],
  UserController.getAllUsers
);

router.patch('/:userId/role', 
  [
    isAuthenticatedMiddleware.check, 
    CheckPermissionMiddleware.has(roles.ADMIN),
    SchemaValidationMiddleware.verify(changeRolePayload),
  ],
  UserController.changeRole
);

router.delete('/:id', 
  [
    isAuthenticatedMiddleware.check, 
    CheckPermissionMiddleware.has(roles.ADMIN),
  ],
  UserController.deleteUser
);

module.exports = router;