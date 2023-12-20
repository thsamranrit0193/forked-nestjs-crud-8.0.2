import { ObjectLiteral } from '@lab3dvlp/crud-util';
import { CustomOperators, ParamsOptions, ParsedRequestParams } from './interfaces';
import { QueryFields, QueryFilter, QueryJoin, QuerySort, SCondition, SConditionAND, SFields } from './types';
export declare class RequestQueryParser implements ParsedRequestParams {
    fields: QueryFields;
    paramsFilter: QueryFilter[];
    authPersist: ObjectLiteral;
    search: SCondition;
    filter: QueryFilter[];
    or: QueryFilter[];
    join: QueryJoin[];
    sort: QuerySort[];
    limit: number;
    offset: number;
    page: number;
    cache: number;
    includeDeleted: number;
    private _params;
    private _query;
    private _paramNames;
    private _paramsOptions;
    private get _options();
    static create(): RequestQueryParser;
    getParsed(): ParsedRequestParams;
    parseQuery(query: any, customOperators?: CustomOperators): this;
    parseParams(params: any, options: ParamsOptions): this;
    setAuthPersist(persist?: ObjectLiteral): void;
    convertFilterToSearch(filter: QueryFilter): SFields | SConditionAND;
    private getParamNames;
    private getParamValues;
    private parseQueryParam;
    private parseValue;
    private parseValues;
    private fieldsParser;
    private parseSearchQueryParam;
    private conditionParser;
    private joinParser;
    private sortParser;
    private numericParser;
    private paramParser;
}
