import { ExpressionService } from './expression.service';
import { ExpressionListResponse, ExpressionResponse } from 'src/common/types/response.type';
export declare class ExpressionController {
    private readonly expressionService;
    constructor(expressionService: ExpressionService);
    getExpressions(): Promise<ExpressionListResponse>;
    getExpressionById(id: number): Promise<ExpressionResponse>;
    getThreeExpressionsByStartId(id: number): Promise<ExpressionListResponse>;
    getThreeExpressionsByStartIdAndCategory(id: number, category: string): Promise<ExpressionListResponse>;
    getDeliveriedExpressionsByUid(id: number): Promise<ExpressionListResponse>;
}
