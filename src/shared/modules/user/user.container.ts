import { Container } from 'inversify';
import { UserService } from './user-service.interface.js';
import { Component } from '../../types/index.js';
import { DefaultUserService } from './default-user.service.js';
import { types } from '@typegoose/typegoose';
import { UserEntity, UserModel } from './index.js';
import { UserController } from './user.controller.js';
import { Controller } from '../../libs/rest/index.js';

export function createUserContainer(userContainer: Container) {

  userContainer
    .bind<UserService>(Component.UserService)
    .to(DefaultUserService)
    .inSingletonScope();

  userContainer
    .bind<types.ModelType<UserEntity>>(Component.UserModel)
    .toConstantValue(UserModel);

  userContainer
    .bind<Controller>(Component.UserController)
    .to(UserController)
    .inSingletonScope();
  return userContainer;
}
