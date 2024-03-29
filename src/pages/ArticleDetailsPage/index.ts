export {
    ArticleDetailsPageAsync as ArticleDetailsPage,
} from './ui/ArticleDetailsPage/ArticleDetailsPage.async';

export type { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';
export type { ArticleDetailsPageSchema } from './model/types';
export type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentSchema';
export { getCanEditArticle } from './model/selectors/article';
export { fetchCommentsByArticleId } from './model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
