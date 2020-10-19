import React, { FC, useEffect, useState } from "react";
import { Button, Radio, Typography } from "antd";
import { view } from "@risingstack/react-easy-state";
import { ArrowRightOutlined } from "@ant-design/icons";
import { mealStyle } from "../ entities/constants";
import appState from "../store";
import { nextPage } from "../functions";

const MealMenu: FC = () => {
  const { Title, Paragraph: P } = Typography;
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 40000);
    return () => clearTimeout(timer);
  }, []);

  const [mealChoice, setMealChoice] = useState(appState.experiment.meal);

  const mealMenu = [
    "Sausage, Egg, & Cheddar Classic Breakfast Sandwich (575 calories)",
    "Reduced-Fat Turkey-Style Bacon, Cheddar, & Egg White Breakfast (230 calories)\n",
    "Bacon, Gouda, & Egg on Artisan Roll (520 calories)",
    "Vegetable, Egg, & Fontiago on Multigrain Ciabatta (250 calories)",
    "Spinach, Feta, & Egg White Breakfast Wrap (235 calories)",
    "Rustic Bacon, Egg, & Cheese on Cheddar Chive Roll (570 calories)",
    "Roasted Ham, Swiss, & Egg on Croissant Bun - PM bun (550 calories)",
    "Egg & Cheddar on English Muffin (240 calories)",
    "Double Smoked Bacon (690 calories)",
    "Spicy Chorizo Monterey Jack and Egg (500 calories)",
    "Gluten-free Canadian Bacon Breakfast Sandwich (230 calories)",
  ];

  return (
    <div>
      <Title>Main Course</Title>
      {visible ? (
        <>
          <P>
            Please as at a restaurant setting please imagine you about to select
            an item from the menu and select what you feel like having this
            moment.
          </P>
          <br />
          <Radio.Group
            value={mealChoice}
            onChange={(e) => setMealChoice(e.target.value)}
          >
            {mealMenu.map((meal) => (
              <Radio
                value={meal}
                key={meal}
                style={mealStyle}
                className="mealMenuSpan"
              >
                {meal}
              </Radio>
            ))}
          </Radio.Group>
          <div className="forwardBtn">
            <Button
              onClick={() => {
                setClicked(true);
                appState.experiment.meal = mealChoice;
                nextPage();
              }}
              icon={<ArrowRightOutlined />}
              disabled={!mealChoice || clicked}
            />
          </div>
        </>
      ) : (
        <P>
          Please listen to the music for the next 40 seconds after which you can
          make your choice.
        </P>
      )}
    </div>
  );
};

export default view(MealMenu);
