import { IsEnum } from "class-validator";
import { Categories } from "./Categories";

export class CategoryDto {

  @IsEnum(Categories)
  name: Categories
}
