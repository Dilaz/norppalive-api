import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength, IsPositive, IsNumber, MaxLength, IsInt } from 'class-validator';

export class AddDetectionDto {
    @IsString()
    @MinLength(1)
    @MaxLength(250)
    @ApiProperty({
        description: 'Detection label',
        example: 'norppa'
    })
    label: string;

    @IsInt()
    @ApiProperty({
        description: 'Detection confidence in percentage',
        example: 55,
    })
    confidence: number;

    @ApiProperty({
        description: 'Detection area start x-coordinate',
        minimum: 0,
        maximum: 1280,
        example: 123,
    })
    @IsPositive()
    @IsNumber()
    x: number;

    @ApiProperty({
        description: 'Detection area start y-coordinate',
        minimum: 0,
        maximum: 720,
        example: 123,
    })
    @IsPositive()
    @IsNumber()
    y: number;

    @ApiProperty({
        description: 'Detection area end x-coordinate',
        minimum: 0,
        maximum: 1280,
        example: 321,
    })
    @IsPositive()
    @IsNumber()
    x2: number;

    @ApiProperty({
        description: 'Detection area end y-coordinate',
        minimum: 0,
        maximum: 720,
        example: 321,
    })
    @IsPositive()
    @IsNumber()
    y2: number;
}