import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';
import { ArticleDetailsCommentsSchema } from '@/pages/ArticleDetailsPage';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
