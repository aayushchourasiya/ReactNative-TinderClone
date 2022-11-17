import {View, Text} from 'react-native';
import React, {Fragment} from 'react';
import Hobbies from '../hobbies';
import {hobbyImages} from '../../utils/hobbyImages';
import Media from '../media';

const HobbySection = ({hobbySection = [], condition, media}) => (
  <Fragment>
    {hobbySection?.map((_item, index) => {
      return (
        <Hobbies
          image={hobbyImages?.find(i => i?.name === _item.name)?.image}
          heading={_item?.name}
          description={_item?.description}
          index={index}
          key={Math.random()}
        />
      );
    })}
    {condition && <Media heading={media?.title} image={media?.src} />}
  </Fragment>
);
export default HobbySection;
