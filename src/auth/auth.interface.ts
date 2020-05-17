export interface JwtPayload {
    readonly id: number
    readonly role: string
    readonly tokenId?: number
}