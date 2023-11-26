export interface UseCase<Params,Response> {
    execute(request: Params): Promise<Response>;
}