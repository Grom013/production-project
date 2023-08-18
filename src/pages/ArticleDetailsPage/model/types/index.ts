import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage/model/types/ArticleDetailsCommentSchema';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
