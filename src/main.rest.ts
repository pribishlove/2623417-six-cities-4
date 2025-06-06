import 'reflect-metadata';
import { Container } from 'inversify';
import { Component } from './shared/types/index.js';
import {
  createRestApplicationContainer,
  RestApplication,
} from './rest/index.js';
import { createUserContainer } from './shared/modules/user/index.js';
import { createOfferContainer } from './shared/modules/offer/offer.container.js';
import { createCommentContainer } from './shared/modules/comment/comment.container.js';
import { createFavoriteContainer } from './shared/modules/favorite/favorite.container.js';
import { createAuthContainer } from './shared/modules/auth/index.js';

async function bootstrap() {
  const appContainer = new Container();
  createRestApplicationContainer(appContainer);
  createUserContainer(appContainer);
  createOfferContainer(appContainer);
  createCommentContainer(appContainer);
  createFavoriteContainer(appContainer);
  createAuthContainer(appContainer);

  const application = appContainer.get<RestApplication>(
    Component.RestApplication
  );
  await application.init();
}

bootstrap();
