import { Rule } from "antd/es/form";
import { RuleType } from "./ entities/types";

const errorMessage = (message: string) => {
  return `Please provide the ${message} before proceeding`;
};

export const getRequiredValidation = ({
  field,
  type,
}: {
  field: string;
  type: RuleType;
}): Rule[] => [
  {
    required: true,
    message: errorMessage(field),
    type,
  },
];
