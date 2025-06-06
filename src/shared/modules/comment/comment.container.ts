import { Container } from 'inversify';
import { types } from '@typegoose/typegoose';
import { CommentService } from './comment-service.interface.js';
import { Component } from '../../types/index.js';
import { CommentEntity, CommentModel } from './comment.entity.js';
import { DefaultCommentService } from './default-comment.service.js';
import { Controller } from '../../libs/rest/index.js';
import CommentController from './comment.controller.js';

export function createCommentContainer(commentContainer: Container) {

  commentContainer
    .bind<CommentService>(Component.CommentService)
    .to(DefaultCommentService)
    .inSingletonScope();

  commentContainer
    .bind<types.ModelType<CommentEntity>>(Component.CommentModel)
    .toConstantValue(CommentModel);

  commentContainer
    .bind<Controller>(Component.CommentController)
    .to(CommentController)
    .inSingletonScope();

  return commentContainer;
}
