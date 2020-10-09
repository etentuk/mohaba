import React, { FC, useState } from "react";
import { Button, Radio, Typography } from "antd";
import { view } from "@risingstack/react-easy-state";
import { radioStyle } from "../ entities/constants";
import appState from "../store";

const MealMenu: FC = () => {
  const { Text } = Typography;

  const [mealChoice, setMealChoice] = useState(appState.experiment.meal);

  const mealMenu = [
    "Sausage, Egg, & Cheddar Classic Breakfast Sandwich (500 calories)",
    "Reduced-Fat Turkey-Style Bacon, Cheddar, & Egg White Breakfast (230 calories)\n",
    "Bacon, Gouda, & Egg on Artisan Roll (370 calories)",
    "Vegetable, Egg, & Fontiago on Multigrain Ciabatta (470 calories)",
    "Spinach, Feta, & Egg White Breakfast Wrap (290 calories)",
    "Rustic Bacon, Egg, & Cheese on Cheddar Chive Roll (470 calories)",
    "Roasted Ham, Swiss, & Egg on Croissant Bun - PM bun (450 calories)",
    "Egg & Cheddar on English Muffin (280 calories)",
    "Double Smoked Bacon (490 calories)",
    "Spicy Chorizo Monterey Jack and Egg (500 calories)",
    "Gluten-free Canadian Bacon Breakfast Sandwich (280 calories)",
  ];
  return (
    <div>
      <Text>
        Could you please select a meal you would be interested in eating from
        the menu below
      </Text>
      <br />
      <Radio.Group
        value={mealChoice}
        onChange={(e) => setMealChoice(e.target.value)}
      >
        {mealMenu.map((meal) => (
          <Radio value={meal} style={radioStyle}>
            {meal}
          </Radio>
        ))}
      </Radio.Group>
      <Button
        onClick={() => {
          appState.experiment.meal = mealChoice;
          appState.currentStep += 1;
        }}
        disabled={!mealChoice}
      >
        Proceed
      </Button>
    </div>
  );
};

export default view(MealMenu);
